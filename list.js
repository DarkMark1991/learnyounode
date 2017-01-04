var fs = require('fs');

var prefix = "." + process.argv[3];

fs.readdir(process.argv[2], function (err, files){
    for(var i=0; i<files.length; i++)
//        if(files[i].includes(process.argv[3]))
        if(files[i].substr("-" + prefix.length) == prefix)
            console.log(files[i]);
})