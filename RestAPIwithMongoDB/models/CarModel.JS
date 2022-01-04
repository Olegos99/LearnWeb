const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    // _id : {type : String, required: true},
    name : {type : String, required: true},
    model : {type : String, required: true}, 
    color : String, // by default is not requaired
    hp : {type : Number, required: true},
    year:{type : Number, required: true},
    img : String
})

// 'car' - name of collection that will be created 
// mongoose will create a database collection for the model car
module.exports = mongoose.model('MyCar', CarSchema);