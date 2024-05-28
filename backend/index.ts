import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";

import mongoCreds from "./src/mongoCreds.json";
import fileRoutes from "./src/routes/fileRoutes";
import formRoutes from "./src/routes/formRoutes";
import loginRoutes from "./src/routes/loginRoutes";

dotenv.config();

const app = express();

const db = mysql.createConnection({
  host: mongoCreds.host,
  user: mongoCreds.username,
  password: mongoCreds.password,
  database: mongoCreds.database,
});

// Connect to the database
db.connect((err: any) => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

app.use(express.json());
app.use(cookieParser());

app.use("/file", fileRoutes);
app.use("/", loginRoutes);
app.use("/form", formRoutes);

const PORT: string | number = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

server.timeout = 240000;
