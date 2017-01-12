var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getAllBooks: function (callback) {
        var db = baseRepository.getDb();
        var query = [
            {
                '$lookup': {
                    from: "Authors",
                    localField: "AuthorId",
                    foreignField: "_id",
                    as: "Author"
                }
            }
        ];

        db.collection('Books').aggregate(query, callback);
    },
    getBookById: function (bookId, callback) {
        var db = baseRepository.getDb();

        var query = [
            { '$match': { '_id': ObjectID(bookId) } },
            { '$limit': 1 },
            {
                '$lookup': {
                    from: "Authors",
                    localField: "AuthorId",
                    foreignField: "_id",
                    as: "Author"
                }
            }
        ];

        db.collection('Books').aggregate(query, callback);
    },
    getBooksByAuthorId: function (authorId, callback) {
        var db = baseRepository.getDb();

        var query = [
            { '$match': { 'AuthorId': ObjectID(authorId) } },
            {
                '$lookup': {
                    from: "Authors",
                    localField: "AuthorId",
                    foreignField: "_id",
                    as: "Author"
                }
            }
        ];

        db.collection('Books').aggregate(query, callback);
    },
    getBooksByGenre: function (genreId, callback) {
        this.getBooksWithQuery({ GenreIds: genreId })
    },
    upsertBook: function (title, authorId, genreIds, callback) {
        var book =
            {
                AuthorId: authorId,
                Title: title,
                Genres: genreIds,
                Variants: []
            }

        var db = baseRepository.getDb();
        db.collection('Books').insertOne(book, callback);
    },
    getVariants: function (bookId, callback) {
        var db = baseRepository.getDb();

        var query = { _id: ObjectID(bookId) };
        var projection = { Variants: 1, _id: 0 };

        db.collection('Books').findOne(query, projection, callback);
    },
    getVariant: function (bookId, variantId, callback) {
        var db = baseRepository.getDb();

        var query = {
            $and: [{ '_id': ObjectID(bookId) },
            { 'Variants._variantId': ObjectID(variantId) }]
        };
        var projection = { Variants: 1, _id: 0 };

        db.collection('Books').findOne(query, projection, callback);
    },
    addVariant: function (bookId, title, language, publisherId, publishDate, barcode, callback) {
        var variant = {
            _variantId: ObjectID(),
            Title: title,
            Language: language,
            PublisherId: publisherId,
            PublishDate: publishDate,
            Barcode: barcode
        };

        var db = baseRepository.getDb();

        db.collection('Books').update({ _id: ObjectID(bookId) }, { $push: { Variants: variant } }, callback);
    }
}