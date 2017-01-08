

module.exports = {
    collectGetBooksData: function(request, response, next){
        var authorId = request.query.authorId;

        request.addParameter('authorId',authorId);

        next();
    },
    collectGetBookByIdData: function(request, response, next){
        var bookId = request.params.bookId;

        if (!bookId)
            return next({code: 400, message: 'bookId parameter is required!'});

        request.addParameter('bookId', bookId);

        return next();
    },
    collectInsertBookData: function(request, response, next){
        var authorId = request.body.AuthorId;
        var genreIds = request.body.GenreIds;
        var title = request.body.Title;
        
        if (!title || !authorId || !genreIds)
            return next({code:400, message: 'Title, AuthorId and GenreIds parameters are required!'});

        request.addParameter('authorId', authorId);
        request.addParameter('genreIds', genreIds);
        request.addParameter('title', title);

        return next();
    },
    collectGetVariantData: function(request, response, next){
        var bookId = request.params.bookId;
        var variantId = request.params.variantId;

        if (!bookId || !variantId)
            return next({code: 400, message: 'bookId and variantId parameters are required!'});

        request.addParameter('bookId', bookId);
        request.addParameter('variantId', variantId);

        return next();
    },
    collectGetVariantsData: function(request, response, next){
        var bookId = request.params.bookId;

        if (!bookId)
            return next({code: 400, message: 'bookId parameter is required!'})

        request.addParameter('bookId', bookId);

        return next();
    }



}