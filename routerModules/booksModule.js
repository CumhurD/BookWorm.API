var assert = require('assert');
var bookManager = require('../managers/bookManager')
var moduleManager = require('../managers/moduleManager');

module.exports = {
    init: function (app){
        var moduleName = '/books/';

        // Returns all books
        app.get(moduleName, bookManager.getBooks);

        // Returns book by BookID
        app.get(moduleName + ':bookId/', bookManager.getBookById); 

        // Inserts book
        app.post(moduleName, bookManager.insertBook);
        
    }
}