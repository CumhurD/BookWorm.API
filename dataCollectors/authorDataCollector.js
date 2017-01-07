        //var authorId = request.query.authorId;
        //var bookId = request.params.bookId;

module.exports = {
    getAuthors: function(request, response, next){
        // TODO: Pagination will be implemented later. 
        return next();
    },
    getAuthorById: function(request, response, next){
        var authorId = request.params.authorId;
        
        if (!authorId){
            return next({message: 'Id field is required!'});
        }

        request.addParameter('authorId', authorId);
        
        return next();
    },
    insertAuthor: function(request, response, next){
        var authorName = request.body.Name;
        var authorSurname = request.body.Surname;

        if (!authorName || !authorSurname){
            return next({message: 'Name, Surname fields are required!'});
        }

        request.addParameter('authorName', authorName);
        request.addParameter('authorSurname', authorSurname);

        return next();
    }
}