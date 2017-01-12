var publisherRepository = require('../repositories/publisherRepository');

module.exports = {
    getPublishers: function (request, response, next) {

        publisherRepository.getPublishers(function (error, publishers) {
            if (error)
                return next(error);
            else if (!publishers ||  !publishers.length)
                return next({ code: 404, message: 'Publishers not found!' });

            request.addParameter('publishers', publishers);

            return next();
        });

    },
    getPublisherById: function (request, response, next) {
        var publisherId = request.getParameter('publisherId');

        publisherRepository.getPublisherById(publisherId, function (error, publisher) {
            if (error)
                return next(error);
            else if (!publisher)
                return next({ code: 404, message: 'Publisher not found!' });

            request.addParameter('publisher', publisher);

            return next();
        });
    },
    insertPublisher: function (request, response, next) {
        var publisherName = request.getParameter('publisherName');
        var publisherLocation = request.getParameter('publisherLocation');

        publisherRepository.insertPublisher(publisherName, publisherLocation, function (error, result) {
            if (error)
                return next(error);
            // TODO: Check if insert is successful
            // else if (!result || result.nInserted

            request.addParameter('result', result);

            return next();
        });
    }
}