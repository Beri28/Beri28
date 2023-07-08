const events=require('../model/model')
/*const express = require('express');
const app=express();
app.use(express.json())
app.use(express.urlencoded())*/
const add=async (req,res)=>{
    console.log(req.body)
    try {
        let addd=new events(req.body);
        addd.save().then(()=>{
            res.send("Saved")
        })
    } catch (error) {
        res.send(error)
    }
}
const getAll=async (req,res)=>{
    let results= await events.find({},{_id:0,__v:0});
    console.log(results)
    res.send(results)
}
exports.add=add;
exports.getAll=getAll;