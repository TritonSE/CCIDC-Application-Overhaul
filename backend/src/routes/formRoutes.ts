import { Router } from "express";
import mysql from "mysql";
import mongoCreds from "../mongoCreds.json";

const { createConnection } = require("../helpers/db");

const router = Router();

const db = mysql.createConnection({
  host: mongoCreds.host,
  user: mongoCreds.username,
  password: mongoCreds.password,
  database: mongoCreds.database,
});
// Connect to the database
db.connect((err: any) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

const getLastIds = require("../helpers/getLastIds");

router.post("/submit-form", async (req, res) => {
  console.log("Form submission received");
  const formData = req.body;

  console.log("Form data:", formData);
  if (!formData.SchoolsAttended || formData.SchoolsAttended.length === 0) {
    formData.SchoolsAttended = [
      {
        schoolName: "Sample School",
        schoolCity: "Sample City",
        schoolState: "Sample State",
        schoolCountry: "Sample Country",
        dateStarted: "2020-01-01",
        dateStopped: "2020-12-31",
        coreUnits: 120,
        degreeReceived: "Sample Degree",
      },
    ];
  }

  if (!formData.ProfessionalMemberships || formData.ProfessionalMemberships.length === 0) {
    formData.ProfessionalMemberships = [
      {
        membershipName: "Sample Membership",
        membershipLevel: "Sample Level",
      },
    ];
  }

  if (!formData.ICCCourses || formData.ICCCourses.length === 0) {
    formData.ICCCourses = [
      {
        courseName: "Sample Course",
        courseCompleteDate: "2021-01-01",
      },
    ];
  }

  if (!formData.NationalExams || formData.NationalExams.length === 0) {
    formData.NationalExams = [
      {
        examName: "Sample Exam",
        examDate: "2021-02-01",
        certificateNumber: "123456",
      },
    ];
  }

  if (!formData.WorkExperience || formData.WorkExperience.length === 0) {
    formData.WorkExperience = [
      {
        numHours: 200,
        superviserName: "Sample Supervisor",
        companyAddress: "123 Sample St",
        companyCity: "Sample City",
        companyState: "Sample State",
        companyZip: "12345",
        companyCountry: "Sample Country",
        superviserPhoneNum: "123-456-7890",
        superviserEmail: "supervisor@example.com",
        hireDate: "2022-01-01",
        lastDateWorked: "2022-12-31",
      },
      {
        numHours: 300,
        superviserName: "Sample Supervisor",
        companyAddress: "123 Sample St",
        companyCity: "Sample City",
        companyState: "Sample State",
        companyZip: "12345",
        companyCountry: "Sample Country",
        superviserPhoneNum: "123-456-7890",
        superviserEmail: "supervisor@example.com",
        hireDate: "2022-01-01",
        lastDateWorked: "2022-12-31",
      },
    ];
  }
  const connection = await createConnection();

  // Fetch last IDs using the helper function
  const lastIDs = await getLastIds(connection);
  console.log("Fetched last IDs:", lastIDs);

  const {
    maxAddressId,
    maxCidId,
    maxEmailId,
    maxSchoolId,
    maxProMembershipId,
    maxCeuId,
    maxNationalExamId,
    maxExperienceId,
    maxIdexOtherId,
    maxPhoneId,
  } = lastIDs;

  const nextAddressId = (maxAddressId || 0) + 1;
  const nextCidId = (maxCidId || 0) + 1;
  const nextEmailId = (maxEmailId || 0) + 1;
  let nextSchoolId = (maxSchoolId || 0) + 1;
  let nextProMembershipId = (maxProMembershipId || 0) + 1;
  let nextCeuId = (maxCeuId || 0) + 1;
  let nextNationalExamId = (maxNationalExamId || 0) + 1;
  let nextExperienceId = (maxExperienceId || 0) + 1;
  let nextIdexOtherId = (maxIdexOtherId || 0) + 1;
  let nextPhoneId = (maxPhoneId || 0) + 1;

  const newAddress = {
    address_id: nextAddressId,
    cid_id: nextCidId,
    street_address: formData.address,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    county: formData.county,
    country: formData.country,
  };

  const newEmail = {
    email_id: nextEmailId,
    cid_id: nextCidId,
    email_address: formData.email,
  };

  const newSchools = formData.SchoolsAttended.map((school: any) => ({
    school_id: nextSchoolId++,
    cid_id: nextCidId,
    name: school.schoolName,
    city: school.schoolCity,
    state: school.schoolState,
    country: school.schoolCountry,
    start: school.dateStarted,
    end: school.dateStopped,
    core_units: school.coreUnits,
    degree: school.degreeReceived,
  }));

  const newProMemberships = formData.ProfessionalMemberships.map((membership: any) => ({
    pro_membership_id: nextProMembershipId++,
    cid_id: nextCidId,
    pro_membership: membership.membershipName,
    level: membership.membershipLevel,
    other_memberships: "", // Set other_memberships as an empty string
  }));

  const newCeus = formData.ICCCourses.map((ceu: any) => ({
    ceu_id: nextCeuId++,
    cid_id: nextCidId,
    type: "", // Set other columns to empty string
    code: "",
    course_name: ceu.courseName,
    sponsor: "",
    sponsor_other: "",
    hours: "",
    completion_date: ceu.courseCompleteDate,
    online: "",
    old_id: "",
  }));

  const newNationalExams = formData.NationalExams.map((exam: any) => ({
    national_exam_id: nextNationalExamId++,
    cid_id: nextCidId,
    exam_name: exam.examName,
    date: exam.examDate,
    exam_number: exam.certificateNumber,
  }));

  const newExperiences = formData.WorkExperience.map((experience: any) => ({
    experience_id: nextExperienceId++,
    cid_id: nextCidId,
    documents: "", // Assuming this field is empty
    hours: experience.numHours,
    outside: "", // Assuming this field is empty
    diversified_work: "", // Assuming this field is empty
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

  const newIdexOther = {
    idex_other_id: nextIdexOtherId,
    cid_id: nextCidId,
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
    app_date: "", // Assuming this field is empty
    app_docs_received: "", // Assuming this field is empty
    app_date_payment: "", // Assuming this field is empty
    app_payment_type: "", // Assuming this field is empty
    app_payment_id: "", // Assuming this field is empty
    app_amount_received: "", // Assuming this field is empty
    path: "", // Assuming this field is empty
  };

  const newPhones = {
    phone_id: nextPhoneId++,
    cid_id: nextCidId,
    phone_number: formData.phoneNumber,
    phone_type: formData.deviceType,
  };

  const newMember = {
    cid_id: nextCidId,
    cert_status: "",
    cert_number: "",
    cert_issue_date: formData.dateCertified,
    cert_expiration: "",
    first_name: formData.firstName,
    middle_name: formData.middleName,
    last_name: formData.lastName,
    last_name_second: formData.maidenName,
    other_name: "",
    stamp_name: "",
    company_name: formData.currCompanyName,
    website: formData.currCompanyWebsite,
    profession: formData.currCompanyProfession,
    specialization: formData.currCompanySpecialization,
    gender: formData.gender,
    publish_info: "",
    ceu_status: "",
    idex_cert_status: "",
    is_secure_password: "",
    commercial_designation: "",
  };

  // Start a transaction
  db.beginTransaction((err) => {
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).send("Error starting transaction");
    }

    // Insert into cid_phones
    const insertPhoneQuery = "INSERT INTO cid_phones SET ?";

    db.query(insertPhoneQuery, newPhones, (err, result) => {
      if (err) {
        return db.rollback(() => {
          console.error("Error inserting new phones:", err);
          return res.status(500).send("Error saving phones");
        });
      }

      // Insert into cid_addresses
      const insertAddressQuery = "INSERT INTO cid_addresses SET ?";

      db.query(insertAddressQuery, newAddress, (err, result) => {
        if (err) {
          return db.rollback(() => {
            console.error("Error inserting new address:", err);
            return res.status(500).send("Error saving address");
          });
        }

        // Insert into cid_emails
        const insertEmailQuery = "INSERT INTO cid_emails SET ?";

        db.query(insertEmailQuery, newEmail, (err, result) => {
          if (err) {
            return db.rollback(() => {
              console.error("Error inserting new email:", err);
              return res.status(500).send("Error saving email");
            });
          }

          // Insert into idex_schools
          const insertSchoolQuery =
            "INSERT INTO idex_schools (school_id, cid_id, name, city, state, country, start, end, core_units, degree) VALUES ?";

          const schoolValues = newSchools.map(
            (school: {
              school_id: any;
              cid_id: any;
              name: any;
              city: any;
              state: any;
              country: any;
              start: any;
              end: any;
              core_units: any;
              degree: any;
            }) => [
              school.school_id,
              school.cid_id,
              school.name,
              school.city,
              school.state,
              school.country,
              school.start,
              school.end,
              school.core_units,
              school.degree,
            ],
          );

          db.query(insertSchoolQuery, [schoolValues], (err, result) => {
            if (err) {
              return db.rollback(() => {
                console.error("Error inserting new school:", err);
                return res.status(500).send("Error saving school data");
              });
            }

            // Insert into cid_pro_assoc_memberships
            const insertProMembershipQuery =
              "INSERT INTO cid_pro_assoc_memberships (pro_membership_id, cid_id, pro_membership, level, other_memberships) VALUES ?";

            const proMembershipValues = newProMemberships.map(
              (membership: {
                pro_membership_id: any;
                cid_id: any;
                pro_membership: any;
                level: any;
                other_memberships: any;
              }) => [
                membership.pro_membership_id,
                membership.cid_id,
                membership.pro_membership,
                membership.level,
                membership.other_memberships,
              ],
            );

            db.query(insertProMembershipQuery, [proMembershipValues], (err, result) => {
              if (err) {
                return db.rollback(() => {
                  console.error("Error inserting new professional membership:", err);
                  return res.status(500).send("Error saving professional membership");
                });
              }

              // Insert into cid_ceus
              const insertCeuQuery =
                "INSERT INTO cid_ceus (ceu_id, cid_id, type, code, course_name, sponsor, sponsor_other, hours, completion_date, online, old_id) VALUES ?";

              const ceuValues = newCeus.map(
                (ceu: {
                  ceu_id: any;
                  cid_id: any;
                  type: any;
                  code: any;
                  course_name: any;
                  sponsor: any;
                  sponsor_other: any;
                  hours: any;
                  completion_date: any;
                  online: any;
                  old_id: any;
                }) => [
                  ceu.ceu_id,
                  ceu.cid_id,
                  ceu.type,
                  ceu.code,
                  ceu.course_name,
                  ceu.sponsor,
                  ceu.sponsor_other,
                  ceu.hours,
                  ceu.completion_date,
                  ceu.online,
                  ceu.old_id,
                ],
              );

              db.query(insertCeuQuery, [ceuValues], (err, result) => {
                if (err) {
                  return db.rollback(() => {
                    console.error("Error inserting new CEUs:", err);
                    return res.status(500).send("Error saving CEUs");
                  });
                }

                // Insert into cid_national_exams
                const insertNationalExamQuery =
                  "INSERT INTO cid_national_exams (national_exam_id, cid_id, exam_name, date, exam_number) VALUES ?";

                const nationalExamValues = newNationalExams.map(
                  (exam: {
                    national_exam_id: any;
                    cid_id: any;
                    exam_name: any;
                    date: any;
                    exam_number: any;
                  }) => [
                    exam.national_exam_id,
                    exam.cid_id,
                    exam.exam_name,
                    exam.date,
                    exam.exam_number,
                  ],
                );

                db.query(insertNationalExamQuery, [nationalExamValues], (err, result) => {
                  if (err) {
                    return db.rollback(() => {
                      console.error("Error inserting new national exams:", err);
                      return res.status(500).send("Error saving national exams");
                    });
                  }

                  // Insert into idex_experience
                  const insertExperienceQuery =
                    "INSERT INTO idex_experience (experience_id, cid_id, documents, hours, outside, diversified_work, supervisor, address, city, state, zip, country, sup_phone, sup_email, hire_date, last_date) VALUES ?";

                  const experienceValues = newExperiences.map(
                    (experience: {
                      experience_id: any;
                      cid_id: any;
                      documents: any;
                      hours: any;
                      outside: any;
                      diversified_work: any;
                      supervisor: any;
                      address: any;
                      city: any;
                      state: any;
                      zip: any;
                      country: any;
                      sup_phone: any;
                      sup_email: any;
                      hire_date: any;
                      last_date: any;
                    }) => [
                      experience.experience_id,
                      experience.cid_id,
                      experience.documents,
                      experience.hours,
                      experience.outside,
                      experience.diversified_work,
                      experience.supervisor,
                      experience.address,
                      experience.city,
                      experience.state,
                      experience.zip,
                      experience.country,
                      experience.sup_phone,
                      experience.sup_email,
                      experience.hire_date,
                      experience.last_date,
                    ],
                  );

                  db.query(insertExperienceQuery, [experienceValues], (err, result) => {
                    if (err) {
                      return db.rollback(() => {
                        console.error("Error inserting new experiences:", err);
                        return res.status(500).send("Error saving experiences");
                      });
                    }

                    // Insert into idex_other
                    const insertIdexOtherQuery = "INSERT INTO idex_other SET ?";

                    db.query(insertIdexOtherQuery, newIdexOther, (err, result) => {
                      if (err) {
                        return db.rollback(() => {
                          console.error("Error inserting into idex_other:", err);
                          return res.status(500).send("Error saving other data");
                        });
                      }

                      // Insert into cid_members
                      const insertMemberQuery = "INSERT INTO cid_members SET ?";

                      db.query(insertMemberQuery, newMember, (err, result) => {
                        if (err) {
                          return db.rollback(() => {
                            console.error("Error inserting into cid_members:", err);
                            return res.status(500).send("Error saving member data");
                          });
                        }

                        // Commit the transaction
                        db.commit((err) => {
                          if (err) {
                            return db.rollback(() => {
                              console.error("Error committing transaction:", err);
                              return res.status(500).send("Error saving form data");
                            });
                          }

                          res.status(200).send("Form data saved successfully");
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

export default router;
