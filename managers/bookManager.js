var bookRepository = require('../repositories/bookRepository');

module.exports = {
    getBooks: function (request, response, next) {
        var authorId = request.getParameter('authorId');

        if (authorId) {
            bookRepository.getBooksByAuthorId(authorId, function (error, book) {
                if (error)
                    return next(error);

                request.addParameter('books', book);

                return next();
            });
        }
        else {
            bookRepository.getAllBooks(function (error, books) {
                if (error)
                    return next(error);

                request.addParameter('books', books);

                return next();
            });
        }
    },
    getBookById: function (request, response, next) {
        var bookId = request.getParameter('bookId');

        bookRepository.getBookById(bookId, function (error, document) {
            if (error)
                return next(error);
            else if (!document)
                return next({ code: 404, message: 'Book cannot be found!' });

            request.addParameter('book', document);

            return next();
        });
    },
    insertBook: function (request, response, next) {
        var author = request.getParameter('author');
        var title = request.getParameter('title');
        var genres = request.getParameter('genres');

        var genreIds = genres.map(function (genre) { return genre._id; });

        bookRepository.upsertBook(title, author._id, genreIds, function (error, result) {
            if (error)
                return next(error);

            request.addParameter('result', result);

            return next();
        });
    },
    getVariants: function (request, response, next) {
        var bookId = request.getParameter('bookId');

        bookRepository.getVariants(bookId, function (error, books) {
            if (error)
                return next(error);
            else if (!books || books.length == 0)
                return next({ code: 404, message: 'Variants not found!' });

            request.addParameter('variants', books.map(book => {return book.Variants; }));

            return next();
        });
    },
    getVariant: function (request, response, next) {
        var bookId = request.getParameter('bookId');
        var variantId = request.getParameter('variantId');

        bookRepository.getVariant(bookId, variantId, function (error, book) {
            if (error)
                return next(error);
            else if (!book || !book.Variants)
                return next({ code: 404, message: 'Variant not found!' });

            request.addParameter('variant', book.Variants);

            return next();
        });
    },
    insertVariant: function (request, response, next) {
        var bookId = request.getParameter('bookId');
        var title = request.getParameter('title');
        var language = request.getParameter('language');
        var publisherId = request.getParameter('publisherId');
        var publishDate = request.getParameter('publishDate');
        var barcode = request.getParameter('barcode');

        bookRepository.addVariant(bookId, title, language, publisherId, publishDate, barcode, function (error, result) {
            if (error)
                return next(error);

            request.addParameter('result', result.result);

            return next();
        });
    }
}