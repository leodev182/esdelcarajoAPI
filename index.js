import app from "./app.js";
import { sequelize } from "./src/database/database.js";
import "./app.js";

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully");
    app.listen(3000);
    console.log("Server On port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
