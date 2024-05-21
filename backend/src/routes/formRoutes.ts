import { Router } from "express";
import mysql from "mysql";
import mongoCreds from "../mongoCreds.json";

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

router.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Fetch the last IDs
  const getLastIdsQuery = `
    SELECT MAX(address_id) as maxAddressId, MAX(cid_id) as maxCidId FROM cid_addresses;
    SELECT MAX(email_id) as maxEmailId FROM cid_emails;
    SELECT MAX(school_id) as maxSchoolId FROM idex_schools;
    SELECT MAX(pro_membership_id) as maxProMembershipId FROM cid_pro_assoc_memberships;
    SELECT MAX(ceu_id) as maxCeuId FROM cid_ceus;
    SELECT MAX(national_exam_id) as maxNationalExamId FROM cid_national_exams;
    SELECT MAX(experience_id) as maxExperienceId FROM idex_experience;
    SELECT MAX(idex_other_id) as maxIdexOtherId FROM idex_other;
    
  `;

  db.query(getLastIdsQuery, (err, results) => {
    if (err) {
      console.error("Error fetching last IDs:", err);
      return res.status(500).send("Error fetching last IDs");
    }

    const nextAddressId = (results[0][0].maxAddressId || 0) + 1;
    const nextCidId = (results[0][0].maxCidId || 0) + 1;
    const nextEmailId = (results[1][0].maxEmailId || 0) + 1;
    let nextSchoolId = (results[2][0].maxSchoolId || 0) + 1;
    let nextProMembershipId = (results[3][0].maxProMembershipId || 0) + 1;
    let nextCeuId = (results[4][0].maxCeuId || 0) + 1;
    let nextNationalExamId = (results[5][0].maxNationalExamId || 0) + 1;
    let nextExperienceId = (results[6][0].maxExperienceId || 0) + 1;
    let nextIdexOtherId = (results[7][0].maxIdexOtherId || 0) + 1;

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

    // Start a transaction
    db.beginTransaction((err) => {
      if (err) {
        console.error("Error starting transaction:", err);
        return res.status(500).send("Error starting transaction");
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

          const schoolValues = newSchools.map((school) => [
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
          ]);

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

            const proMembershipValues = newProMemberships.map((membership) => [
              membership.pro_membership_id,
              membership.cid_id,
              membership.pro_membership,
              membership.level,
              membership.other_memberships,
            ]);

            db.query(insertProMembershipQuery, [proMembershipValues], (err, result) => {
              if (err) {
                return db.rollback(() => {
                  console.error("Error inserting new professional membership:", err);
                  return res.status(500).send("Error saving professional memberships");
                });
              }

              // Insert into cid_ceus
              const insertCeuQuery =
                "INSERT INTO cid_ceus (ceu_id, cid_id, type, code, course_name, sponsor, sponsor_other, hours, completion_date, online, old_id) VALUES ?";

              const ceuValues = newCeus.map((ceu) => [
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
              ]);

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

                const nationalExamValues = newNationalExams.map((exam) => [
                  exam.national_exam_id,
                  exam.cid_id,
                  exam.exam_name,
                  exam.date,
                  exam.exam_number,
                ]);

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

                  const experienceValues = newExperiences.map((experience) => [
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
                  ]);

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

export default router;
