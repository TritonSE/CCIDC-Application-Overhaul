import { Router } from "express";
import { format } from "date-fns";
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
db.connect((err: mysql.MysqlError | null) => {
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
        numHours: 0,
        superviserName: "",
        companyAddress: "",
        companyCity: "",
        companyState: "",
        companyZip: "",
        companyCountry: "",
        superviserPhoneNum: "",
        superviserEmail: "",
        hireDate: "",
        lastDateWorked: "",
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
  const nextIdexOtherId = (maxIdexOtherId || 0) + 1;
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

  const otherMemberships =
    formData.ProfessionalMemberships.length > 1
      ? formData.ProfessionalMemberships.slice(1)
          .map((m: any) => m.membershipName)
          .join(", ")
      : "";
  const newProMemberships =
    formData.ProfessionalMemberships.length > 0
      ? [
          {
            pro_membership_id: nextProMembershipId++,
            cid_id: nextCidId,
            pro_membership: formData.ProfessionalMemberships[0].membershipName,
            level: formData.ProfessionalMemberships[0].membershipLevel,
            other_memberships: otherMemberships,
          },
        ]
      : [];

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
    app_date: format(new Date(), "yyyy-MM-dd"), // Assuming this field is empty
    app_docs_received: "application", // Assuming this field is empty
    app_date_payment: "0000-00-00", // Assuming this field is empty
    app_payment_type: "", // Assuming this field is empty
    app_payment_id: "", // Assuming this field is empty
    app_amount_received: "", // Assuming this field is empty
    path: "Path " + formData.pathNum, // Assuming this field is empty
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
    cert_issue_date: "",
    cert_expiration: formData.dateCertifiedExpires,
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
  db.beginTransaction((err: mysql.MysqlError | null) => {
    if (err) {
      console.error("Error starting transaction:", err);
      return res.status(500).send("Error starting transaction");
    }

    // Insert into cid_phones
    const insertPhoneQuery = "INSERT INTO cid_phones SET ?";

    db.query(insertPhoneQuery, newPhones, (err: mysql.MysqlError | null) => {
      if (err) {
        db.rollback(() => {
          console.error("Error inserting new phones:", err);
          return res.status(500).send("Error saving phones");
        });
        return;
      }

      // Insert into cid_addresses
      const insertAddressQuery = "INSERT INTO cid_addresses SET ?";

      db.query(insertAddressQuery, newAddress, (err: mysql.MysqlError | null) => {
        if (err) {
          db.rollback(() => {
            console.error("Error inserting new address:", err);
            return res.status(500).send("Error saving address");
          });
          return;
        }

        // Insert into cid_emails
        const insertEmailQuery = "INSERT INTO cid_emails SET ?";

        db.query(insertEmailQuery, newEmail, (err: mysql.MysqlError | null) => {
          if (err) {
            db.rollback(() => {
              console.error("Error inserting new email:", err);
              return res.status(500).send("Error saving email");
            });
            return;
          }

          // Insert into idex_schools
          const insertSchoolQuery =
            "INSERT INTO idex_schools (school_id, cid_id, name, city, state, country, start, end, core_units, degree) VALUES ?";

          const schoolValues = newSchools.map(
            (school: {
              school_id: number;
              cid_id: number;
              name: string;
              city: string;
              state: string;
              country: string;
              start: string;
              end: string;
              core_units: number;
              degree: number;
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

          db.query(insertSchoolQuery, [schoolValues], (err: mysql.MysqlError | null) => {
            if (err) {
              db.rollback(() => {
                console.error("Error inserting new school:", err);
                return res.status(500).send("Error saving school data");
              });
              return;
            }

            // Insert into cid_pro_assoc_memberships
            const insertProMembershipQuery =
              "INSERT INTO cid_pro_assoc_memberships (pro_membership_id, cid_id, pro_membership, level, other_memberships) VALUES ?";

            const proMembershipValues = newProMemberships.map(
              (membership: {
                pro_membership_id: number;
                cid_id: number;
                pro_membership: string;
                level: number;
                other_memberships: string;
              }) => [
                membership.pro_membership_id,
                membership.cid_id,
                membership.pro_membership,
                membership.level,
                membership.other_memberships,
              ],
            );

            db.query(
              insertProMembershipQuery,
              [proMembershipValues],
              (err: mysql.MysqlError | null) => {
                if (err) {
                  db.rollback(() => {
                    console.error("Error inserting new professional membership:", err);
                    return res.status(500).send("Error saving professional membership");
                  });
                  return;
                }

                // Insert into cid_ceus
                const insertCeuQuery =
                  "INSERT INTO cid_ceus (ceu_id, cid_id, type, code, course_name, sponsor, sponsor_other, hours, completion_date, online, old_id) VALUES ?";

                const ceuValues = newCeus.map(
                  (ceu: {
                    ceu_id: number;
                    cid_id: number;
                    type: string;
                    code: string;
                    course_name: string;
                    sponsor: string;
                    sponsor_other: string;
                    hours: number;
                    completion_date: string;
                    online: string;
                    old_id: number;
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

                db.query(insertCeuQuery, [ceuValues], (err: mysql.MysqlError | null) => {
                  if (err) {
                    db.rollback(() => {
                      console.error("Error inserting new CEUs:", err);
                      return res.status(500).send("Error saving CEUs");
                    });
                    return;
                  }

                  // Insert into cid_national_exams
                  const insertNationalExamQuery =
                    "INSERT INTO cid_national_exams (national_exam_id, cid_id, exam_name, date, exam_number) VALUES ?";

                  const nationalExamValues = newNationalExams.map(
                    (exam: {
                      national_exam_id: number;
                      cid_id: number;
                      exam_name: string;
                      date: string;
                      exam_number: number;
                    }) => [
                      exam.national_exam_id,
                      exam.cid_id,
                      exam.exam_name,
                      exam.date,
                      exam.exam_number,
                    ],
                  );

                  db.query(
                    insertNationalExamQuery,
                    [nationalExamValues],
                    (err: mysql.MysqlError | null) => {
                      if (err) {
                        db.rollback(() => {
                          console.error("Error inserting new national exams:", err);
                          return res.status(500).send("Error saving national exams");
                        });
                        return;
                      }

                      // Insert into idex_experience
                      const insertExperienceQuery =
                        "INSERT INTO idex_experience (experience_id, cid_id, documents, hours, outside, diversified_work, supervisor, address, city, state, zip, country, sup_phone, sup_email, hire_date, last_date) VALUES ?";

                      const experienceValues = newExperiences.map(
                        (experience: {
                          experience_id: number;
                          cid_id: number;
                          documents: string;
                          hours: number;
                          outside: string;
                          diversified_work: string;
                          supervisor: string;
                          address: string;
                          city: string;
                          state: string;
                          zip: string;
                          country: string;
                          sup_phone: string;
                          sup_email: string;
                          hire_date: string;
                          last_date: string;
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

                      if (formData.WorkExperience[0].superviserName != "") {
                        db.query(insertExperienceQuery, [experienceValues], () => {
                          if (err) {
                            db.rollback(() => {
                              console.error("Error inserting new experiences:", err);
                              return res.status(500).send("Error saving experiences");
                            });
                            return;
                          }
                        });
                      }

                      // Insert into idex_other
                      const insertIdexOtherQuery = "INSERT INTO idex_other SET ?";

                      db.query(insertIdexOtherQuery, newIdexOther, () => {
                        if (err) {
                          db.rollback(() => {
                            console.error("Error inserting into idex_other:", err);
                            return res.status(500).send("Error saving other data");
                          });
                          return;
                        }

                        // Insert into cid_members
                        const insertMemberQuery = "INSERT INTO cid_members SET ?";

                        db.query(insertMemberQuery, newMember, () => {
                          if (err) {
                            db.rollback(() => {
                              console.error("Error inserting into cid_members:", err);
                              return res.status(500).send("Error saving member data");
                            });
                            return;
                          }

                          // Commit the transaction
                          db.commit(() => {
                            if (err) {
                              db.rollback(() => {
                                console.error("Error committing transaction:", err);
                                return res.status(500).send("Error saving form data");
                              });
                              return;
                            }

                            res.status(200).send("Form data saved successfully");
                          });
                        });
                      });
                    },
                  );
                });
              },
            );
          });
        });
      });
    });
  });
});

export default router;
