var baseRepository = require('./baseRepository');

// TODO: getBooksWithQuery and getBookWithQuery methods will be private

module.exports = {
    getAllBooks: function(callback){
        var db = baseRepository.getDb();

        db.collection('Books').find({}).toArray(callback);
    },

    getBooksWithQuery: function(query, callback){
        var db = baseRepository.getDb();
        db.collection('Books').find(query).toArray(callback);
    },

    getBookWithQuery: function(query, callback){
        var db = baseRepository.getDb();
        db.collection('Books').findOne(query, callback);
    },

    getBookById: function(id, callback){
        this.getBookWithQuery({_id: id}, callback);
    },

    getBooksByAuthorId: function(authorId, callback){
        this.getBooksWithQuery({AuthodId: authorId}, callback);
    },
    getBooksByGenre: function(genreId, callback){
        this.getBooksWithQuery({GenreIds: genreId})
    },
    upsertBook: function(title,authorId, genreIds, callback){
        var db = baseRepository.getDb();
        
        var book =
        {
            AuthorId: authorId,
            Title: title,
            Genres: genreIds,
            Variants: []
        }

        db.collection('Books').insertOne(book,callback);
    }
}