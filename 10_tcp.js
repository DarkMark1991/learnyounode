var net = require('net');

var server = net.createServer(function(sock){
    var date = new Date(Date.now());
    sock.write(date.getFullYear() + '-' 
	+ ("0" + (date.getMonth()+1)).substr(-2) + '-' 
	+ ("0" + date.getDate()).substr(-2) + ' ' 
	+ ("0" + date.getHours()).substr(-2) + ':' 
	+ ("0" + date.getMinutes()).substr(-2) + '\n');
    sock.end();
});
server.on('error', console.error);
server.listen(process.argv[2]);

