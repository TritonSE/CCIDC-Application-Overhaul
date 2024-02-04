import mongoose, { Document, Schema } from 'mongoose';

interface IGoogleDriveFile extends Document {
  googleDriveId: string;
  name: string;
  mimeType: string;
  createdAt: mongoose.Date;
}

const GoogleDriveFileSchema: Schema = new Schema<IGoogleDriveFile>({
  googleDriveId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  mimeType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const GoogleDriveFile = mongoose.model<IGoogleDriveFile>('GoogleDriveFile', GoogleDriveFileSchema);

export default GoogleDriveFile;
