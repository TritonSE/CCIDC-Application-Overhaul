import express, { Request, Response, Router } from "express";
const router: Router = express.Router();

// interfaces for request parameters
type DisplayParams = {
  id: string;
};

type DeleteParams = {
  id: string;
};

type UpdateParams = {
  id: string;
};

// POST method to upload file
router.post("/upload", (req: Request, res: Response) => {
  res.json({ message: "upload hit" });
});

// GET method to display file by ID
router.get("/display/:id", (req: Request<DisplayParams>, res: Response) => {
  res.json({ message: "display hit" });
});

// DELETE method to delete file by ID
router.delete("/delete/:id", (req: Request<DeleteParams>, res: Response) => {
  res.json({ message: "delete hit" });
});

// PATCH method to update file by ID
router.patch("/update/:id", (req: Request<UpdateParams>, res: Response) => {
  res.json({ message: "update hit" });
});

export default router;
