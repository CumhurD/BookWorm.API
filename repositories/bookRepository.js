var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

// TODO: getBooksWithQuery and getBookWithQuery methods will be private

module.exports = {
    getBooksWithQuery: function(query, callback){
        var db = baseRepository.getDb();
        db.collection('Books').find(query).toArray(callback);
    },
    getBookWithQuery: function(query, callback){
        var db = baseRepository.getDb();
        db.collection('Books').findOne(query, callback);
    },
    getAllBooks: function(callback){
        var db = baseRepository.getDb();
        db.collection('Books').find({}).toArray(callback);
    },
    getBookById: function(id, callback){
        this.getBookWithQuery({_id: ObjectID(id)}, callback);
    },
    getBooksByAuthorId: function(authorId, callback){
        this.getBooksWithQuery({AuthodId: authorId}, callback);
    },
    getBooksByGenre: function(genreId, callback){
        this.getBooksWithQuery({GenreIds: genreId})
    },
    upsertBook: function(title, authorId, genreIds, callback){
        var book =
        {
            AuthorId: authorId,
            Title: title,
            Genres: genreIds,
            Variants: []
        }
        
        var db = baseRepository.getDb();
        db.collection('Books').insertOne(book,callback);
    },
    getVariants: function(bookId, callback){
        var db = baseRepository.getDb();
        
        var query = {_id: ObjectID(bookId)};
        var projection = {Variants: 1, _id: 0};
        
        db.collection('Books').findOne(query, projection, callback);
    },
    getVariant: function(bookId, variantId, callback){
        var db = baseRepository.getDb();

        var query = { $and: [ { '_id': ObjectID(bookId)}, 
                              { 'Variants._variantId': ObjectID(variantId)} ]};
        var projection = {Variants: 1, _id:0 };

        db.collection('Books').findOne(query, projection, callback);
    }
}