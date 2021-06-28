const Product = require("../models/product");

postAddProducts = (req, res, next) => {
  const product = new Product(req.body);
  product.save();
  res.status(200).send("success");
};

module.exports = {
  postAddProducts: postAddProducts,
};
