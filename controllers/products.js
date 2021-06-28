const path = require("path");

const rootDir = require("../util/path");
const Product = require("../models/product");

getAddProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-products.html"));
};

postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

getProducts = (req, res, next) => {
  // added custom call back
  Product.fetchAll((products) => {
    console.log("****", products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
  });
};

module.exports = {
  getAddProducts: getAddProducts,
  postAddProducts: postAddProducts,
  getProducts: getProducts,
};
