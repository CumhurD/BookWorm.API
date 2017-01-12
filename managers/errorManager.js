

module.exports = {
    handleError: function (error, request, response, next) {
        var errorCode = error.code || 500;
        var errorMessage = error.message ||  "";

        // TODO: Log error
        return response.status(errorCode).send(errorMessage);
    }
}