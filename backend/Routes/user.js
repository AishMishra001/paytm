const express = require('express');
const userRouter = express.Router();
const zod = require('zod') ; 
const User = require('../db') ; 
const { JWT_SECRET } = require('../config');

// Signup Schema : 

const signUpSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string()
});

// signin Route : 

userRouter.post('/signup', async (req, res) => {
  
  const validData = signUpSchema.safeParse(req.body);

    if (!validData.success) {
      res.status(404).json({ message: "Email already taken / Incorrect inputs" });
    } 
    res.status(200).json({
      message: "User created successfully",
      token: "jwt"
    });
  
    const existingUser = User.findOne({
      username : req.body.username 
    })

    if(existingUser){
      res.status(404).json({ message: "Email already taken/Incorrect inputs"});
    }

    const user = User.create({
      username : req.body.username , 
      firstname : req.body.firstname , 
      lastname : req.body.lastname , 
      password : req.body.password , 
    })

const userId = user._id  ; 

const token = jwt.sign({
  userId
},JWT_SECRET)

res.json({
  message: "User created successfully",
  token: token ,
})

});


// signup Schema : 



const signInSchema = zod.object({
   username : zod.string() ,
   password : zod.string().number() 
})

// sign

userRouter.post("/signin", async (req,res)=>{
  


  const validUser = signInSchema.bodyParser(req.body) ; 

  if(!validUser.success){
    res.status(400).json({
      message: "Error while logging in"
    })
  }

  const user = await User.findOne({
    username : req.body.username ,
    password : req.body.password 
  }) ; 
  if(!user){
    res.status(411).json({ message: "Error while logging in"});
  } 

  const token = jwt.sign({
    token 
  }, JWT_SECRET) ; 
   res.json({
    token : token 
   })
})

module.exports = userRouter;