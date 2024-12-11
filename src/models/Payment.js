import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Purchase from "./Purchase.js"; // Relación con compras

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Purchase, // Relacionamos con la tabla de compras
        key: "id",
      },
    },
    pay_method: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    condition: {
      type: DataTypes.STRING,
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
    tableName: "payments",
    timestamps: false, // Se gestionará el timestamp automáticamente por Sequelize
  }
);

// Relaciones
Purchase.hasOne(Payment, {
  foreignKey: "purchase_id",
  sourceKey: "id",
});

Payment.belongsTo(Purchase, {
  foreignKey: "purchase_id",
  targetKey: "id",
});

export default Payment;
