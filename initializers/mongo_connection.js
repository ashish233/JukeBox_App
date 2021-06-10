var mongoose = require('mongoose'),
  config = require('config'),
  conn = mongoose.connect(config.mongodb.uri);

mongoose.set('debug', require('config').debug);


module.exports = mongoose;
