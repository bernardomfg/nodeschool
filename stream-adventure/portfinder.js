var portfinder = require('portfinder');

portfinder.basePort = 8099

portfinder.getPort(function (err, port) {
    console.log(port);
});
