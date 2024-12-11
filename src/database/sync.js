import { sequelize } from "./database.js";
import User from "../models/User.js";
import Category from "../models/Category.js";
import Subcategory from "../models/Subcategory.js";
import Product from "../models/Product.js";
import Purchase from "../models/Purchase.js";
import Payment from "../models/Payment.js";

const syncDatabase = async () => {
  try {
    // Sincronización de los modelos sin eliminar datos existentes
    await sequelize.sync({ force: false });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error syncing database: ", error);
  }
};

export default syncDatabase;
