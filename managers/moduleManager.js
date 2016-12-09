
module.exports = {
    processResponse: function(request, response){
        if(request.processedError){
            var error = request.processedError;
            response.status(error.code).send(error.message);
            return;
        }
        else if (request.processedItem){
            response.send(request.processedItem);
            return;
        }

        response.status(400).send('UNIDENTIFIED_ERROR');
    }
}