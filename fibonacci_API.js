let express = require("express");
let app = express();
let n1 = 0, n2 = 1, nextTerm;
let arrfibo = [];
function fibo(number){

for(let i=1 ; i <= number; i++){
	console.log(n1)
	arrfibo = fiboArr.push(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
}
fibo();

app.get("/arrfibo", function(request, response){
	response.json(arrfibo);
});

app.get("/arrfibo/:id", function(request, response){
	let id =request.params.id;
	response.send(fibo(id));
});
app.listen(3001);