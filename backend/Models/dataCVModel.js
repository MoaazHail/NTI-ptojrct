const mongoose = require('mongoose');

const dataCVSchema= new mongoose.Schema({
    myCv:{
        type:String,
    },
    CVImage:{
        type:String,
    }

},{timestamps:true});

module.exports= mongoose.model('CV',dataCVSchema);