//require file system module
var fs = require('fs');
var data = '';

//create readable stream and set encoding to utf8
var readerStream = fs.createReadStream('input.txt').setEncoding('UTF8');

//open a writable stream
var writerStream = fs.createWriteStream('output.dat');

//handle stream events: data, end and error
readerStream.on('error', function(err){
	return console.log(err.stack);
}).on('data', function(chunk){
	data += chunk;
}).on('end', function(){
	//log data
	console.log(data);

	//reverse data string
	data = data.split('').reverse().join('');

	//write data to steam with utf8 encoding
	writerStream.write(data, 'UTF8');

	//mark the end of file
	writerStream.end();

	//handle stream events: finish and error
	writerStream.on('error', function(err){
		console.log(err.stack);
	}).on('finish', function(){
		console.log('write completed:');
		console.log(data);
	});
});

//pipe reader stream to writer stream
readerStream.pipe(writerStream);

console.log('fin!');