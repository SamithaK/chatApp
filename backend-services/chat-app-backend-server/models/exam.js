var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var examSchema = new Schema({
    lesson: String,
    type: String,
    
});

module.exports = mongoose.model('exam', examSchema);