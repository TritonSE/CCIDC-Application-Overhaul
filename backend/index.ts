import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";

import fileRoutes from "./src/routes/fileRoutes";
import loginRoutes from "./src/routes/loginRoutes";

dotenv.config();

// use port 3000 unless there exists a preconfigured port
const PORT: string | number = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/file", fileRoutes);
app.use("/", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
