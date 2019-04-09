
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userID: String,
    name: String,
    userName: String,
    Password: String,
    type: String
});

module.exports = mongoose.model('User', UserSchema);
