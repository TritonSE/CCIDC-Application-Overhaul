import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ct_ccid_v787a_TESTING", "hzlinn", "Y$TvrnOeZe#3dHhtzsRAjaK&", {
  host: "50.62.145.14",
  dialect: "mysql",
});

export { sequelize };
