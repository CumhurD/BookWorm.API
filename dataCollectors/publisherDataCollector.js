
module.exports = {
    collectGetPublishersData: function (request, response, next) {
        return next();
    },
    collectGetPublisherByIdData: function (request, response, next) {
        let publisherId = request.params.publisherId;

        if (!publisherId)
            return next({ code: 400, message: 'publisherId parameter is required!' });

        request.addParameter('publisherId', publisherId);

        return next();
    },
    collectInsertPublisherData: function (request, response, next) {
        let publisherName = request.body.publisherName;
        let publisherLocation = request.body.publisherLocation;

        if (!publisherName ||  !publisherLocation)
            return next({ code: 400, message: 'publisherName and publisherLocation fields are required!' });

        request.addParameter('publisherName', publisherName);
        request.addParameter('publisherLocation', publisherLocation);

        return next();
    }
}