/*steps:
1. create the aurthor object
2. save the created author object
3. to fetch the data from MongoDB
*/



const Todo = require("../models/todo");

//To create a Todo object.
exports.createTodo = (request, response) =>{
    let {name, status} = request.body;
    //console.log(typeof status);
    //console.log(status);
    status = status == "true";
    //console.log(typeof status);
    //console.log(status);

//To save the created Todo Object.
    let todoObject = new Todo({name:name, status:status});
    todoObject.save((err)=>{
        if(err){
            console.log("Error happened in saving todo");
            console.log(err);
            response.send(err);
        }else{
            response.send("todo created successfully");
        }
    });
}
//To fetch the data from MongoDB
exports.getTodos = (request, response) =>{
    Todo.find((err, todoList)=>{
        if(err){
            response.json(err);
        }else{
            response.send(todoList);
        }
    });
}