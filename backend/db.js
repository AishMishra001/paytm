const mongoose = require("mongoose")
// mongodb+srv://aishlunatic001:ram123@@cluster0.bdn15bk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://aishlunatic001:ram123@@cluster0.bdn15bk.mongodb.net/?Paytm")

const paytmSchema = new mongoose.Schema({
  username : {
    type : String , 
    required : true , 
    unique : true ,
    trim : true , 
    lowercase : true ,
    maxLength : 20  
  } , 
  email : {
    required : true , 
    unique : true , 
    type : String , 
    lowercase : true ,
    minLength : 3 , 
    maxLength : 30 
  } , 
  password : {
    required : true , 
    type : String ,
    unique : true ,
    minLength : 6  
  }

} )

const User = mongoose.model( "User" , paytmSchema )

module.exports = {
  User 
} 