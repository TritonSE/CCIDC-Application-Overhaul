import { Readable } from "node:stream";

import express, { Request, Response } from "express";
import { drive_v3, google } from "googleapis";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

function authenticateServiceAccount() {
  const SERVICE_ACCOUNT_KEY_FILE = "secret.json"; // Adjust the path as necessary
  const SCOPES = ["https://www.googleapis.com/auth/drive"];
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_KEY_FILE,
    scopes: SCOPES,
  });

  const drive = google.drive({ version: "v3", auth });
  return drive;
}

async function findOrCreateFolder(drive: drive_v3.Drive, folderName: string): Promise<string> {
  const rootFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  // Search for existing folder with the same name in the root folder
  const query = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and '${rootFolderId}' in parents and trashed=false`;
  const searchResponse = await drive.files.list({
    q: query,
    spaces: "drive",
    fields: "files(id, name)",
  });

  const files = searchResponse.data.files;

  if (files && files.length > 0 && files[0].id) {
    return files[0].id; // Return the first found folder's ID
  } else {
    // Folder does not exist, create a new one
    const fileMetadata = {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
      parents: [rootFolderId ?? ""],
    };
    const folder = await drive.files.create({
      requestBody: fileMetadata,
      fields: "id",
    });

    const folderId = folder.data.id;
    if (!folderId) {
      throw new Error("Failed to create the folder and obtain an ID.");
    }
    return folderId;
  }
}

router.post("/upload", upload.array("files", 10), async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const folderName: string = req.body.folderName;

  if (!files || files.length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  } else if (!folderName) {
    res.status(400).send("Folder name is required.");
    return;
  }

  const drive = authenticateServiceAccount();
  const folderId = await findOrCreateFolder(drive, folderName);

  const uploadPromises = files.map(async (file: Express.Multer.File) => {
    const fileMetadata = {
      name: file.originalname,
      parents: [folderId],
    };

    // Convert buffer to ReadableStream
    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);

    const media = {
      mimeType: file.mimetype,
      body: readableStream,
    };

    try {
      const response = await drive.files.create({
        requestBody: fileMetadata,
        media,
        fields: "id",
      });

      return { name: file.originalname, fileId: response.data.id, folderId: folderId };
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  });

  const results = await Promise.all(uploadPromises);
  res.send(results.filter((result) => result !== null));
});

export default router;
