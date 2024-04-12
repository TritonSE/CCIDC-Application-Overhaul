import express from "express";
import fileRoutes from "./src/routes/driveRoutes.ts";
import cors from 'cors';

const PORT: string | number = process.env.PORT ?? 3001;

const app = express();

app.use(cors())
app.use(express.json());

app.use("/file", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
