var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
  data = strftime('%Y-%m-%d %H:%M\n');
  socket.end(data);
});
console.log("Server is trying to listen at port: " + process.argv[2])
server.listen(Number(process.argv[2]));
