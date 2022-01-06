const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
        dateOfExam: {type : Date, required : true},
        grade : {type : Number, required : true}
}); 

module.exports = mongoose.model('grade', ItemSchema);