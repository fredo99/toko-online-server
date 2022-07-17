const { QueryInterface } = require("sequelize");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Category = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable(
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
          allowNull: false,
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
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("Categories");
  },
};

module.exports = Category;
