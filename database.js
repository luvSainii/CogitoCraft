const mongoose = require("mongoose");
const colors = require("colors")
const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`
        Connect to Mongodb Database ${mongoose.connection.host}`.bgGreen.white);
    } catch (error){
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }
}

module.exports = connectdb;