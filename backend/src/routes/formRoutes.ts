import express, { Request, Response, Router } from "express";
import { FormProvider } from "../../../frontend/src/contexts/index";
const router: Router = express.Router();

router.post("/updateFormData", (req: Request, res: Response) => {
  const formData = req.body; // grabs info from frontend

  FormProvider.setFormData(formData); // updates FormProvider

  res.status(200).json({ message: "Form submitted successfully" });
});
