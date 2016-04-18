var slack_channels = require('../../app/controllers/slack_channels.server.controller');
var slack_users = require('../../app/controllers/slack_users.server.controller');

module.exports = function(app){
    app.route('/slack/channels').get(slack_channels.init),
    app.route('/slack/users').get(slack_users.init)
}