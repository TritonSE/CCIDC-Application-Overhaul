import express from "express";
import fileRoute from './src/routes/driveRoutes.ts'; // Assuming the converted file is driveRoutes.js

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/file', fileRoute);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
