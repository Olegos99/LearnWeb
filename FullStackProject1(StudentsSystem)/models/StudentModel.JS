const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    ID : {type : Number, required : true},
    FullName : {type : String, required : true},
    email : {type : String, required : true},
    Faculty : {type : String, required : true},
    BirthDate : {type : Date, required : true},
    Grades : [
        {        
        dateOfExam: {type : Date, required : true},
        grade : {type : Number, required : true}
        }
    ]

    
}); 

module.exports = mongoose.model('student', ItemSchema);