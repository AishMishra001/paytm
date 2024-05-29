const express = require('express') ; 
const UserRouter = express.Router() ;
const zod = require('zod');  
const { User } = require('../db');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken') ; 
const { read } = require('graceful-fs');


// Creating schema 

signUpSchema = mongoose.Schema({
  username: zod.string().email() , 
  password: zod.string(), 
  firstname : zod.string() , 
  lastname : zod.string() ,
})
UserRouter.post('/signup', async (req,res)=>{

  // checking validity with safeParse 
    const ValidData = signUpSchema.safeParse(req.body) ; 

  // if Input data is not valid send a status code of 400 and message of incorrect user 
    
    if(!ValidData.success){
      res.status(400).json({
        message : 'Incorrect inputs'
      }) ;
    }

    // After checking the validity ..... if the data is valid check if the user already existing the database 

    const excitingUser = await User.findOne({
      username : body.username  
    })

   

    if(excitingUser){
      res.status(400).json({
        message : 'User already exists'
      })
    }

    // Now create the new user in the database 

       const user = await User.create({
          username : req.body.username , 
          firstname : req.body.firstname ,
          lastname : req.body.lastname , 
          password : req.body.password 
       }) 

       const userId = user._id ; 


       // response with a new jwt token after creating a new user 

       const token = jwt.sign({
         userId 
        }, JWT_SECRET) ; 

        res.json({
          message : "User successfully created " , 
          token : token 
        })
})

const signUpSchema = mongoose.Schema({
  username : zod.string(),
  password : zod.string(),
})
UserRouter.post('/signin', async (req,res)=>{
      const validUser = signUpSchema.safeParse(req.body) ; 

      if(!validUser.success){
        res.status(411).json({
          message : 'Incorrect Inputs'
        })
      }

      const existingUser = User.findOne({
        username : req.body.username , 
        password : req.body.password 
      })

      if(existingUser){
        
          const token = jwt.sign({
            userId : existingUser._id 
          }, JWT_SECRET ) ; 
        
          res.json({
             token : token 
          })
      }

      res.status(411).json({
        message : 'Error while logging in'
      })
})
