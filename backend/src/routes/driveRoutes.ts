import express, { Request, Response } from 'express';
import multer from 'multer';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

async function authenticateServiceAccount() {
    const SERVICE_ACCOUNT_KEY_FILE = 'secret.json'; // Adjust the path as necessary
    const SCOPES = ['https://www.googleapis.com/auth/drive'];
    const auth = new google.auth.GoogleAuth({
        keyFile: SERVICE_ACCOUNT_KEY_FILE,
        scopes: SCOPES,
    });

    const drive = google.drive({ version: 'v3', auth });
    return drive;
}

router.post('/upload', upload.array('files', 10), async (req: Request, res: Response) => {
    // Ensure req.files is treated as an array of files
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const drive = await authenticateServiceAccount();

    // Map over the files array and create upload promises
    const uploadPromises = files.map(async (file) => {
        const fileMetadata = {
            name: file.originalname,
            parents: ["1jb3KZR8E3T7XoQgp0qBK2_oYGMGhe44a"]
        };

        const media = {
            mimeType: file.mimetype,
            body: fs.createReadStream(file.path),
        };

        try {
            const response = await drive.files.create({
                requestBody: fileMetadata,
                media: media,
                fields: 'id',
            });

            fs.unlinkSync(file.path); // Optionally delete the file after uploading

            return { name: file.originalname, fileId: response.data.id };
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    });

    // Wait for all upload promises to resolve
    const results = await Promise.all(uploadPromises);
    res.send(results.filter(result => result !== null));
});

export default router;