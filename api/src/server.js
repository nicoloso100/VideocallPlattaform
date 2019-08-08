require("dotenv").config();

const express = require("express");
const parser = require("body-parser");
var cors = require("cors");

const socket = require("./utils/videocall/socket");
const passport = require("./utils/authentication/passport");
const routes = require("./routes");

const app = express();

app.use(passport.initialize());
app.use(parser.json());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);
//app.use('/', express.static(`${process.cwd()}/../application/build`));
app.use('/api', routes);

var server = app.listen(5000);
socket(server);
console.log(`Server is listening at :${5000}`);
