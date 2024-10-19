const mongoose = require('mongoose');

const dataInfoSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    jobTitle :{
        type:String,
        require:true
    },
    myImage:{
        type:String,
    },
    phone:{
        type:String,
        require:true
    },
    location:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },

},{timestamps:true});

module.exports= mongoose.model('Info',dataInfoSchema);