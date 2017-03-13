var notificationDataCollector = require('../dataCollectors/notificationDataCollector');
var notificationManager = require('../managers/notificationManager');
var notificationTransformer = require('../transformers/notificationTransformer');
var commonTransformer = require('../transformers/commonTransformer');

// TODO: User based notifications will be implemented later

module.exports = {
    init: function(app){
       // Returns all notifications
        app.get('/notifications',
            notificationDataCollector.collectGetNotificationsData,
            notificationManager.getNotifications,
            notificationTransformer.transformNotifications);

        // Inserts new notification
        app.post('/notifications',
            notificationDataCollector.collectInsertNotificationData,
            notificationManager.insertNotification,
            notificationTransformer.transformNotificationInsertResult);

        // Updates notification
        app.put('/notifications',
            notificationDataCollector.collectUpdateNotificationData,
            notificationManager.updateNotification,
            commonTransformer.commonUpdateResult);
    }
}