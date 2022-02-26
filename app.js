const express = require("express");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
let cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const axios = require("axios");

const app = express();
app.use(cors()); // Use this after the variable declaration

//verify token
// rs

app.use(express.json());
const port = 5001;

let products = require("./mockData/products.json");
app.get("/", (req, res) => {
  res.send("App is running");
});
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/products", (req, res) => {
  res.send(products);
});

//handle api crash
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
