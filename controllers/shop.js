const path = require("path");

const rootDir = require("../util/path");
const Product = require("../models/product");

getProducts = (req, res, next) => {
  // added custom call back
  Product.fetchAll((products) => {
    res.status(200).send(products);
  });
};

getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findProductbyId(productId, (productDetails) => {
    productDetails.length
      ? res.status(200).send(productDetails)
      : res.status(404).send("Product Not Found");
  });
};

getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.status(200).send(products);
  });
};

getCart = (req, res, next) => {
  res.status(200).send("success cart");
};

getCheckout = (req, res, next) => {
  res.status(200).send("success checkout");
};

getOrders = (req, res, next) => {
  res.status(200).send("success orders");
};

module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  getIndex: getIndex,
  getCart: getCart,
  getCheckout: getCheckout,
  getOrders: getOrders,
};
