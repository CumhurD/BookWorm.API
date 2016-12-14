var assert = require('assert');
var bookManager = require('../managers/bookManager');
var moduleManager = require('../managers/moduleManager');
var mappingManager = require('../managers/mappingManager');

module.exports = {
    init: function (app){
        var moduleName = '/books/';

        // Returns all books
        app.get(moduleName, bookManager.getBooks, mappingManager.mapToBookDto);

        // Returns book by BookID
        app.get(moduleName + ':bookId/', bookManager.getBookById, mappingManager.mapToBookDto); 

        // Inserts book
        app.post(moduleName, bookManager.insertBook);
        
    }
}