var Fs = require('fs');
var Path = require('path');

var currentDir = process.argv[2];
var filter = "." + process.argv[3];

Fs.readdir(currentDir, function (err, list) {
  list.forEach(function (file) {
    if (Path.extname(file)===filter)
    console.log(file);
  });
});
