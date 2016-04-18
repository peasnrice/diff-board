// server.js
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'), express = require('./config/express');

var db = mongoose();
var app = express();

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;

console.log('The magic happens on port ' + port);
