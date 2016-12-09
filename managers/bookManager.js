var bookRepository = require('../repositories/bookRepository');

module.exports = {

    getAllBooks: function(request, response, next){
        bookRepository.getBooks(function(error, queryResult){
            request.processedError = error;
            request.processedItem = queryResult;

            next();
        });
    },
    getBooksByAuthor: function(callback){
        bookRepository.getBooks({});
    },
    getBooksByTitle: function(){

    },
    getBookById: function(request, response, next){
        // TODO: getBookById method will be implemented!!
    }

}