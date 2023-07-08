const mongoose=require('mongoose');
const events=mongoose.Schema({
    artistName:{type:String,required:true},
    date:{type:String,required:true},
    venue:{type:String,required:true},
    speed:{type:String}
})

module.exports=mongoose.model('events',events)