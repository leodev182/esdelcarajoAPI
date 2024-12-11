import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const User = sequelize.define(
  "User",
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true, // No es obligatorio
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo si no se especifica
    },
    // El campo `status` tiene un valor por defecto de `true`
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

export default User;
