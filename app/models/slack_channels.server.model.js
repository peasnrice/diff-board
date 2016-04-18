// app/models/slack.js
var mongoose = require('mongoose');

// define the schema for our channel model
var channelSchema = mongoose.Schema({
    channel            : {
        id          : String,
        name        : String,
        num_members : Number,
    }
});