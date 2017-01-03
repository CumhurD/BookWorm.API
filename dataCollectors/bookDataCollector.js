

module.exports = {
    collectGetBooksData: function(request, response, next){
        var authorId = request.query.authorId;

        request.addParameter('authorId',authorId);

        next();
    },
    collectGetBookByIdData: function(request, response, next){
        var bookId = request.params.bookId;

        if (!bookId){
            var error = {
                message: 'bookId parameter is required!'
            };

            return next(error);
        }

        request.addParameter('bookId', bookId);

        return next();
    },
    collectInsertBookData: function(request, response, next){
        var authorId = request.body.AuthorId;
        var genreIds = request.body.GenreIds;
        var title = request.body.Title;
        
        if (!title || !authorId || !genreId)
            return next({message: 'Title, AuthorId and GenreIds parameters are required!'});

        request.addParameter('authorId', authorId);
        request.addParameter('genreIds', genreIds);
        request.addParameter('title', title);

        return next();
    }



}