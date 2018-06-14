var request = require('request');

var endpoint = 'http://localhost:8099';

var r = request.post(endpoint);

process.stdin.pipe(r).pipe(process.stdout);

/*process.stdin
.pipe(request.post('http://localhost:8099'))
.pipe(process.stdout);*/
