const express = require("express");
const rpcMethods = require("./routes/api");
const morgan = require('morgan');
const { errorHandler } = require("./utils/error-handling");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(errorHandler);

// middleware routes
app.use("/api", rpcMethods);


// catch 404 and forward to error handler
app.use(function(req,res,next){
    //Error it's a built in function in js
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

const port = process.env.PORT || 4445;

server = app.listen(port, () => console.log(`Server running on port ${port}`));
