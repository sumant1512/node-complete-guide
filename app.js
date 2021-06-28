// core packages
const path = require("path");

// third party packages
const express = require("express");
const bodyParser = require("body-parser");

// local imports
const admin = require("./routes/admin");
const shop = require("./routes/shop");
const error404 = require("./controllers/error");
const rootDir = require("./util/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/admin", admin.routes);
app.use(shop);

// default page not found
app.use(error404);

app.listen(4000);
