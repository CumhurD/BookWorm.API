

module.exports = {
    commonInsertResult: function(request, response, next){
        var result = request.getParameter('result');
        
        return response.send({insertedItems: result.insertedCount});
    },
    commonUpdateResult: function(request, response, next){
        var result = request.getParameter('result');

        return response.send({updatedItems: result.nModified});
    }
}