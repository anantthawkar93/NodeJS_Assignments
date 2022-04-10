let express = require("express");
let app = express();

app.get("/",function(request, response){
	let msg = "welcome to Express";
	response.send(`<head><body><style>h1{color:green}</style></head><body><div><h1>Welcome to Zenrays</h1></div><h1>${msg}</h1></body></html>`);
});
app.get("/contactus", function(request, response){
	response.send(`<h1>Contact us on 9860174421</h1>`);
});
app.get("/employees", function(request, response){
	response.send(`<ul><li>Jaidev</li></ul>`);
});
app.get("/studentinfo", function(request, response){
	let studentOb = {
		name: "Ashutosh",
		exp: "5",
	};
// response.send(studentOb);
response.json(studentOb);
});
app.listen(3001);