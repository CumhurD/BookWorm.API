var baseRepository = require('./baseRepository');

module.exports = {
    getBooks: function(){
        console.log('bookRepository.getBooks() called!')
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

        db.collection('Books').insertOne(book, callback);
    }
}