

module.exports = {
    handleError: function(error, request, response, next){
        if (error){
            // TODO: Log error!
            return next(error)
        }
    }
}