const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:novaxion@localhost:5432/proyecto_final')

module.exports = sequelize