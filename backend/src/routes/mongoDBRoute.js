const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("./formDataModel"); // Import FormData model from formDataModel.js

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/submit-form", async (req, res) => {
  try {
    const formData = new FormData(req.body);

    await formData.save();

    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving form data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
