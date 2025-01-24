const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    surName : {type : String, required : true},
    selectedMonth : {type : Number, required : true},
    selectedDate : {type : Number, required : true},
    selectedYear : {type : Number, required : true},
    emailOrNumber : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    gender : {type : String, required : true}
})
    
module.exports = mongoose.model ('Register', registerSchema)