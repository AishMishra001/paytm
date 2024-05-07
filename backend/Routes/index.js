

const express = require('express') ; 
const userRouter = require('./user');
const app = express() ; 

const route = express.Router() ;  

route.use("/user",userRouter)
module.exports = {
  route 
}