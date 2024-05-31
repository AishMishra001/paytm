const express = require('express') ; 
const UserRouter = express.Router() ;
const zod = require('zod');  
const { User, Account } = require('../db');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken') ; 
const { authMiddleware } = require('../middleware');


// Creating schema 

signUpSchema = mongoose.Schema({
  username: zod.string().email() , 
  password: zod.string(), 
  firstname : zod.string() , 
  lastname : zod.string() ,
})

// SIGNUP ROUTER : 
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

       // creating a acccount of the user and give him some dummy balance 

       await Account.create({
         userId : userId , 
         balance : 1 + Math.random()*10000 
       })





       // response with a new jwt token after creating a new user 

       const token = jwt.sign({
         userId 
        }, JWT_SECRET) ; 

        res.json({
          message : "User successfully created " , 
          token : token , 
          balance : Math.random()*100000 
        })
})

// SIGNIN ROUTER : 

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


// UPDATE INFORMATION ROUTER 


const UpdateSchema = {
  password : zod.string() , 
  firstname : zod.string() , 
  lastname : zod.string() 
}
UserRouter.put('/user' , authMiddleware ,  async(req,res)=>{
    const validData = UpdateSchema.safeParse(req.body) 

    if(!validData.success){
      res.status(404).json({
        message : 'Incorrect Input'
      })
    }

    try{
      const user = await User.findById(req.userId);
      if (!user) {
          return res.status(404).json({
              message: "User not found",
          });
      }

      await User.updateOne({ _id: req.userId }, req.body);

      res.json({
          message: "Updated successfully",
      });
  } catch(error){
      res.status(500).json({
          message: "Internal server error",
          error: error.message,
      });
  }
  try {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully",
    });
} catch (error) {
    res.status(500).json({
        message: "Internal server error",
        error: error.message,
    });
}
})


// ROUTER TO FILTER USER FORM BACKEND 

UserRouter.get('/user/bulk' , async (req , res)=>{
  const filter = req.params.filter || ""  

const users = await User.find({

  $or : [{
    firstname : {
      $regex : filter ,
    } , 
    lastname : {
      $regex : filter ,
    }
  }]
})
res.json({
  user : users.map( user=>({
    username : user.username ,
    firstname : user.firstname , 
    lastname : user.lastname , 
    _id : user._id 
}))
})
}) 

// This performs a MongoDB query to find users whose firstName or lastName matches the filter string.
// The $or operator is used to match documents that satisfy either condition.
// The $regex operator creates a regular expression from the filter string to perform a pattern match.
