const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");
const pathToDb = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(pathToDb, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.productDetails = t;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToDb, JSON.stringify(products), (err) => {
        console.log("Write File error while saving", err);
      });
    });
  }

  // static is used here to call this method directly on class itself
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  // fetch product by Id
  static findProductbyId(productId, cb) {
    getProductsFromFile((products) => {
      const product = products.filter((product) => product.id === productId);
      cb(product);
    });
  }
};
