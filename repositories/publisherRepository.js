var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
    getPublishers: function (callback) {
        let db = baseRepository.getDb();
        db.collection('Publishers').find({}).toArray(callback);
    },
    getPublisherById: function (publisherId, callback) {
        let db = baseRepository.getDb();
        db.collection('Publishers').findOne({ _id: ObjectID(publisherId) }, callback);
    },
    insertPublisher: function (publisherName, publisherLocation, callback) {
        let publisher = {
            Name: publisherName,
            Location: publisherLocation
        };

        let db = baseRepository.getDb();
        db.collection('Publishers').insertOne(publisher, callback);
    }
}