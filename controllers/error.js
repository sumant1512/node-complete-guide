const path = require("path");

const rootDir = require("./../util/path");

module.exports = get404Error = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "page-not-found.html"));
};
