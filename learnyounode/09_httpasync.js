var http = require("http");

var n = 2;
function getAll(url){
    http.get(url, function(res){
        res.setEncoding('utf8');
        var data = '';
        res.on('data', function(part){
            data += part;
        });
        res.on('error', console.error);
        res.on('end', function(end){
            //console.log(data.length);
            console.log(data);
            if(n<=4) getAll(process.argv[n++]);
        });
    }).on('error', console.error);
}

getAll(process.argv[n++]);
