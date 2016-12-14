var bookRepository = require('../repositories/bookRepository');

module.exports = {

    getBooks: function(request, response, next){
        // TODO: Pagination will be implemented
        var authorId = request.query.authorId;

        if (authorId){
            bookRepository.getBooksByAuthorId(authorId, function(error, documents){
                request.processedError = error;
                request.rawItem = documents;

                return next();
            });
        }
        else{
            bookRepository.getAllBooks(function(error, documents){
                request.processedError = error;
                request.rawItem = documents;

                return next();
            });
        }

    },
    getBookById: function(request, response, next){
        var bookId = request.params.bookId;

        if (!bookId){
            request.processedError = {
                code: "EMPTY_FIELD",
                message: "bookId field cannot be empty!"
            };

            return next();
        }

        bookRepository.getBookById(bookId,function(error, document){
            request.processedError = error;
            request.rawItem = document;

            return next();
        });
    },
    insertBook: function(request, response, next){
        var title = request.body.Title;
        var authorId = request.body.AuthorId;

        if (!title || !authorId)
        {
            request.processedError = {
                code: "EMPTY_FIELD",
                message: "Title and AuthorId fields cannot be empty!"
            }

            return next();
        }
                
        bookRepository.upsertBook(title, authorId, function (error, result){
            request.processedError = error;
            request.rawResult = result;

            return next();
        });   
    }


}