const errorHandler = (err, req, res, next) => {
    // If no status is set, default to 500
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    let errorResponse = {
        message: err.message || 'An unexpected error occurred',
        status: statusCode
    };

    // Add stack trace only in development environment
    if (process.env.NODE_ENV === 'development') {
        errorResponse.stack = err.stack;
    }

    // Handle specific error types
    if (err.name === 'ValidationError') {
        errorResponse.status = 400;
        errorResponse.message = 'Validation Error';
        errorResponse.errors = err.errors;
    } else if (err.name === 'UnauthorizedError') {
        errorResponse.status = 401;
    } else if (err.name === 'ForbiddenError') {
        errorResponse.status = 403;
    }

    res.status(errorResponse.status).json(errorResponse);
};

module.exports = errorHandler;
