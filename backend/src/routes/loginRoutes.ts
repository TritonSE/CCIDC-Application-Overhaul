import express, { Request, Response, Router } from "express";
import cors from "cors";

const router: Router = express.Router();
const corsOptions = {
  origin: "http://localhost:5173",
};

router.get("/login", cors(corsOptions), (req: Request, res: Response) => {
  res.cookie("token", "123", { httpOnly: true, secure: true });
  res.json({ message: "test works!" });
});

export default router;
