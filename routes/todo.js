var express = require("express");
var router = express.Router();
const path = require("path");
const todoFunction = require("../controllers/todoController");

let todo = [{name:"read book", status:"complete"},
        {name:"goto gym", status:"incomplete"},
        {name:"goto sleep", status:"incomplete"},
    ];

router.get("/", todoFunction.getTodos);
router.post("/", todoFunction.createTodo);

module.exports = router;