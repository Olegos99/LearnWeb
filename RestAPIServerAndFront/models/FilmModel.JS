const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    // _id : {type : String, required: true},
    name : {type : String, required: true},
    director : String, 
    premieredDate:{type : Number, required: true},
    img : String,
    rating : {type : Number, required: true},
    type : String,
    runtime : Number,
    language : {type : String, required: true}, 
})

// 'car' - name of collection that will be created 
// mongoose will create a database collection for the model car
module.exports = mongoose.model('MyFilm', FilmSchema);