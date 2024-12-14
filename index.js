import app from "./app.js";
import syncDatabase from "./src/database/sync.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await syncDatabase();
    console.log("Connection has been established successfully");
    app.listen(3000);
    console.log("Server On port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
