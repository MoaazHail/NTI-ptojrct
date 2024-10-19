const mongoose = require('mongoose');

const dataServiceSchema= new mongoose.Schema({
    serviceTitle:{
        type:String,
        required:true,
        unique:true
    },
    serviceImage:{
        type:String,
    
    },
    serviceInfo:{
        type:String,
        required:true
    },

},{timestamps:true});

module.exports= mongoose.model('Service',dataServiceSchema);