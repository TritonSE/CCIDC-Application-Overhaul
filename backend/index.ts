import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import fileRoutes from "./src/routes/fileRoutes";
import loginRoutes from "./src/routes/loginRoutes";

import mongoCreds from "./src/mongoCreds.json";

dotenv.config();

const app = express();

const uri = `mongodb://${mongoCreds.username}:${encodeURIComponent(mongoCreds.password)}@${
  mongoCreds.host
}/${mongoCreds.database}`;

mongoose.connect(uri);

const connection = mongoose.connection;

// Event listeners for MongoDB connection
connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close MongoDB connection when Node process exits
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

app.use(express.json());
app.use(cookieParser());

app.use("/file", fileRoutes);
app.use("/", loginRoutes);

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
