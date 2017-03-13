var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getAuthors: function (callback) {
        let db = baseRepository.getDb();
        db.collection('Authors').find({}).toArray(callback);
    },
    getAuthorById: function (authorId, callback) {
        let db = baseRepository.getDb();
        db.collection('Authors').findOne({ _id: ObjectID(authorId) }, callback);
    },
    insertAuthor: function (name, surname, callback) {
        let author = {
            Name: name,
            Surname: surname,
        }

        let db = baseRepository.getDb();
        db.collection('Authors').insertOne(author, callback);
    }
}