let express = require("express");
const path = require("path");

let app = express();
//this line allows us to use body parsing meaning that we can now read the data in the body.
app.use(express.urlencoded({extended: true}));

let todos = [{name:"read book", status:"complete"},{name:"goto gym", status:"incomplete"},];

app.get("/todos", function(request, response){
	response.json(todos);
});
//:id means id can have any value so it variable.
app.get("/todos/:id", function(request, response){
	let id =request.params.id;
	response.json(todos[id]);
});
//adding the todo items in an existing todos object.
app.post("/todos", function(request, response){
	let {name, status} = request.body;
	let todosOb = {name: name, status: status};
	todos.push(todosOb);
	response.json({status: 1, msg: "operation to add todo is complete"});
});

app.get("/todoform", function(request, response){
	let completePath = path.join(__dirname + "/todoform.html");
	response.sendFile(completePath);
})
app.listen(3001);