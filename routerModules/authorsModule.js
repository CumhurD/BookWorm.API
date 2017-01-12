var authorManager = require('../managers/authorManager');
var authorDataCollector = require('../dataCollectors/authorDataCollector');
var authorTransformer = require('../transformers/authorTransformer');
var commonTransformer = require('../transformers/commonTransformer');

module.exports = {
    init: function (app) {
        // Returns all authors
        app.get('/authors',
            authorDataCollector.getAuthors,
            authorManager.getAuthors,
            authorTransformer.transformAuthors);

        // Returns author by authorId
        app.get('/authors/:authorId',
            authorDataCollector.getAuthorById,
            authorManager.getAuthorById,
            authorTransformer.transformAuthor);

        // Inserts a new author
        app.post('/authors',
            authorDataCollector.insertAuthor,
            authorManager.insertAuthor,
            commonTransformer.commonInsertResult);
    }
}