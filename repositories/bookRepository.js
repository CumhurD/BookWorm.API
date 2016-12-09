var baseRepository = require('./baseRepository');

module.exports = {
    getBooks: function(callback){
        var db = baseRepository.getDb();

        db.collection('Books').find({}).toArray(callback);
    },

    getBooksWithQuery(query, callback){
        db.collection('Books').find(query).toArray(callback);
    },

    upsertBook: function(title,authorId, callback){
        var db = baseRepository.getDb();
        
        var book =
        {
            AuthorId: authorId,
            Title: title,
            Genres: [],
            Variants: []
        }

        db.collection('Books').insertOne(book,callback);
    }
}