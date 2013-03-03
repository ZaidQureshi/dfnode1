var express = require("express");
var fs = require("fs");
var app = express.createServer();

var port = process.env.PORT || 8888;
app.get("/", function(req, res) {
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.contentType("html");
      res.send("File not found");
      }
    else{ 
      res.contentType("html");
      res.send(data);
    }
  });      
});

app.get("/myaction", function(req, res) {
  var orig = req.param("phrase");
  var phrase = orig;
  var optionsArray = new Array();
  
  
  for( var k = 0; k < 26; k++)
  {
   
  for( var i = 0; i < phrase.length; i++)
	{
	if (122>=phrase.charCodeAt(i) && phrase.charCodeAt(i)>=97){
	phrase = phrase.replace(phrase.charAt(i), String.fromCharCode(phrase.charCodeAt(i)-32));}
	optionsArray[k] = phrase;
	if(90>=phrase.charCodeAt(i) && phrase.charCodeAt(i)>=65) {
		var thing = String.fromCharCode(parseInt(phrase.charCodeAt(i))+1);
		if (thing.charCodeAt(0) >90)
		{
			thing = String.fromCharCode(64 +(thing.charCodeAt(0)-90));
		}
		else if (thing.charCodeAt(0) >122)
		{
			thing = String.fromCharCode(96 +(thing.charCodeAt(0)-122));
		}
		phrase = phrase.replace(phrase.charAt(i), thing);}
	}
  
}
var allStrings = ""
 for(var i = 0;i <27; i++)
{
	allStrings=allStrings+'\n'+optionsArray[i];}
  res.set('Content-Type', 'text/plain');
  res.send(allStrings);
});

app.listen(port);