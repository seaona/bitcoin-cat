// A generic func that will respond with the status of the error

exports.errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        err: {
            message: err.message || "Something went wrong"
        }
    });
}