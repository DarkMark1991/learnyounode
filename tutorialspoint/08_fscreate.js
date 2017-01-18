//requite file system module
var fs = require('fs');

//create a directory
fs.mkdir('/tmp/test',function(err){
   console.log("\nGoing to create directory /tmp/test");
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

//read current directory
fs.readdir("./",function(err, files){
   console.log("\nGoing to read directory ./");
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});


fs.rmdir("/tmp/test",function(err){
   console.log("\nGoing to delete directory /tmp/test");
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});