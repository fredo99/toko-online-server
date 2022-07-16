var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("./config/database");

//Router
var userRouter = require("./routes/userRoute");

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
//use body-parser
app.use(express.urlencoded({ extended: true }));

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

//listen on port
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

module.exports = app;
