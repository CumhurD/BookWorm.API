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
    }
}