var bookMapper = require('../mappers/bookMapper');

module.exports = {
    transformBook: function(request, response, next) {
        var rawBook = request.getParameter('book');
        var book = bookMapper.mapToBookDto(rawBook);
        response.send(book);        
    },
    transformBooks: function(request, response, next){
        var rawBooks = request.getParameter('books');
        var books = bookMapper.mapToBookDtoArray(rawBooks);
        response.send(books);
    }
}
