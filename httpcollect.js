var http = require("http");

http.get(process.argv[2], function(res){
    res.setEncoding('utf8');
    var data = '';
    res.on('data', function(part){
        data += part;
    });
    res.on('error', console.error);
    res.on('end', function(end){
        console.log(data.length);
        console.log(data);
    });
}).on('error', console.error);