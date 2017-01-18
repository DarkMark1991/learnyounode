//requite file system and zlib modules
var fs = require('fs');
var zlib = require('zlib');

//compress input.txt
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

//decompress 
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('output.txt'));

//print input txt stats
fs.stat('input.txt', function(err, stats){
	if(err) return console.error(err);
	console.log('input.txt stats:')
	console.log(stats);
   	console.log("isFile ? " + stats.isFile());
   	console.log("isDirectory ? " + stats.isDirectory());    
});

console.log('input.txt => input.txt.gz => output.txt');