const express = require('express') ; 
const { User } = require('../db');
const { Schema } = require('zod');
const zod = require('zod') ; 

const AccountRouter = express.Router() ; 


// ROUTER TO GET THE BALANCE OF THE USER 

AccountRouter.get('/balance', async(req,res)=>{
  const account = User.findOne({
    userId : req.userId 
  })

  res.status(200).json({
    balance : account.balance 
  })
})


// ROUTER TO SEND MONEY FROM ONE USER TO ANOTHER 

const TransferSchema = new Schema({
   to : zod.string() , 
   amount : zod.number() 
})
AccountRouter.post('/transfer', async(req,res)=>{
     const ValidData = TransferSchema.safeParse(req.body) ; 

     if(!ValidData.success){
      res.status(400).json({
        message : "Invalid Data" ,
      })
     }
})