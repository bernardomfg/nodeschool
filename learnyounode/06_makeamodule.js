module.exports = function (currentDir, filterExt, done){
  var Fs = require('fs');
  var Path = require('path');

  Fs.readdir(currentDir, function (err, list) {
    if (err) return done(err);
    var fileListArr = list.filter(function (fileName) {
      var re = new RegExp("^.*\."+filterExt,"i");
      return fileName.match(re);
    });
    done(null, fileListArr);
  });

};
