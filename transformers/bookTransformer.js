var bookMapper = require('../mappers/bookMapper');

module.exports = {
    transformBook: function(request, response, next) {
        var rawBook = request.getParameter('book');
        var book = bookMapper.mapToBookDto(rawBook);
        return response.send(book);        
    },
    transformBooks: function(request, response, next){
        var rawBooks = request.getParameter('books');
        var books = rawBooks.map(bookMapper.mapToBookDto);
        return response.send(books);
    },
    transformVariant: function(request, response, next){
        var rawVariant = request.getParameter('variant');
        var variant = bookMapper.mapToVariantDto(rawVariant);

        return response.send(variant);
    },
    transformVariants: function(request, response, next){
        var rawVariants = request.getParameter('variants');
        var variants = rawVariants.map(bookMapper.mapToVariantDto);
        return response.send(variants);
    }
}
