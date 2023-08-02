const mongoose = require("mongoose")

const uri = process.env.URI || "mongodb+srv://kongorzul8888:MZeMoyA8KkfE02FC@cluster0.lvycmza.mongodb.net/?retryWrites=true&w=majority"

const connectDb = async () =>{
    console.log(uri)
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect(uri)
        console.log("Succesfully connected to MongoDB HARMONY")
    }catch(error){
        throw new Error(error.message);
    }
};

module.exports = connectDb