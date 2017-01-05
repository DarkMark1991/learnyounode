var ls = require('./lsmod.js');

ls(process.argv[2], process.argv[3], function(err, data){
    if(err)
	return console.error('Error occured:', err);
    for(var i=0; i<data.length; i++)
	console.log(data[i]);
});