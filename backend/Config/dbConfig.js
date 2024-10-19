const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://hailmoaaz:kpGCpF0zktNxM9Vz@cluster0.lry5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('database connected');
}

module.exports = connectDB;