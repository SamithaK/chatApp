var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    userID: String,
    origin: String,
    destination: String,
    airline: String,
    lastUpdate: Number,
    SID: Number,
    M: {
       AF: Number,
       fuel: Number,
       security:Number,
       OTH: Number,
       AI: Number 
    },
    N:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     },
     FF:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     },
     H:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     },
     ThrH:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     },
     FH:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     },
     THOU:{
        AF: Number,
        fuel: Number,
        security:Number,
        OTH: Number,
        AI: Number 
     }

    
});

module.exports = mongoose.model('dataModel', dataSchema);