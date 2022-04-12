const path = require("path");

let todos = [{name:"read book", status:"complete"},
    {name:"goto gym", status:"incomplete"},
    {name:"goto sleep", status:"incomplete"},
];

exports.initialController = function(request, response){
	response.json(todos);
}
//:id means id can have any value so it variable.
exports.idController = function(request, response){
	let id =request.params.id;
	response.json(todos[id]);
}

exports.todosController = function(request, response){
	let {name, status} = request.body;
	let todosOb = {name: name, status: status};
	todos.push(todosOb);
	response.json({status: 1, msg: "operation to add todo is complete"});
}
exports.todoformController = function(request, response){
	let completePath = path.join(__dirname + "/../todoform.html");
	response.sendFile(completePath);
}