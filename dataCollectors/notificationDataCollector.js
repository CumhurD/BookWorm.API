
module.exports = {
    collectInsertNotificationData: function(request, response, next){
        let header = request.body.header;
        let message = request.body.message;

        if (!header || !message)
            return next({code: 500, message: 'header and message fields are required!'})

        request.addParameter('notificationHeader',header );
        request.addParameter('notificationMessage', message);

        return next();
    },
    collectUpdateNotificationData: function(request, response, next){
        let id = request.body.id;
        let state = request.body.state;

        if (!id || state == undefined)
            return next({code: 500, message: 'id and state fields are required!'});
        
        request.addParameter('notificationId', id);
        request.addParameter('notificationState', state);

        return next();
    },
    collectGetNotificationsData: function(request, response, next){
        return next();
    }
}