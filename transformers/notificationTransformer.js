var notificationMapper = require('../mappers/notificationMapper');

module.exports = {
    transformNotification: function(request, response, next){
        let rawNotification = request.getParameter('notification');
        let notification = notificationMapper.mapToNotificationDto(rawNotification);

        return response.send(notification);
    },

    transformNotifications : function(request, response, next){
        let rawNotifications = request.getParameter('notifications');
        let notifications = rawNotifications.map(notificationMapper.mapToNotificationDto);

        return response.send(notifications);
    },
    transformNotificationInsertResult: function(request, response, next){
        let result = request.getParameter('notificationResult');

        return response.send({ insertedItems: result.insertedCount });
    }
}