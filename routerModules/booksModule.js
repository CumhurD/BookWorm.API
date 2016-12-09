var assert = require('assert');
var bookManager = require('../managers/bookManager')
var moduleManager = require('../managers/moduleManager');

module.exports = {
    init: function (app){
        var moduleName = '/books/';

        // Returns all books
        app.get(moduleName, bookManager.getAllBooks);

        // Returns book by BookID
        app.get(moduleName + ':bookId', function (request, response){
            var bookId = request.params.bookId;

            if (!bookId)
                response.status(400).send('bookId parameter is required!');

        });

        // Inserts book
        app.post(moduleName, function(request, response){
            if (request.body.Title == undefined || request.body.AuthorId == undefined)
                response.status(400).send('Title and AuthorId parameters are required!');

            bookRepository.upsertBook(request.body.Title,request.body.AuthorId, function (err, r){
                if(err|| r.insertedCount > 1){
                    // Log error!
                }

                response.send('The new book has successfuly inserted.');
            });
        });
    }
}