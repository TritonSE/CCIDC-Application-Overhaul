import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();

// interfaces for request parameters
interface DisplayParams {
  id: string;
}

interface DeleteParams {
  id: string;
}

interface UpdateParams {
  id: string;
}

// POST method to upload file
router.post("/upload", (req: Request, res: Response) => {});

// GET method to display file by ID
router.get("/display/:id", (req: Request<DisplayParams>, res: Response) => {});

// DELETE method to delete file by ID
router.delete("/delete/:id", (req: Request<DeleteParams>, res: Response) => {});

// PATCH method to update file by ID
router.patch("/update/:id", (req: Request<UpdateParams>, res: Response) => {});

module.exports = router;
