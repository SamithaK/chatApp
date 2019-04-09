var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var MessageSchema = new Schema({
        userID: String,
        message: String,
        type: String,
        timestamp: Number,
        receivedUser: String
});

module.exports = mongoose.model('message', MessageSchema);