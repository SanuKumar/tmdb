const products = require("../mockData/products.json");
const fs = require("fs");

const allProducts = async (req, res) => {
  await res.send({products});
};

const updateProduct = async (req, res) => {
  const product = products.find((product) => {
    return req.body.id == product.id;
  });
  console.log("product", product);
  res.status(200).send(product);
};

module.exports = { allProducts, updateProduct };
