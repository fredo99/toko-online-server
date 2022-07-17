const sequelize = require("sequelize");
const db = require("../config/database");
const products = require("../models/Product");

const { DataTypes } = sequelize;

const category = db.define(
  "categories",
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
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  { timestamps: true }
);

category.hasMany(products, { foreignKey: "categories_id" });

module.exports = category;
