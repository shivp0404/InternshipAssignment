const mongoose = require('mongoose')

const connectDb = async(link)=>{
    try{
        await mongoose.connect(link)
        console.log("Database connected");
    }
    catch(err){
        console.error("Database Error:",err.message)
        process.exit(1);
    }
} 

module.exports = connectDb