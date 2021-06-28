const path = require("path");
const admin = require("./admin");

const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getProducts);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/index", shopController.getIndex);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders);

module.exports = router;
