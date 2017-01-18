var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server! ');
   console.log(client.remoteAddress);
   console.log(client.remoteFamily);
   console.log(client.remotePort);
   console.log(client.localPort);
   console.log(client.bytesRead);
   console.log(client.bytesWritten);
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});