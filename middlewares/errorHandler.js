const errorResponse = require("../utility/errorResponse");

const errorHandler = (err,res,req,next)=>{
    // let err = { ...err };
    err.message = err.message;

    //mongoose error
    if(err.name === "castError"){
        const message = "Resources Not Found";
        err = new errorResponse(message,404);
    }

    // Duplicate key error
    if(err.code === 11000){
        const message = "Duplicate field value entered";
        err = new errorResponse(message,400);
    }

    //mongoose Validation
    if(err.name === "Validation Error"){
        const message = Object.values(err.errors).map((val)=>val.message);
        err = new errorResponse(message,400);
        res.status(err.statusCode || 500).json({
            success:false,
            error :err.message || "Server Error"
        });
    }
}

module.exports = errorHandler;