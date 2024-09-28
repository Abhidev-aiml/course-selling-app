// Desc: This file contains the routes for the course module
const {Router} = require('express');

const courseRouter = Router();

courseRouter.get('/purchase',(req,res)=>{
    res.json({message:"purchase endpoint"})
})

courseRouter.get('/preview',(req,res)=>{
    res.json({message:"preview endpoint"})
})  

module.exports = courseRouter;