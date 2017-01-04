var fs = require('fs');

module.exports = function(path, prefix, callback){
    prefix = "." + prefix;

    fs.readdir(path, function (err, files){
	if(err) return callback(err);
	var j = 0;
	var data = new Array();
	for(var i=0; i<files.length; i++)
    	    if(files[i].substr("-" + prefix.length) == prefix)
                data.push(files[i]);
	return callback(null, data);
    });
}
