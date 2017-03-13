

module.exports = {
    handleError: function (error, request, response, next) {
        // TODO: Log error
        let errorCode;
        let errorMessage;

        if (error.name == 'MongoError') {
            errorCode = 500;
            errorMessage = 'Something went wrong!';
        }
        else {
            errorCode = error.code || 500;
            errorMessage = error.message || "";
        }

        return response.status(errorCode).send(errorMessage);
    }
}