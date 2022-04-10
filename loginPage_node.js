let http = require("http");
console.log("program is running");

http.createServer(function(request, response){
		let msg = "LOGIN PAGE";
		response.writeHead(200,{"Content-Type": "text/html"});
		response.end(`<head>
			<style>
			h1{color:green;
			text-align: center;
			}
			form{
				border: 4px solid black;
				background-color: lightgrey;
				align-items: center;
				text-align: center;
				width: 400px;
				height: 300px;
				margin: auto auto;
			}
			div{

			}
			</style>
			</head>
			<body><div>
			<h1>${msg}</h1>
			<form><br/>
			<input type="text" placeholder="Enter Email" required/><br/><br/>
			<input type="password" placeholder="Enter Password" required/><br/>
			<button>Login</button><br/>
			<h4>Forget Password ?<i><a href="#">Click Here</a></i></h4><br/>
			</form>
			</div></body></html>`);
}).
listen(3001);