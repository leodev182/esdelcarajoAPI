"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar columnas para resetPasswordToken y resetPasswordExpires
    await queryInterface.addColumn("users", "resetPasswordToken", {
      type: Sequelize.STRING,
      allowNull: true, // Este campo puede ser nulo
    });

    await queryInterface.addColumn("users", "resetPasswordExpires", {
      type: Sequelize.DATE,
      allowNull: true, // Este campo también puede ser nulo
    });
  },

  async down(queryInterface, Sequelize) {
    // Eliminar las columnas si revertimos la migración
    await queryInterface.removeColumn("users", "resetPasswordToken");
    await queryInterface.removeColumn("users", "resetPasswordExpires");
  },
};
