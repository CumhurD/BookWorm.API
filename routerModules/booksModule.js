var assert = require('assert');
var bookRepository = require('../repositories/bookRepository')

module.exports = {
    init: function (app){
        var moduleName = '/books/';

        // Returns all books
        app.get(moduleName, function(request, response){
            bookRepository.getBooks();
        });

        // Returns book by BookID
        app.get(moduleName + ':bookId', function (request, response){
            var bookId = request.params.bookId;

            if (!bookId || bookId == null)
                response.send('bookId parameter is required!');

        });

        // Inserts book
        app.post(moduleName, function(request, response){
            if (request.body.Title == undefined || request.body.AuthorId == undefined)
                response.send('Title and AuthorId parameters have to be sent!');

            bookRepository.upsertBook(request.body.Title,request.body.AuthorId, function (err, r){
                if(err|| r.insertedCount > 1){
                    // Log error!
                }

                response.send('The new book has successfuly inserted.');
            });
        });
    }
}