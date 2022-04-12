const express = require("express");
const router = express.Router();

const oldTodoFunction = require("../controllers/old_TodoController");

//This Old Todo API example is to made just for routing purpose in server-side.
//We are entering/getting todos using "todoform", and pushing in todos using post method. 

router.get("/todos",oldTodoFunction.initialController);
router.get("/todos/:id",oldTodoFunction.idController);
router.post("/todos",oldTodoFunction.todosController);
router.get("/todos",oldTodoFunction.todoformController);

module.exports = router;
