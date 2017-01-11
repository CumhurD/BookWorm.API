var moment = require('moment');


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
    },
    collectInsertVariantData: function(request, response, next){
        var bookId = request.params.bookId;
        var title = request.body.Title;
        var language = request.body.Language;
        var publisherId = request.body.PublisherId;
        var publishDate = moment(request.body.PublishDate);
        var barcode = request.body.Barcode;

        if (!bookId || !title || !language || !publisherId || !publishDate || !barcode)
            return next({code: 400, message: 'bookId, title, language, publisherId, publishDate, barcode parameters are required!'});
        else if (!publishDate.isValid())
            return next({code: 400, message: 'publishDate is not in correct format! (YYYY-MM-DDTHH:mm:ss.SSSSZ)'})

        request.addParameter('bookId', bookId);
        request.addParameter('title', title);
        request.addParameter('language', language);
        request.addParameter('publisherId', publisherId);
        request.addParameter('publishDate', publishDate.toDate());
        request.addParameter('barcode', barcode);

        return next();
    }



}