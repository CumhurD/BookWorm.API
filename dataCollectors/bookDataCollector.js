var moment = require('moment');


module.exports = {
    collectGetBooksData: function (request, response, next) {
        var authorId = request.query.authorId;

        if (authorId)
            request.addParameter('authorId', authorId);

        return next();
    },
    collectGetBookByIdData: function (request, response, next) {
        var bookId = request.params.bookId;

        if (!bookId)
            return next({ code: 400, message: 'bookId parameter is required!' });

        request.addParameter('bookId', bookId);

        return next();
    },
    collectInsertBookData: function (request, response, next) {
        var authorId = request.body.authorId;
        var genreIds = request.body.genreIds;
        var title = request.body.title;

        if (!title || !authorId || !genreIds)
            return next({ code: 400, message: 'title, authorId and genreIds parameters are required!' });

        request.addParameter('authorId', authorId);
        request.addParameter('genreIds', genreIds);
        request.addParameter('title', title);

        return next();
    },
    collectGetVariantData: function (request, response, next) {
        var bookId = request.params.bookId;
        var variantId = request.params.variantId;

        if (!bookId || !variantId)
            return next({ code: 400, message: 'bookId and variantId parameters are required!' });

        request.addParameter('bookId', bookId);
        request.addParameter('variantId', variantId);

        return next();
    },
    collectGetVariantsData: function (request, response, next) {
        var bookId = request.params.bookId;

        if (!bookId)
            return next({ code: 400, message: 'bookId parameter is required!' })

        request.addParameter('bookId', bookId);

        return next();
    },
    collectInsertVariantData: function (request, response, next) {
        var bookId = request.params.bookId;
        var title = request.body.title;
        var language = request.body.language;
        var publisherId = request.body.publisherId;
        var publishDate = moment(request.body.publishDate);
        var barcode = request.body.barcode;

        if (!bookId || !title || !language || !publisherId || !publishDate || !barcode)
            return next({ code: 400, message: 'bookId, title, language, publisherId, publishDate, barcode parameters are required!' });
        else if (!publishDate.isValid())
            return next({ code: 400, message: 'publishDate is not in correct format! (YYYY-MM-DDTHH:mm:ss.SSSSZ)' })

        request.addParameter('bookId', bookId);
        request.addParameter('title', title);
        request.addParameter('language', language);
        request.addParameter('publisherId', publisherId);
        request.addParameter('publishDate', publishDate.toDate());
        request.addParameter('barcode', barcode);

        return next();
    }



}