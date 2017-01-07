var authorManager = require('../managers/authorManager');
var authorDataCollector = require('../dataCollectors/authorDataCollector');
var authorTransformer = require('../transformers/authorTransformer');
var commonTransformer = require('../transformers/commonTransformer');

module.exports = {
    init: function(app){
        app.get('/authors', 
            authorDataCollector.getAuthors,
            authorManager.getAuthors,
            authorTransformer.transformAuthors);

        app.get('/authors/:authorId', 
            authorDataCollector.getAuthorById, 
            authorManager.getAuthorById,
            authorTransformer.transformAuthor);

        app.post('/authors', 
            authorDataCollector.insertAuthor,
            authorManager.insertAuthor,
            commonTransformer.commonResult);
    }
}