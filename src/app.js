const express = require("express");
const app = express();

const router = require("./router");
app.use(express.json()); //usando json na api
app.use(router);

module.exports = app;
