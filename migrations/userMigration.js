const { QueryInterface } = require("sequelize");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const user = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable(
      "users",
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
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE },
      },
      { timestamps: false }
    );
  },
  down: (queryInterface, sequelize) => {
    return queryInterface.dropTable("user");
  },
};

module.exports = user;
