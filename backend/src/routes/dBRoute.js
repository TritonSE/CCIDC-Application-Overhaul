const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Function to insert form data into the database
const insertFormDataToDatabase = (formData) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    city,
    state,
    zip,
    country,
    currCompanyName,
    currCompanyWebsite,
    currCompanyProfession,
    currCompanySpecialization,
    totalHours,
    totalYears,
    certifiedJurisdiction,
    jurisdictionName,
    certificationExam,
    dateOfExam,
    licenseNumber,
    dateCertified,
    convictedOfFelony,
    extraExplanation,
    SchoolsAttended,
    ProfessionalMemberships,
    ICCCourses,
    NationalExams,
    WorkExperience,
  } = formData;

  const sql = `
    INSERT INTO FormData (
      firstName, lastName, email, phoneNumber,
      address, city, state, zip, country,
      currCompanyName, currCompanyWebsite, currCompanyProfession, currCompanySpecialization,
      totalHours, totalYears,
      certifiedJurisdiction, jurisdictionName, certificationExam, dateOfExam, licenseNumber,
      dateCertified, convictedOfFelony, extraExplanation
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
      country,
      currCompanyName,
      currCompanyWebsite,
      currCompanyProfession,
      currCompanySpecialization,
      totalHours,
      totalYears,
      certifiedJurisdiction,
      jurisdictionName,
      certificationExam,
      dateOfExam,
      licenseNumber,
      dateCertified,
      convictedOfFelony,
      extraExplanation,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into database:", error);
      } else {
        console.log("Data inserted successfully");
      }
    },
  );

  // Still need to insert data (e.g., SchoolsAttended, ProfessionalMemberships, etc.) depending on schema
};

// POST endpoint to handle form submissions
app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Insert form data into the database
  insertFormDataToDatabase(formData);

  res.status(201).json({ message: "Form data saved successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
