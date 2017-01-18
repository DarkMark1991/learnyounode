//import events module
var events = require('events');
//require http module
var http = require('http');

//eventEmitter object
var eventEmitter = new events.EventEmitter();

//event handler for connection
var connectionHandler = function connected(data){
	console.log('connection successful');
	//fire request_recieved event
	eventEmitter.emit('request_recieved', data);
}

//bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

//bind request_recieved event with anon fucntion
eventEmitter.on('request_recieved', function(data){
	console.log(data.method + ' request recieved on ' + data.host + data.url);
});



//create server
http.createServer(function(req, res){
	var headers = req.headers;
  	var method = req.method;
  	var url = req.url;
	var body = [];
	//read body in chunks
	req.on('data', function(chunk) {
  		body.push(chunk);
	}).on('end', function() {
  		body = Buffer.concat(body).toString();
  		// at this point, `body` has the entire request body stored in it as a string
		eventEmitter.emit('connection', { method: method, host: headers.host, url: url, body: body });
	});

	//response header
	res.writeHead(200, {'content-type': 'text/plain'});

	//response body
	res.end('Hi there stranger!\n');

}).listen(8181);

//print to console
console.log('Server running at http://127.0.0.1:8181/');


console.log('fin!');