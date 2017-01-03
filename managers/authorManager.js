var authorRepository = require('../repositories/authorRepository');

module.exports = {
    getAuthors: function(request, response, next){
        // TODO: Will be implemented later
    },
    getAuthorById: function(request, response, next){
        var authorId = request.getParameter('authorId');

        authorRepository.getAuthorById(authorId, function(error, document){
            if (error)
                return next(error);
            else if (!document)
                return next({code: 404, message: 'Author not found!'});

            request.addParameter('author', document);

            return next();
        });
    },
    insertAuthor: function(request, response, next){
        // TODO: Will be implemented later
    }
}