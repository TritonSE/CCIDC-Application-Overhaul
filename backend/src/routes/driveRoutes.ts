import express, { Request, Response } from 'express';
import multer from 'multer';
import { drive_v3, google } from 'googleapis';
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

async function findOrCreateFolder(drive: drive_v3.Drive, folderName: string): Promise<string> {
    // Search for existing folder with the same name
    const query = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`;
    const searchResponse = await drive.files.list({
        q: query,
        spaces: 'drive',
        fields: 'files(id, name)'
    });

    const files = searchResponse.data.files;
    console.log(files)
    if (files && files.length > 0 && files[0].id) {
        return files[0].id;  // Return the first found folder's ID
    } else {
        // Folder does not exist, create a new one
        const fileMetadata = {
            name: folderName,
            mimeType: 'application/vnd.google-apps.folder',
            parents: ["1jb3KZR8E3T7XoQgp0qBK2_oYGMGhe44a"] // Adjust if necessary
        };
        const folder = await drive.files.create({
            requestBody: fileMetadata,
            fields: 'id'
        });

        const folderId = folder.data.id;
        if (!folderId) {
            throw new Error("Failed to create the folder and obtain an ID.");
        }
        return folderId;
    }
}

router.post('/upload', upload.array('files', 10), async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];
    const folderName: string = req.body.folderName;

    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    } else if (!folderName) {
        return res.status(400).send('Folder name is required.');
    }

    const drive = await authenticateServiceAccount();
    const folderId = await findOrCreateFolder(drive, folderName);

    const uploadPromises = files.map(async (file: Express.Multer.File) => {
        const fileMetadata = {
            name: file.originalname,
            parents: [folderId]
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

            return { name: file.originalname, fileId: response.data.id, folderId: folderId };
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    });

    const results = await Promise.all(uploadPromises);
    res.send(results.filter(result => result !== null));
});

router.delete('/delete/folder/:folderId', async (req: Request, res: Response) => {
    const { folderId } = req.params;
    if (!folderId) {
        return res.status(400).send('Folder ID is required');
    }

    const drive = await authenticateServiceAccount();
    
    try {
        // List all files in the specified folder
        const listResponse = await drive.files.list({
            q: `'${folderId}' in parents and trashed=false`,
            fields: 'files(id)'
        });

        const files = listResponse.data.files;
        if (!files || files.length === 0) {
            return res.status(404).send('No files found in the folder.');
        }

        // Delete all files in the folder, ensuring file.id is not null
        const deletePromises = files.map(file => {
            if (file.id) { // Ensure file.id is not null
                return drive.files.delete({ fileId: file.id });
            } else {
                console.warn('Found a file with null ID, skipping deletion.');
                return Promise.resolve(null);
            }
        });

        // Wait for all delete operations to complete
        await Promise.all(deletePromises);

        res.send('All files in the folder have been deleted successfully.');
    } catch (error) {
        console.error('The API returned an error: ' + error);
        res.status(500).send('Error deleting files: ' + error);
    }
});

router.delete('/delete/file/:fileId', async (req: Request, res: Response) => {
    const { fileId } = req.params;
    if (!fileId) {
        return res.status(400).send('File ID is required');
    }

    try {
        const drive = await authenticateServiceAccount(); // Ensure this is defined or imported
        const response = await drive.files.delete({ fileId: fileId });

        if (response.status === 204) {
            console.log('File deleted successfully');
            res.send('File deleted successfully');
        } else {
            console.log('Unexpected response status:', response.status);
            res.status(500).send('Failed to delete the file with status code: ' + response.status);
        }
    } catch (error) {
        console.error('The API returned an error: ' + error);
        res.status(500).send('Error deleting file: ' + error);
    }
});


export default router;