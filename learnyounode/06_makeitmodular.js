var makeamodule = require('./makeamodule');

makeamodule(process.argv[2], process.argv[3], myCallback);



function myCallback(err, data) {
  if (err) return console.error("sorry, an error has occurred");
  data.forEach(function (item) {
    console.log(item);
  });
}
