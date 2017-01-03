var genreRepository = require('../repositories/genreRepository');

module.exports = {
    getGenreById: function(request, response, next){
        var genreId = request.getParameter('genreId');

        genreRepository.getGenreById(genreId, function(error, document){
            if (error)
                return next(error);
            else if (!document){
                return next({code:404, message: 'Genre is not found!'});
            }

            request.addParameter('genre', document);

            return next();
        });
    },
    getGenreByIdList: function(request, response, next){
        var genreIds = request.getParameter('genreIds');

        genreRepository.getGenreByIdList(genreIds, function(error, documents){
            if (error)
                return next(error);
            else if (!documents)
                return next({code: 404, message: 'Genres cannot be found!'});
            // TODO: Check if all genres are found. Return error if any of them is missing.
            // Other methods will rely on this method to get all genres

            request.addParameter('genres', documents);

            return next();
        })

    }
}