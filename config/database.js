const sequelize = require("sequelize");

//buat koneksi database
const db = new sequelize("toko_online", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = db;
