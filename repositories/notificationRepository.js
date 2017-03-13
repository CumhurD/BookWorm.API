var baseRepository = require('./baseRepository');
var ObjectID = require('mongodb').ObjectID;


module.exports = {
    insertNotification: function (header, message, callback) {
        let notification = {
            Header: header,
            Message: message,
            State: 0
        };

        let db = baseRepository.getDb();
        db.collection('Notifications').insertOne(notification, callback);
    },
    updateNotification: function (id, state, callback) {
        let notificationState = Boolean(state);

        let db = baseRepository.getDb();
        db.collection('Notifications').updateOne({ _id: ObjectID(id) }, { $set: { State: notificationState } }, callback);
    },
    getNotifications: function (callback) {
        let db = baseRepository.getDb();
        db.collection('Notifications').find({ IsRead: 0 }).toArray(callback);
    }
}