const express = require("express");
require("./config.js");
var routes = require("./routes");

const parser = require('body-parser')

const path = require("path");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(parser.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to our Todo App");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

routes(app);
