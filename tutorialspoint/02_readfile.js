//require fs module
var fs = require('fs');

//read file and pass data (or error) to a callback function
fs.readFile('input.txt', function(err, data){
	//if error occured exit
	if(err) return console.error(err);
	//else print the data
	console.log(data.toString());
});

console.log('Fin!');