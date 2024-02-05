const express = require("express");
const fileRoutes = require('./src/routes/fileRoutes.ts')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use("/file", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
