
module.exports = {
    processResponse: function(request, response){
        if(request.processedError){
            var error = request.processedError;
            response.status(error.code).send(error.message);
            return;
        }
        else if (request.processedItem){
            // TODO: Check if item has found. Else return 404.

            response.send(request.processedItem);
            return;
        }
        else if (request.processedResult){
            response.send({
                message: "",
                count: request.processedResult.insertedCount
            })
        }

        response.status(400).send('UNIDENTIFIED_ERROR');
    },
    checkAuthentication: function(request, response, next){
        // TODO: Authentication will be implemented!
        next();
    }
}