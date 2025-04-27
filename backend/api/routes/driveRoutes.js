"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_stream_1 = require("node:stream");
const express_1 = __importDefault(require("express"));
const googleapis_1 = require("googleapis");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
function authenticateServiceAccount() {
    var _a;
    const SCOPES = ["https://www.googleapis.com/auth/drive"];
    const auth = new googleapis_1.google.auth.GoogleAuth({
        credentials: JSON.parse((_a = process.env.GOOGLE_SECRET_KEY) !== null && _a !== void 0 ? _a : ""),
        scopes: SCOPES,
    });
    const drive = googleapis_1.google.drive({ version: "v3", auth });
    return drive;
}
function findOrCreateFolder(drive, folderName) {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
        // Search for existing folder with the same name in the root folder
        const query = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and '${rootFolderId}' in parents and trashed=false`;
        const searchResponse = yield drive.files.list({
            q: query,
            spaces: "drive",
            fields: "files(id, name)",
        });
        const files = searchResponse.data.files;
        if (files && files.length > 0 && files[0].id) {
            return files[0].id; // Return the first found folder's ID
        }
        else {
            // Folder does not exist, create a new one
            const fileMetadata = {
                name: folderName,
                mimeType: "application/vnd.google-apps.folder",
                parents: [rootFolderId !== null && rootFolderId !== void 0 ? rootFolderId : ""],
            };
            const folder = yield drive.files.create({
                requestBody: fileMetadata,
                fields: "id",
            });
            const folderId = folder.data.id;
            if (!folderId) {
                throw new Error("Failed to create the folder and obtain an ID.");
            }
            return folderId;
        }
    });
}
router.post("/upload", upload.array("files", 10), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files;
    const folderName = req.body.folderName;
    if (!files || files.length === 0) {
        res.status(400).send("No files were uploaded.");
        return;
    }
    else if (!folderName) {
        res.status(400).send("Folder name is required.");
        return;
    }
    const drive = authenticateServiceAccount();
    const folderId = yield findOrCreateFolder(drive, folderName);
    const uploadPromises = files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
        const fileMetadata = {
            name: file.originalname,
            parents: [folderId],
        };
        // Convert buffer to ReadableStream
        const readableStream = new node_stream_1.Readable();
        readableStream.push(file.buffer);
        readableStream.push(null);
        const media = {
            mimeType: file.mimetype,
            body: readableStream,
        };
        try {
            const response = yield drive.files.create({
                requestBody: fileMetadata,
                media,
                fields: "id",
            });
            return { name: file.originalname, fileId: response.data.id, folderId: folderId };
        }
        catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    }));
    const results = yield Promise.all(uploadPromises);
    res.send(results.filter((result) => result !== null));
}));
exports.default = router;
