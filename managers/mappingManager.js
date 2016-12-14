var bookMapper = require('../mappers/bookMapper');

module.exports = {

    mapToBookDto: function(request, response, next){
        var rawItem = request.rawItem;

        if (!rawItem)
            return;
        
        if(rawItem instanceof Array){
            request.processedItem = bookMapper.mapToBookDtos(rawItem);
        }
        else if (rawItem instanceof Object)
        {
            request.processedItem = bookMapper.mapToBookDto(rawItem);
        }

        next();
    },
    mapToBasicBookDto: function(request, response, next){

    }
}