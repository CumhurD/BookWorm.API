var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getPublishers: function (callback) {
        var db = baseRepository.getDb();
        db.collection('Publishers').find({}).toArray(callback);
    },
    getPublisherById: function (publisherId, callback) {
        var db = baseRepository.getDb();
        db.collection('Publishers').findOne({ _id: ObjectID(publisherId) }, callback);
    },
    insertPublisher: function (publisherName, publisherLocation, callback) {
        var publisher = {
            Name: publisherName,
            Location: publisherLocation
        };

        var db = baseRepository.getDb();
        db.collection('Publishers').insertOne(publisher, callback);
    }
}