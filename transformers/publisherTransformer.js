var publisherMapper = require('../mappers/publisherMapper');

module.exports = {
    transformPublisher: function (request, response, next) {
        let rawPublisher = request.getParameter('publisher');
        let publisher = publisherMapper.mapToPublisherDto(rawPublisher);

        return response.send(publisher);
    },
    transformPublishers: function (request, response, next) {
        let rawPublishers = request.getParameter('publishers');
        let publishers = rawPublishers.map(publisherMapper.mapToPublisherDto);

        return response.send(publishers);
    }
}