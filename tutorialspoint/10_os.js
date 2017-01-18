//require OS module
var os = require('os');

//Returns the operating system name.
console.log('os.type()\t=>\t' + os.type());

//Returns the hostname of the operating system.
console.log('os.hostname()\t=>\t' + os.hostname());

//Returns the operating system platform.
console.log('os.platform()\t=>\t' + os.platform());

//Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".
console.log('os.arch()\t=>\t' + os.arch());

//Returns the operating system release.
console.log('os.release()\t=>\t' + os.release());

//Returns the endianness of the CPU. Possible values are "BE" or "LE".
console.log('os.endianness()\t=>\t' + os.endianness());

//Returns the operating system's default directory for temp files.
console.log('os.tmpdir()\t=>\t' + os.tmpdir());

//Returns the system uptime in seconds.
console.log('os.uptime()\t=>\t' + os.uptime());

//Returns an array containing the 1, 5, and 15 minute load averages.
console.log('os.loadavg()\t=>\t' + os.loadavg());

//Returns the total amount of system memory in bytes.
console.log('os.totalmem()\t=>\t' + os.totalmem());

//Returns the amount of free system memory in bytes.
console.log('os.freemem()\t=>\t' + os.freemem());

//Returns an array of objects containing information about each CPU/core installed: 
//model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).
console.log('os.cpus()\t=>\t' + JSON.stringify(os.cpus(), null, 4));

//Get a list of network interfaces.
console.log('os.networkInterfaces()\t=>\t' + JSON.stringify(os.networkInterfaces(), null, 4));

//os.EOL - a constant defining the appropriate End-of-line marker for the operating system.