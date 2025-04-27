import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

import driveRoutes from "./src/routes/driveRoutes";
import formRoutes from "./src/routes/formRoutes";
import loginRoutes from "./src/routes/loginRoutes";

const app = express();

app.use(
  cors({
    origin: JSON.parse(process.env.LOGIN_ORIGINS ?? "[]") as string[],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/file", driveRoutes);
app.use("/", loginRoutes);
app.use("/form", formRoutes);

const PORT: string | number = process.env.PORT ?? 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

server.timeout = 240000;
