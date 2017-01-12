var publisherMapper = require('../mappers/publisherMapper');

module.exports = {
    transformPublisher: function (request, response, next) {
        var rawPublisher = request.getParameter('publisher');
        var publisher = publisherMapper.mapToPublisherDto(rawPublisher);

        return response.send(publisher);
    },
    transformPublishers: function (request, response, next) {
        var rawPublishers = request.getParameter('publishers');
        var publishers = rawPublishers.map(publisherMapper.mapToPublisherDto);

        return response.send(publishers);
    }
}