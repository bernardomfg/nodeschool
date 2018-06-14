var Fs = require('fs');

var fileString = Fs.readFileSync(process.argv[2]).toString();
var countNewLines = fileString.split('\n').length - 1;

console.log(countNewLines);
