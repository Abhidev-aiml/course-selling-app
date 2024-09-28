// Desc: User routes
const {Router} = require('express');

const userRouter = Router();

userRouter.get('/login',(req,res)=>{
    res.json({message:"login endpoint"})
})

userRouter.get('/signup',(req,res)=>{
    res.json({message:"signup endpoint"})
})  
userRouter.get('/purchases',(req,res)=>{
    res.json({message:"purchases endpoint"})
})   

module.exports = userRouter;