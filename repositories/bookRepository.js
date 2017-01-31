var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getBooks: function (authorId, genreIds, callback) {
        var db = baseRepository.getDb();

        var conditions = []

        if (authorId)
            conditions.push({ 'AuthorId': ObjectID(authorId) });
        if (genreIds)
            conditions.push({ 'Genres': { '$in': genreIds } });

        var match = { '$match': { '$and': conditions } };

        var lookup =
            {
                '$lookup': {
                    from: "Authors",
                    localField: "AuthorId",
                    foreignField: "_id",
                    as: "Author"
                }
            };

        var query = [];

        if (conditions.length > 0)
            query.push(match);

        query.push(lookup);

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

        db.collection('Books').aggregateOne(query, callback);
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

        var query = [
            {
                '$match': { '_id': ObjectID(bookId) }
            },
            {
                $unwind: "$Variants"
            },
            {
                $project: { "Variants": 1, _id: 0 }
            },
            {
                '$lookup': {
                    from: "Publishers",
                    localField: "Variants.PublisherId",
                    foreignField: "_id",
                    as: "Variants.Publisher"
                }
            }
        ];

        db.collection('Books').aggregate(query, callback);
    },
    getVariant: function (bookId, variantId, callback) {
        var db = baseRepository.getDb();

        var query = [
            {
                '$match': { '_id': ObjectID(bookId) }
            },
            {
                $unwind: "$Variants"
            },
            {
                '$match': { 'Variants._variantId': ObjectID(variantId) }
            },
            {
                $project: { "Variants": 1, _id: 0 }
            },
            {
                '$lookup': {
                    from: "Publishers",
                    localField: "Variants.PublisherId",
                    foreignField: "_id",
                    as: "Variants.Publisher"
                }
            }
        ];

        db.collection('Books').aggregateOne(query, callback);
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