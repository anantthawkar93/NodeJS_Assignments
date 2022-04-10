const express = require("express");
const router = express.Router();
const path = require("path");
const bookController = require("../controllers/bookController");

//GET Homepage
router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);
router.get('/bookandAuthor', bookController.getBookswithAuthor);
router.get('/bookandCondition', bookController.getBookwithCondition );

module.exports = router;