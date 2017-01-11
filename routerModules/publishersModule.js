var publisherDataCollector = require('../dataCollectors/publisherDataCollector');
var publisherManager = require('../managers/publisherManager');
var publisherTransformer = require('../transformers/publisherTransformer');
var commonTransformer = require('../transformers/commonTransformer');

module.exports={
    init: function(app){
        // Returns all publishers
        app.get('/publishers',
            publisherDataCollector.collectGetPublishersData,
            publisherManager.getPublishers,
            publisherTransformer.transformPublishers);

        // Returns publisher by publisherId
        app.get('/publishers/:publisherId',
            publisherDataCollector.collectGetPublisherByIdData,
            publisherManager.getPublisherById,
            publisherTransformer.transformPublisher);

        // Inserts a new publisher
        app.post('/publishers', 
            publisherDataCollector.collectInsertPublisherData,
            publisherManager.insertPublisher,
            commonTransformer.commonInsertResult);
    }
}