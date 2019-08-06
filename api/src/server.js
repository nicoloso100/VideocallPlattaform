require('dotenv').config();

var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var cors = require("cors");
var bodyParser = require("body-parser");

const parser = require('body-parser');
const passport = require('./config/passport');
const routes = require('./routes/auth');


app.use(passport.initialize());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use(routes);
app.listen(port);

console.log("API server started on: " + port);
