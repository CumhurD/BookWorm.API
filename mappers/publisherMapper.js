

module.exports = {
    mapToPublisherDto: function(rawPublisher){
        var publisher = {
            id: rawPublisher._id,
            name: rawPublisher.Name,
            location: rawPublisher.Location
        };

        return publisher;
    }
}