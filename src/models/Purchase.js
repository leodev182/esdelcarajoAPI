import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import User from "./User.js"; // Relación con usuarios

const Purchase = sequelize.define(
  "Purchase",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // Relacionamos con la tabla de usuarios
        key: "id",
      },
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
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
    tableName: "purchases",
    timestamps: false, // Se gestionará el timestamp automáticamente por Sequelize
  }
);

// Relaciones
User.hasMany(Purchase, {
  foreignKey: "user_id",
  sourceKey: "id",
});

Purchase.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

export default Purchase;
