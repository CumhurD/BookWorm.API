

module.exports = {
    mapToPublisherDto: function (rawPublisher) {
        let publisher = {
            id: rawPublisher._id,
            name: rawPublisher.Name,
            location: rawPublisher.Location
        };

        return publisher;
    }
}