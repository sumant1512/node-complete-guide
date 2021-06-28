const path = require("path");
const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

// add-products api => POST method
router.post("/add-product", adminControllers.postAddProducts);

// get products list
router.get("/products");

module.exports = { routes: router };
