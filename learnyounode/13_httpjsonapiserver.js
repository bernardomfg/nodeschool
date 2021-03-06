// Load http module into http variable
  var http = require('http');

// Load url module into url variable
  var url = require('url');

// Load port from first command line argument into portNUmber variable
  var portNumber = process.argv[2];

// Create server and listen on portNumber
  http.createServer(function (req, res) {

    // Parse the url and query string using the url module
      var urlObject = url.parse(req.url, true),
          // Load pathname from urlObject into pathname
            pathname = urlObject.pathname,
          // Load query.iso into startTime
            startTime = urlObject.query.iso,
          result;

    // If pathname is equal to 'api/unixtime'
      if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
      }
      else if (pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
      }

    // Detects if result exists
      if (result) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(result));
      }
      else {
        res.writeHead(404);
        res.end();
      }

  }).listen(portNumber)

// getUnixTimeStamp returns object with unixtime key and value from getTimeStamp
  function getUnixTimeStamp(startTime) {
    return {
      unixtime: getTimeStamp(startTime)
    };
  }

// getTimeStamp returns parsed Date
  function getTimeStamp(startTime) {
    return Date.parse(startTime);
  }

// getTimeObj takes startTime and returns formatted object
  function getTimeObj(startTime) {
    // Load date parsed by getTimeStamp into date variable
      var date = new Date(getTimeStamp(startTime));

    // Return formatted time object
      return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
  }
