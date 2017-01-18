//import events module
var events = require('events');

//eventEmitter object
var eventEmitter = new events.EventEmitter();

//event handler for connection
var connectionHandler = function connected(){
	console.log('connected successfully');
	//fire data_recieved event
	eventEmitter.emit('data_recieved');
}

//bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

//bind data_recieved event with anon fucntion
eventEmitter.on('data_recieved', function(){
	console.log('data recieved successfully');
});

//fire the connection event
eventEmitter.emit('connection');

console.log('fin!');