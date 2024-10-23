var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    password:{type:String},
    email:{type:String}
});

module.exports = mongoose.model("user",userschema);