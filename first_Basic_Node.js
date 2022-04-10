//Create a local-server using Basic Nodejs

let http  = require("http");
console.log("program is running...");
http
	.createServer(function(request, response){
		let msg = "A very Good Afternoon";
		response.writeHead(200,{"Content-Type": "text/html"});
		response.end(`<div><h1>Welcome to zenrays</h1></div><h1>${msg}</h1>
			<script>
			let a = 12;
			console.log("the value of a is" +a);
			</script>`);
	})
	.listen(3001);