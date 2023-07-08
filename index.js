const express=require('express');
const app = express();
const router=require('./routes/routes')
const mongoose=require('mongoose')
const hbs=require('express-handlebars');

//mongoose.connect('mongodb://localhost:27017/tickets').then(()=>{console.log("Connection was a success")})
app.use(express.json())
app.use(express.urlencoded())
app.engine('hbs',hbs.engine({
    extname:'hbs',
    layoutsDir:'./views/partials',
    partialsDir:'./views/partials'
}))
app.set('view engine','hbs');
app.use('/',router)
app.use(express.static('public'))

app.listen(5000,()=>{
    console.log("Listening on port 5000")
})