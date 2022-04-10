let express = require("express");
let app = express();

let numfact;
  function factorial(x) {

    if (x == 0) {
        return 1;
    }

    else if(x > 0){
        return x * factorial(x - 1);
    }
}
factorial();
app.get("/numfact/:id", function(request, response){
	let id =request.params.id;
	response.json(`Factorial Value of ${id} is ${factorial(id)}`);
});
app.listen(3001);