var authorManager = require('../managers/authorManager');

module.exports = {

    init: function(app){
        var moduleName = '/authors/';

        app.get(moduleName, authorManager.getAuthors);

        app.get(moduleName + ':authorId', authorManager.getAuthorById);

        app.post(moduleName, authorManager.insertAuthor);
    }
}