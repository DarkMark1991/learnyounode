var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

//Return the directory name of a path. Similar to the Unix dirname command.
console.log('dir name : ' + path.dirname(__filename));

//Return the last portion of a path. Similar to the Unix basename command.
console.log('base name : ' + path.basename(__filename, '.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));

//Returns an object from a path string.
var pathObj = path.parse('main.js');
console.log('parse : ' + JSON.stringify(pathObj, null, 4));

//Returns a path string from an object, the opposite of path.parse above.
console.log('format : ' + path.format(pathObj));

//properties

//The platform-specific file separator. '\\' or '/'.
console.log('separator : ' + path.sep);

//The platform-specific path delimiter, ; or ':'.
console.log('delimiter : ' + path.delimiter);

//Provide access to aforementioned path methods but always interact in a posix compatible way.
console.log('posix : ' + path.posix.sep, path.posix.delimiter);

//Provide access to aforementioned path methods but always interact in a win32 compatible way.
console.log('win32 : ' + JSON.stringify(path.win32, null, 4));