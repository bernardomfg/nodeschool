var Fs = require('fs');

function asyncFunction() {
  Fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    var numberNewLines = fileContents.toString().split('\n').length - 1;
    console.log(numberNewLines);
  });
}

asyncFunction();
