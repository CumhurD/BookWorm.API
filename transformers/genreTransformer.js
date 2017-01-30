var genreMapper = require('../mappers/genreMapper');


module.exports = {
    transformGenres: function(request, response, next){
        var rawGenres = request.getParameter('genres');
        var genres = rawGenres.map(genreMapper.mapToGenre);

        return response.send(genres);
    }
}