//require http module
var http = require('http');

//create server
http.createServer(function(req, res){
	//response header
	res.writeHead(200, {'content-type': 'text/plain'});

	//response body
	res.end('Hi there stranger!\n');
}).listen(8181);

//print to console
console.log('Server running at http://127.0.0.1:8181/');
