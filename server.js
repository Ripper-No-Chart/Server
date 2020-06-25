const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("view engine", "ejs");

//***************************//
//ROUTES//
//***************************//
const product = require("./routes/product");
const index = require("./routes");
app.use("/product", product);
app.use("/", index);

module.exports = { app };
