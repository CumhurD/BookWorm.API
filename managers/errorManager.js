

module.exports = {
    handleError: function (error, request, response, next) {
        // TODO: Check if it's mongo error
        // if yes, encapsulate error code & detail
        // TODO: Log error

        var errorCode = error.code || 500;
        var errorMessage = error.message ||  "";

        return response.status(errorCode).send(errorMessage);
    }
}