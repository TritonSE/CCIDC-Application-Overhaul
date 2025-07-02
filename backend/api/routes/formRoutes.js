"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const express_1 = require("express");
const mysql_1 = __importDefault(require("mysql"));
const router = (0, express_1.Router)();
router.post("/submit-form", (req, res) => {
    const asyncHelper = () => __awaiter(void 0, void 0, void 0, function* () {
        const formData = req.body;
        const db = mysql_1.default.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });
        // Connect to the database
        yield new Promise((resolve, reject) => {
            db.connect((err) => {
                if (err) {
                    console.error("Error connecting to the database:", err);
                    db.end();
                    reject(err);
                    return;
                }
                console.log("Connected to the MySQL database");
                resolve();
            });
        });
        // Start a transaction
        yield new Promise((resolve, reject) => {
            db.beginTransaction((err) => {
                if (err) {
                    console.error("Error starting transaction:", err);
                    db.end();
                    res.status(500).send("Error starting transaction");
                    reject(err);
                    return;
                }
                resolve();
            });
        });
        const nicename = req.cookies.nicename;
        let userId = null;
        yield new Promise((resolve, reject) => {
            db.query(`SELECT ID FROM wp_bcaf_users WHERE user_login = '${nicename}' OR user_nicename = '${nicename}'`, (err, results) => {
                var _a;
                if (err) {
                    db.rollback(() => {
                        console.error("Error getting logged-in user's ID:", err, results);
                        db.end();
                        res.status(500).send("Error saving member data");
                        reject(err);
                    });
                    return;
                }
                // If we don't have any results, this will just be null/undefined and we'll get a new cidId
                userId = (_a = results === null || results === void 0 ? void 0 : results[0]) === null || _a === void 0 ? void 0 : _a.id;
                resolve();
            });
        });
        const newMember = Object.assign(Object.assign({}, (userId ? { cid_id: userId } : {})), { cert_status: "", cert_number: "", cert_issue_date: "", cert_expiration: formData.dateCertifiedExpires, first_name: formData.firstName, middle_name: formData.middleName, last_name: formData.lastName, last_name_second: formData.maidenName, other_name: "", stamp_name: "", company_name: formData.currCompanyName, website: formData.currCompanyWebsite, profession: formData.currCompanyProfession, specialization: formData.currCompanySpecialization, gender: formData.gender, publish_info: "", ceu_status: "", idex_cert_status: "", is_secure_password: "", commercial_designation: "" });
        // Insert into cid_members
        const insertMemberQuery = "INSERT INTO cid_members SET ?";
        const cidId = yield new Promise((resolve, reject) => {
            db.query(insertMemberQuery, newMember, (err, results) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting into cid_members:", err);
                        db.end();
                        res.status(500).send("Error saving member data");
                        reject(err);
                    });
                    return;
                }
                resolve(results.insertId);
            });
        });
        const newPhones = {
            cid_id: cidId,
            phone_number: formData.phoneNumber,
            phone_type: formData.deviceType,
        };
        // Insert into cid_phones
        const insertPhoneQuery = "INSERT INTO cid_phones SET ?";
        yield new Promise((resolve, reject) => {
            db.query(insertPhoneQuery, newPhones, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new phones:", err);
                        db.end();
                        res.status(500).send("Error saving phones");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        });
        const newAddress = {
            cid_id: cidId,
            street_address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            county: formData.county,
            country: formData.country,
        };
        // Insert into cid_addresses
        const insertAddressQuery = "INSERT INTO cid_addresses SET ?";
        yield new Promise((resolve, reject) => {
            db.query(insertAddressQuery, newAddress, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new address:", err);
                        db.end();
                        res.status(500).send("Error saving address");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        });
        const newEmail = {
            cid_id: cidId,
            email_address: formData.email,
        };
        // Insert into cid_emails
        const insertEmailQuery = "INSERT INTO cid_emails SET ?";
        yield new Promise((resolve, reject) => {
            db.query(insertEmailQuery, newEmail, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new email:", err);
                        db.end();
                        res.status(500).send("Error saving email");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        });
        const newSchools = formData.SchoolsAttended.map((school) => ({
            cid_id: cidId,
            name: school.schoolName,
            city: school.schoolCity,
            state: school.schoolState,
            country: school.schoolCountry,
            start: school.dateStarted,
            end: school.dateStopped,
            core_units: school.coreUnits,
            degree: school.degreeReceived,
        }));
        // Insert into idex_schools
        const insertSchoolQuery = "INSERT INTO idex_schools SET ?";
        yield Promise.all(newSchools.map((school) => new Promise((resolve, reject) => {
            db.query(insertSchoolQuery, school, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new school:", err);
                        db.end();
                        res.status(500).send("Error saving school data");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        })));
        const otherMemberships = formData.ProfessionalMemberships.length > 1
            ? formData.ProfessionalMemberships.slice(1)
                .map((m) => m.membershipName)
                .join(", ")
            : "";
        const newProMemberships = formData.ProfessionalMemberships.length > 0
            ? [
                {
                    cid_id: cidId,
                    pro_membership: formData.ProfessionalMemberships[0].membershipName,
                    level: formData.ProfessionalMemberships[0].membershipLevel,
                    other_memberships: otherMemberships,
                },
            ]
            : [];
        // Insert into cid_pro_assoc_memberships
        const insertProMembershipQuery = "INSERT INTO cid_pro_assoc_memberships SET ?";
        yield Promise.all(newProMemberships.map((proMembership) => new Promise((resolve, reject) => {
            db.query(insertProMembershipQuery, proMembership, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new professional membership:", err);
                        db.end();
                        res.status(500).send("Error saving professional membership");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        })));
        const newCeus = formData.ICCCourses.map((ceu) => ({
            cid_id: cidId,
            type: "", // Set other columns to empty string
            code: ceu.courseCertificateNumber,
            course_name: ceu.courseName,
            sponsor: "",
            sponsor_other: "",
            hours: "",
            completion_date: ceu.courseCompleteDate,
            online: "",
            old_id: "",
        }));
        // Insert into cid_ceus
        const insertCeuQuery = "INSERT INTO cid_ceus SET ?";
        yield Promise.all(newCeus.map((ceu) => new Promise((resolve, reject) => {
            db.query(insertCeuQuery, ceu, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new CEUs:", err);
                        db.end();
                        res.status(500).send("Error saving CEUs");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        })));
        const newNationalExams = formData.NationalExams.map((exam) => ({
            cid_id: cidId,
            exam_name: exam.examName,
            date: exam.examDate,
            exam_number: exam.certificateNumber,
        }));
        // Insert into cid_national_exams
        const insertNationalExamQuery = "INSERT INTO cid_national_exams SET ?";
        yield Promise.all(newNationalExams.map((exam) => new Promise((resolve, reject) => {
            db.query(insertNationalExamQuery, exam, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting new national exams:", err);
                        db.end();
                        res.status(500).send("Error saving national exams");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        })));
        const newIdexOther = {
            cid_id: cidId,
            certified: formData.certifiedJurisdiction,
            expires: "", // Assuming this field is empty
            name: formData.jurisdictionName,
            number: formData.licenseNumber,
            felon: formData.convictedOfFelony,
            explanation: formData.extraExplanation,
            exam: formData.certificationExam,
            date: formData.dateOfExam,
            total_hours: formData.totalHours,
            total_years: formData.totalYears,
            app_date: (0, date_fns_1.format)(new Date(), "yyyy-MM-dd"), // Assuming this field is empty
            app_docs_received: "application", // Assuming this field is empty
            app_date_payment: "0000-00-00", // Assuming this field is empty
            app_payment_type: "", // Assuming this field is empty
            app_payment_id: "", // Assuming this field is empty
            app_amount_received: "", // Assuming this field is empty
            path: "Path " + formData.applicantPath, // Assuming this field is empty
        };
        // Insert into idex_other
        const insertIdexOtherQuery = "INSERT INTO idex_other SET ?";
        yield new Promise((resolve, reject) => {
            db.query(insertIdexOtherQuery, newIdexOther, (err) => {
                if (err) {
                    db.rollback(() => {
                        console.error("Error inserting into idex_other:", err);
                        db.end();
                        res.status(500).send("Error saving other data");
                        reject(err);
                    });
                    return;
                }
                resolve();
            });
        });
        // Insert into idex_experience
        const insertExperienceQuery = "INSERT INTO idex_experience SET ?";
        const newExperiences = formData.WorkExperience.map((experience) => ({
            cid_id: cidId,
            documents: "", // Assuming this field is empty
            hours: experience.numHours,
            outside: "", // Assuming this field is empty
            diversified_work: experience.designExperience,
            supervisor: experience.superviserName,
            address: experience.companyAddress,
            city: experience.companyCity,
            state: experience.companyState,
            zip: experience.companyZip,
            country: experience.companyCountry,
            sup_phone: experience.superviserPhoneNum,
            sup_email: experience.superviserEmail,
            hire_date: experience.hireDate,
            last_date: experience.lastDateWorked,
        }));
        yield Promise.all(newExperiences.map((experience) => new Promise((resolve, reject) => {
            if (experience.superviserName === "") {
                resolve();
            }
            else {
                db.query(insertExperienceQuery, experience, (err) => {
                    if (err) {
                        db.rollback(() => {
                            console.error("Error inserting new experiences:", err);
                            db.end();
                            res.status(500).send("Error saving experiences");
                            reject(err);
                        });
                        return;
                    }
                    resolve();
                });
            }
        })));
        // Commit the transaction
        db.commit((err) => {
            if (err) {
                db.rollback(() => {
                    console.error("Error committing transaction:", err);
                    db.end();
                    return res.status(500).send("Error saving form data");
                });
                return;
            }
            db.end();
            res.status(200).send("Form data saved successfully");
        });
    });
    asyncHelper()
        .then(() => { })
        .catch(() => { });
});
exports.default = router;
