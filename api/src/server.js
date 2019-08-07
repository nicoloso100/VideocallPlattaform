// require("dotenv").config();
// var express = require("express");
// var port = process.env.PORT || 5000;
// var cors = require("cors");

// const socket = require("./lib/socket");
// const { createServer } = require("http");

// const parser = require("body-parser");
// const passport = require("./config/passport");
// const routes = require("./routes/auth");

// var app = express();
// const server = createServer(app);

// app.use(passport.initialize());
// app.use(
//   parser.urlencoded({
//     extended: false
//   })
// );
// app.use(parser.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000"
//   })
// );

// app.use(routes);\

// app.listen(port);
// socket(server);

// console.log("API server started on: " + port);

const express = require("express");
const { createServer } = require("http");
const socket = require("./lib/socket");
var cors = require("cors");

const app = express();

var server = app.listen(5000);
socket(server);
console.log(`Server is listening at :${5000}`);
