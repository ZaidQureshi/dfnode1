var http = require("http");
var counter = 0;
http.createServer(function(req, res){
	//var result = longlongProcess();
	counter++;
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(counter);
	res.end();
}).listen(8888);