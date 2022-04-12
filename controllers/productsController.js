const path = require("path");

let products = [{name:"Tshirt", price:1233, description:"amazing tshirt", itemcount:12}];

exports.indexController = function(request, response){
	response.json(products);
}
exports.idController = function(request, response){
	let id =request.params.id;
	response.json(products[id]);
}
//creating the post request to add product
exports.productsController =  function(request, response){
	let {name, price, description, itemcount} = request.body;
	let productOb = {name: name, price: price, description: description, itemcount: itemcount};
	products.push(productOb);
	response.json({name: name, msg: "product add to  products list successfully"});
};
//to remove each product from the product array using id , id means id can have any value so it variable.
exports.removeidController =  function(request, response){
	let id =request.params.id;
	let {name, price, description, itemcount} = request.body;
	//let todosOb = {name: name, creation_date: new Date(), status: status};
	products.splice(id,1);
	response.json({name: name, msg: "product removed from products list successfully"});
};
exports.productformController =  function(request, response){
	let completePath = path.join(__dirname, "/../productappform.html");
	response.sendFile(completePath);
};
