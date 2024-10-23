var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    p_name:{type:String},
    addby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("product",userschema);