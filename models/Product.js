const sequelize = require("sequelize");
const db = require("../config/database");
const category = require("../models/Category");

const { DataTypes } = sequelize;

const product = db.define(
  "products",
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
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { timestamps: true }
);

// product.hasMany(category, { foreignKey: "id" });

module.exports = product;
