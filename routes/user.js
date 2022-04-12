const express = require("express");
const router = express.Router();
const path = require("path");
const userFunctions = require("../controllers/userController");


router.get("/user", userFunctions.indexController);
router.get("/user/:id", userFunctions.idController);
router.post("/user", userFunctions.usersController);
router.get("/user/remove/:id", userFunctions.removeidController);
router.get("/userappform", userFunctions.userformController);

module.exports = router;
