var genreDataCollector = require('../dataCollectors/genreDataCollector');
var genreManager = require('../managers/genreManager');
var genreTransformer = require('../transformers/genreTransformer');

module.exports = {
    init: function(app){
        app.get('/genres',
            genreDataCollector.collectGetGenresData,
            genreManager.getGenres,
            genreTransformer.transformGenres
        );
    }
}