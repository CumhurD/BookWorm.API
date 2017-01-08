var assert = require('assert');
var moduleManager = require('../managers/moduleManager');
var authorManager = require('../managers/authorManager');
var genreManager = require('../managers/genreManager');
var bookManager = require('../managers/bookManager');
var bookDataCollector = require('../dataCollectors/bookDataCollector');
var bookTransformer = require('../transformers/bookTransformer');
var commonTransformer = require('../transformers/commonTransformer');

module.exports = {
    init: function (app){

        // Returns all books
        app.get('/books/', 
            bookDataCollector.collectGetBooksData,
            bookManager.getBooks, 
            bookTransformer.transformBooks);

        // Returns book by BookID
        app.get('/books/:bookId/', 
            bookDataCollector.collectGetBookByIdData, 
            bookManager.getBookById, 
            bookTransformer.transformBook); 

        // Inserts book
        app.post('/books/', 
            bookDataCollector.collectInsertBookData,
            genreManager.getGenreByIdList, 
            authorManager.getAuthorById, 
            bookManager.insertBook,
            commonTransformer.commonResult);

        app.get('/books/:bookId/variants',
            bookDataCollector.collectGetVariantsData,
            bookManager.getVariants,
            bookTransformer.transformVariants
        )

        app.get('/books/:bookId/variants/:variantId',
            bookDataCollector.collectGetVariantData,
            bookManager.getVariant,
            bookTransformer.transformVariant);
    }
}