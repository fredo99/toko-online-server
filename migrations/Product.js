const { QueryInterface } = require("sequelize");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const product = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable(
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
        },
        categories_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("products");
  },
};

module.exports = product;
