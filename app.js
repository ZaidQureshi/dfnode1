var http = require("http");
var counter = 0;
var port = process.env.PORT || 8888;
http.createServer(function(req, res){
	//var result = longlongProcess();
	//counter++;
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write((counter++).toString());
	console.log(counter);
	res.end();
}).listen(port);