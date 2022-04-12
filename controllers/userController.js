const path = require("path");

let users = [{name:"tom", email:"tom@asfas.com", creation_date:"12-dec-2001", username:"tom123"}];
//to show all users in json
exports.indexController = function(request, response){
	response.json(users);
};

//to show each user from the users list , id means id can have any value so it variable.
exports.idController =  function(request, response){
	let id =request.params.id;
	response.json(users[id]);
};

//creating the post request to users
exports.usersController = function(request, response){
	let {name, email, creation_date, username} = request.body;
	let usersOb = {name: name, email: email, creation_date: creation_date, username: username};
	users.push(usersOb);
	response.json({username: username, msg: "user added to users array is complete"});
};

//to remove each user from the users array using id , id means id can have any value so it variable.
exports.removeidController =  function(request, response){
	let id =request.params.id;
	let {name, email, creation_date, username} = request.body;
	//let todosOb = {name: name, creation_date: new Date(), status: status};
	users.splice(id, 1);
	response.json({username: username, msg: "user removed from user array is complete"});
};

exports.userformController = function(request, response){
	let completePath = path.join(__dirname + "/../userappform.html");
	response.sendFile(completePath);
}