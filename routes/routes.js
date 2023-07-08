const express=require('express');
const app=express();
const router=express.Router();
const {add,getAll}=require('../controller/controller')

router.get('/concerts',(req,res)=>{
    res.sendFile('concerts.html',{root:'./public'})
}).get('/add',(req,res)=>{
    res.sendFile('add.html',{root:'./public'})
}).get('/getAll',getAll).get('/main',(req,res)=>{
    res.render('main',{layout:null})
}).get('/beyonce',(req,res)=>{
    res.sendFile('beyonce.html',{root:'./public'})
}).get('/drake',(req,res)=>{
    res.sendFile('drake.html',{root:'./public'})
}).get('/madonna',(req,res)=>{
    res.sendFile('maddona.html',{root:'./public'})
}).get('/taylorSwift',(req,res)=>{
    res.sendFile('taylor.html',{root:'./public'})
}).get('/harryStyles',(req,res)=>{
    res.sendFile('harry.html',{root:'./public'})
}).get('/disney',(req,res)=>{
    res.sendFile('disney.html',{root:'./public'})
}).get('/sports',(req,res)=>{
    res.sendFile('sports.html',{root:'./public'})
}).get('/mls',(req,res)=>{
    res.sendFile('mls.html',{root:'./public'})
})
router.post('/add',add).post('/test',(req,res)=>{
    console.log(req.body)
}).get('/search/:name',(req,res)=>{
    console.log(req.query.searchValue)
    let text=req.query.searchValue;
    text=text.toLocaleLowerCase();
    console.log('2',text)
    let check0=text.search("beyonce");
    let check1=text.search("drake")
    let check2=text.search('taylor swift')
    let check3=text.search('madonna')
    let check4=text.search('harry styles')
    if(check0>=0){
        res.redirect('/beyonce')
    }
    else if(check1>=0){
        res.redirect('/drake')
    }
    else if(check2>=0){
        res.redirect('/taylorSwift')
    }
    else if(check3>=0){
        res.redirect('/madonna')
    }
    else if(check4>=0){
        res.redirect('/harryStyles')
    }
    else{
        res.redirect('/#menu')
    }
    

})

module.exports=router;