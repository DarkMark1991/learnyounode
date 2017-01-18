//requires

//log global objects
console.log('__filename\t=\t' + __filename);
console.log('__dirname\t=\t' + __dirname);
console.log('console\t=\t' + console);
console.log('Process\t=\t' + process);

//global functions setTimeout(cb, ms), clearTimeout(t)
function printHello(){
   console.log( "Hello after 2 seconds!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
// Now clear the timer
clearTimeout(t);

//global function setInterval(cb, ms);
function ohWell(){
   console.log( "Oh, well...");
}
// Now call above function after 2 seconds
setInterval(ohWell, 2000);