var fs = require('fs');

fs.readdirSync(__dirname).forEach(function(filename) {
  require('./' + filename);
});