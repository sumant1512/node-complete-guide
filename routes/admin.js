const path = require("path");
const express = require("express");
const router = express.Router();

const productControllers = require("./../controllers/products");

// add-products api => GET method
router.get("/add-products", productControllers.getAddProducts);

// add-products api => POST method
router.post("/add-products", productControllers.postAddProducts);

module.exports = { routes: router };
