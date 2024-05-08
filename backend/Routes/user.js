const express = require('express');
const userRouter = express.Router();
const zod = require('zod') ; 
const User = require('../db') ; 
const { JWT_SECRET } = require('../config');


const userSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string()
});

userRouter.post('/signup', async (req, res) => {
  
  const validData = userSchema.safeParse(req.body);

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

res.status(201).json({
  
})

});

module.exports = userRouter;