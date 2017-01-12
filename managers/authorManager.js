var authorRepository = require('../repositories/authorRepository');

module.exports = {
    getAuthors: function (request, response, next) {
        authorRepository.getAuthors(function (error, authors) {
            if (error)
                return next(error);
            else if (!authors || authors.length == 0)
                return next({ code: 404, message: 'Authors not found!' });

            request.addParameter('authors', authors);

            return next();
        });
    },
    getAuthorById: function (request, response, next) {
        var authorId = request.getParameter('authorId');

        authorRepository.getAuthorById(authorId, function (error, document) {
            if (error)
                return next(error);
            else if (!document)
                return next({ code: 404, message: 'Author not found!' });

            request.addParameter('author', document);

            return next();
        });
    },
    insertAuthor: function (request, response, next) {
        var authorName = request.getParameter('authorName');
        var authorSurname = request.getParameter('authorSurname');

        authorRepository.insertAuthor(authorName, authorSurname, function (error, result) {
            if (error) {
                return next(error);
            }

            request.addParameter('result', result);

            return next();
        });
    }
}