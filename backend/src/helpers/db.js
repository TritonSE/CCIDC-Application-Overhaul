const mysql = require("mysql2/promise");
const mongoCreds = require("../mongoCreds.json");

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: mongoCreds.host,
    user: mongoCreds.username,
    password: mongoCreds.password,
    database: mongoCreds.database,
  });

  return connection;
};

module.exports = {
  createConnection,
};
