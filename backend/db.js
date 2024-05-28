const mongoose = require("mongoose")
const { Schema } = require("zod")
// mongodb+srv://aishlunatic001:ram123@@cluster0.bdn15bk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://aishlunatic001:ram123@@cluster0.bdn15bk.mongodb.net/?Paytm")

const PaytmSchema =  new Schema({
  username : {
    type : String ,
    required : true , 
    unique : true , 
    minlength : 7 ,
    maxlength : 20 , 
    trim : true 
  }, 
  firstname : String , 
  lastname : String ,
  password : String , 
})

const User = mongoose.model( 'User' , PaytmSchema) ; 

module.exports = {
   User 
}