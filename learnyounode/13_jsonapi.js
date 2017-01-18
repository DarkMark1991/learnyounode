var url  = require('url');
var http = require('http');
var path = require('path');

function hmsJson(isoTime){
    var date = new Date(isoTime);
    return JSON.stringify({
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds(),
    });
}

function unixJson(isoTime){
    return JSON.stringify({ unixtime : Date.parse(isoTime) });
}

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'application/json' });
    var reqUrl = url.parse(req.url, true);
    var resTxt = '';
    switch(path.basename(reqUrl.pathname)){
        case 'parsetime':
            resTxt = hmsJson(reqUrl.query.iso);
            break;
        case 'unixtime':
            resTxt = unixJson(reqUrl.query.iso);
            break;
    }
    res.end(resTxt);
});
server.on('error', console.error);
server.listen(process.argv[2]);


