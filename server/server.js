const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

const routes = require("./routes/routes.js")(app, fs);

const server = app.listen(4001, () => {
  console.log("listening on port %s...", server.address().port);
});
