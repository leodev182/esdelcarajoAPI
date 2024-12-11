import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Subcategory from "./Subcategory.js"; // Relación con Subcategory

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Subcategory, // Relacionado con la tabla de subcategorías
        key: "id",
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // El campo `status` tiene un valor por defecto de `true`
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "products", // Asegura que la tabla se llame 'products'
  }
);

// Relación con Subcategory
Subcategory.hasMany(Product, {
  foreignKey: "subcategory_id",
});
Product.belongsTo(Subcategory, {
  foreignKey: "subcategory_id",
});

export default Product;
