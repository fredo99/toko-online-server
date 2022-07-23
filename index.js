var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("./config/database");
const { queryParser } = require("express-query-parser");

//Router
var userRouter = require("./routes/userRoute");
var authRouter = require("./routes/authRoute");
var rajaongkirRouter = require("./routes/rajaongkirRoute");
var categoryRouter = require("./routes/categoryRoute");

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
//use body-parser
app.use(express.urlencoded({ extended: true }));
//use query-parser
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true,
  })
);

//Testing database connection
async () => {
  await db
    .authenticate()
    .then((result) => {
      console.log("Connection has been established successfully.", result);
    })
    .catch((error) => {
      console.log("Unable to connect to the database:", error.message);
    });
};

//api
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rajaongkir", rajaongkirRouter);
app.use("/api/v1/category", categoryRouter);

//listen on port
app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});

module.exports = app;
