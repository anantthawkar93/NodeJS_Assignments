let express = require("express");
const path = require("path");

let app = express();

//this line allows us to use body parsing meaning that we can now read the data in the body.
app.use(express.urlencoded({extended: true}));

let products = [{name:"Tshirt", price:1233, description:"amazing tshirt", itemcount:12}];


//to show all products in json
app.get("/products", function(request, response){
	response.json(products);
});


//to show each product from the product list , id means id can have any value so it variable.
app.get("/products/:id", function(request, response){
	let id =request.params.id;
	response.json(products[id]);
});

//creating the post request to add product
app.post("/products", function(request, response){
	let {name, price, description, itemcount} = request.body;
	let productOb = {name: name, price: price, description: description, itemcount: itemcount};
	products.push(productOb);
	response.json({name: name, msg: "product add to  products list successfully"});
});

//to remove each product from the product array using id , id means id can have any value so it variable.
app.get("/products/remove/:id", function(request, response){
	let id =request.params.id;
	let {name, price, description, itemcount} = request.body;
	//let todosOb = {name: name, creation_date: new Date(), status: status};
	products.splice(id,1);
	response.json({name: name, msg: "product removed from products list successfully"});
});

//inputform for entering the product items in products object.
app.get("/productappform", function(reuest, response){
	let completePath = path.join(__dirname + "/productappform.html");
	response.sendFile(completePath);
});
app.listen(3001);