var http = require("http");
var counter = 0;
var port = process.env.PORT || 8888;
http.createServer(function(req, res){
	
	counter=counter+1;
	res.writeHead(200, {"Content-Type": "text/html"});
	if (counter > 1)
	{
		res.write((counter-1).toString());
		console.log(counter-1);
	}
	else if (counter > 2)
	{
		res.write((counter-2).toString());
		console.log(counter-2);
	}
	else
	{
		res.write(counter.toString());
		console.log(counter);	
	}
	res.end();
}).listen(port);