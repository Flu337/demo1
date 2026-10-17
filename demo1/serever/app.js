const express = require("express");
const cors = require("cors");
const sequelize = require("./storage/database");
require("./storage/models");

const app = express();

app.use(cors());
app.use(express.json());

module.exports = app;
