var express = require("express");
var router = express.Router();

var productsFunctions = require("../controllers/productscontroller");

var router = express.Router();
router.get("/products", productsFunctions.indexController);
router.get("/products/:id", productsFunctions.idController);
router.post("/products", productsFunctions.productsController);
router.get("/products/remove/:id", productsFunctions.removeidController);
router.get("/productappform", productsFunctions.productformController);

module.exports = router;


