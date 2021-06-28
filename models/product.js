const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");
const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("Write File error while saving", err);
      });
    });
  }

  // static is used here to call this method directly on class itself
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
