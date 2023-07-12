const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectdb = require("./database");


//dotenv
dotenv.config()

//mongodb connection
connectdb();

// rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

const port = process.env.port || 3000;

//listening the port

app.listen(3000,()=>{
    console.log(`Server runnig in ${process.env.DEV_MODE} mode on ${port}`.bgCyan.white);
});