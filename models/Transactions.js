const sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = sequelize;

const transaction = db.define("transactions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  users_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    foreignKey: true,
  },
  timestamps: true,
});

module.exports = transaction;
