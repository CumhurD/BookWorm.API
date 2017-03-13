var notificationRepository = require('../repositories/notificationRepository');

module.exports = {
    insertNotification: function(request, response, next){
        let header = request.getParameter('notificationHeader');
        let message = request.getParameter('notificationMessage');

        notificationRepository.insertNotification(header, message, (error, result)=>{
            if (error)
                return next(error);

            request.addParameter('notificationResult', result);
            return next();
        });
    },
    updateNotification: function(request, response, next){
        let state = request.getParameter('notificationState');
        let id = request.getParameter('notificationId');

        notificationRepository.updateNotification(id, state, (error, result)=>{
            if (error)
                return next(error);
            
            request.addParameter('result', result);

            return next();
        });
    },
    getNotifications: function (request, response, next) {
        notificationRepository.getNotifications((error, notifications) => {
            if (error)
                return next(error);
            else if (!notifications)
                return ({ code: 404, message: 'Notifications not found!' });

            request.addParameter('notifications', notifications);

            return next();
        });
    }
}