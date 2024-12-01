import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("esdelcarajo", "postgres", "welys182", {
  host: "localhost",
  dialect: "postgres",
});
