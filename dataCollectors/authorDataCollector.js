
module.exports = {
    getAuthors: function (request, response, next) {
        // TODO: Pagination will be implemented later. 
        return next();
    },
    getAuthorById: function (request, response, next) {
        let authorId = request.params.authorId;

        if (!authorId) {
            return next({ code: 400, message: 'authorId field is required!' });
        }

        request.addParameter('authorId', authorId);

        return next();
    },
    insertAuthor: function (request, response, next) {
        let authorName = request.body.authorName;
        let authorSurname = request.body.authorSurname;

        if (!authorName ||  !authorSurname) {
            return next({ code: 400, message: 'authorName, authorSurname fields are required!' });
        }

        request.addParameter('authorName', authorName);
        request.addParameter('authorSurname', authorSurname);

        return next();
    }
}