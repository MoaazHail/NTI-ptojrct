const mongoose = require('mongoose');

const dataProjectSchema= new mongoose.Schema({
    projectTitle:{
        type:String,
        required:true,
        unique:true
    },
    projectImage:{
        type:String,
    
    },
    projectInfo:{
        type:String,
        required:true
    },
    projectLink:{
        type:String,
    
    },

},{timestamps:true});

module.exports= mongoose.model('Project',dataProjectSchema);