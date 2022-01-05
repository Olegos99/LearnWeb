const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    model : {type : String, required : true},
    color : {type : String, required : true},
    wheels : {type : Number},
    img : {type : String},
    productionyear : {type : Number},
    cost : {type : Number}
}); 

module.exports = mongoose.model('car', ItemSchema);