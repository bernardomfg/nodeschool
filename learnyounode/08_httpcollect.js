var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
  var body = '';
  var count = 0;

  response.setEncoding('utf8');
  response.on('data', function (data) {
    body += data;
    count += data.length;
  });
  response.on('error', console.error);
  response.on('end', function () {
    console.log(count);
    console.log(body);
  })
}).on('error', console.error);
