import express, { Request, Response } from "express";
import { FormSubmission } from "../models/formModel";

const router = express.Router();

// POST route to handle form submissions
router.post("/submit-form", async (req: Request, res: Response) => {
  try {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Create a new record in the FormSubmission table
    const newSubmission = await FormSubmission.create({
      name,
      email,
      message,
    });

    res.status(201).json({ message: "Form submission successful", data: newSubmission });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
