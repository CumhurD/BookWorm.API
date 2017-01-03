

module.exports = {
    commonResult: function(request, response, next){
        var result = request.getParameter('result');
        
        response.send({itemCount: result.insertedCount});
    }
}