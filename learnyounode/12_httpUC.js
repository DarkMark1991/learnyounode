var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
    if(req.method !== 'POST') return res.end("Gimme a POST\n");
    res.writeHead(200, { 'content-type': 'text/plain' });
    req.pipe(map(function (part){
        return part.toString().toUpperCase();
    })).pipe(res);
});
server.on('error', console.error);
server.listen(process.argv[2]);

