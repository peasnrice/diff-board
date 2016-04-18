var config = require('./config'), mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  require('../app/models/slack_users.server.model');
  require('../app/models/slack_channels.server.model');
};