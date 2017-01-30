var genreRepository = require('../repositories/genreRepository');

module.exports = {
    getGenres: function(request, response, next){
        
        genreRepository.getAllGenres(function(error, genres){
            if(error)
                return next(error);
            else if (!genres)
                return next({code: 404, message: 'Genre is not found!'});
            
            request.addParameter('genres', genres);

            return next();
        });
    },
    getGenreById: function (request, response, next) {
        var genreId = request.getParameter('genreId');

        genreRepository.getGenreById(genreId, function (error, document) {
            if (error)
                return next(error);
            else if (!document) {
                return next({ code: 404, message: 'Genre is not found!' });
            }

            request.addParameter('genre', document);

            return next();
        });
    },
    getGenreByIdList: function (request, response, next) {
        var genreIds = request.getParameter('genreIds');

        genreRepository.getGenreByIdList(genreIds, function (error, genres) {
            if (error)
                return next(error);
            else if (!genres ||  genreIds.length != genres.length) {
                var existingGenreIds = genres.map(genre => { return genre._id });
                var notExistingGenreIds = genreIds.filter(genreId => { return existingGenreIds.indexOf(genreId) < 0 });
                return next({ code: 404, message: 'Genres not found: ' + notExistingGenreIds.toString() });
            }

            request.addParameter('genres', genres);

            return next();
        })

    }
}