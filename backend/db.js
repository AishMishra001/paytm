const mongoose = require("mongoose")

require('dotenv').config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });


const userSchema =  new mongoose.Schema({
  username : {
    type : String ,
    required : true , 
    unique : true , 
    trim : true 
  }, 
  firstname : {
    type : String ,
    required : true , 
    trim : true , 
  }, 
  lastname : {
    type : String , 
    required : true , 
    trim : true ,
  } ,
  password : {
    type : String ,
    required : true ,
  } , 
})

const accountSchema = new mongoose.Schema({
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

const User = mongoose.model( 'User' , userSchema) ; 
const Account = mongoose.model('Account', accountSchema ) ; 

module.exports = {
   User , 
   Account 
}