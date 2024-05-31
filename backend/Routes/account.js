const express = require('express') ; 
const { User, Account } = require('../db');
const { Schema } = require('zod');
const zod = require('zod') ; 
const { default: mongoose, startSession } = require('mongoose');
const { authMiddleware } = require('../middleware');

const AccountRouter = express.Router() ; 


// ROUTER TO GET THE BALANCE OF THE USER 

AccountRouter.get('/balance',authMiddleware , async (req,res)=>{
  const account = User.findOne({
    userId : req.userId 
  })

  res.status(200).json({
    balance : account.balance 
  })
})


// ROUTER TO SEND MONEY FROM ONE USER TO ANOTHER 

const TransferSchema = zod.object({
   to : zod.string() , 
   amount : zod.number() 
})
AccountRouter.post('/transfer',authMiddleware ,  async( req,res)=>{

 try{
  // session started : 

     const session = await mongoose.startSession() ; 

  // transaction start : 

     session.startTransaction() ; 

     const ValidData = TransferSchema.safeParse(req.body) ; 

     const { to , amount } = req.body ; 

     if(!ValidData.success){
      await session.abortTransaction();
       return res.status(400).json({
        message : "Invalid Data" ,
      })
     }


     // finding account from where amount should dedect 

     const fromAccount = await User.findOne({
      userId : req.userId 
     }).session(session)


     // check if user has insufficient balance to perform transaction 

     if(!fromAccount || fromAccount.amount < amount ){

      // aborting transaction so that rolling back happends 

      await session.abortTransaction() ; 
      res.status(400).json({
        message : "User Not Found // Insufficient balance" ,
      })
     }

     // finding account where amount should be transfered  

     const toAccount = await User.findOne({
      userId : to 
     })

     if(!toAccount){
      res.status(400).json({
        message : "User Not Found" ,
      })
     }

     // perform transaction 

     await Account.updateOne(
      { 
        userId : req.userId
      } , 
    {
      $inc : {
        balance : -amount
      }
    }).session(session) 

    await Account.updateOne(
      {
        userId : to 
      }  , 
      {
        $inc : {
          balance : amount 
        }
      }).session(session)

      await session.commitTransaction() ; 

      res.json({
        message : "Transaction successful !!"
      })

      await session.endSession() ; 
    } catch (error) {
      await session.abortTransaction();
      res.status(500).json({ message: "Transaction failed", error: error.message });
    } finally {
      session.endSession();
    }
})