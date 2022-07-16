const sequelize = require("sequelize");

//buat koneksi database
const db = new sequelize("test_mysql", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = db;
