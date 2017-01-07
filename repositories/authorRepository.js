var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getAuthors: function(callback){
        var db = baseRepository.getDb();
        db.collection('Authors').find({}).toArray(callback);
    },
    getAuthorById: function(authorId, callback){
        var db = baseRepository.getDb();
        db.collection('Authors').findOne({_id:ObjectID(authorId)}, callback);
    },
    insertAuthor: function(name, surname, callback){
        var author = {
            Name: name,
            Surname: surname,
        }

        var db = baseRepository.getDb();
        db.collection('Authors').insertOne(author, callback);
    }
}