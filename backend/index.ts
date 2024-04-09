import express from "express";
import fileRoutes from "./src/routes/fileRoutes";
import formSubmissionRoutes from "./src/routes/formSubmissionRoutes";
import { Sequelize } from "sequelize"; // Import Sequelize

const PORT: string | number = process.env.PORT ?? 3001;

const app = express();

// Sequelize database connection setup
const sequelize = new Sequelize("ct_ccid_v787a_TESTING", "hzlinn", "Y$TvrnOeZe#3dHhtzsRAjaK&", {
  host: "50.62.145.14",
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Call the testConnection function to test the database connection
testConnection();

app.use(express.json());

app.use("/file", fileRoutes);
app.use("/form", formSubmissionRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
