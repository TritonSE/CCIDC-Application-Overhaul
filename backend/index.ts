import express from "express";

import fileRoutes from "./src/routes/fileRoutes";
// const fileRoutes = require("./src/routes/fileRoutes.ts");
import loginRoutes from "./src/routes/loginRoutes";

const PORT: string | number = process.env.PORT ?? 3001;

const app = express();

app.use(express.json());

app.use("/file", fileRoutes);
app.use("/", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
