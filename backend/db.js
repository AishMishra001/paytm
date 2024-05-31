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
  firstname : {
    type : String ,
    required : true ,
    maxlength : 10 ,
    trim : true , 
  }, 
  lastname : {
    type : String , 
    required : true , 
    maxlength : 10 , 
    trim : true ,
  } ,
  password : {
    type : String ,
    required : true ,
    minlength : 8 ,
    maxlength : 20 ,
  } , 
})

const accountSchema = new Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId ,
    ref : 'User' , 
    required : true ,   
  } , 
  balance : {
    required : true , 
    type : Number , 
  }
})

const Account = mongoose.model('Account', accountSchema ) ; 
const User = mongoose.model( 'User' , PaytmSchema) ; 

module.exports = {
   User , 
   Account
}