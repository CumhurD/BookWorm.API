
module.exports = {
    mapToNotificationDto: function(rawNotification){
        let notification = {
            header: rawNotification.Header,
            message: rawNotification.Message,
            priority: rawNotification.Priority
        };

        return notification;
    }
}