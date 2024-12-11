import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Category from "./Category.js"; // Relación con categorías

const Subcategory = sequelize.define(
  "Subcategory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category, // Relacionamos con la tabla de categorías
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "subcategories",
    timestamps: false, // Se manejará el timestamp por defecto de Sequelize
  }
);

// Relaciones
Category.hasMany(Subcategory, {
  foreignKey: "category_id",
  sourceKey: "id",
});

Subcategory.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "id",
});

export default Subcategory;
