const express = require("express");
const router = express.Router();
const {
  allProducts,
  updateProduct,
} = require("../controllers/productController");

router.route("/").get(allProducts);
router.route("/").put(updateProduct);

module.exports = router;
