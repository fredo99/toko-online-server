const sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = sequelize;

const product_galleries = db.define(
  "product_galleries",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  { timestamps: true }
);

module.exports = product_galleries;
