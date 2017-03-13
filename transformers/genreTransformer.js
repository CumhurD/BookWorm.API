var genreMapper = require('../mappers/genreMapper');


module.exports = {
    transformGenres: function(request, response, next){
        let rawGenres = request.getParameter('genres');
        let genres = rawGenres.map(genreMapper.mapToGenre);

        return response.send(genres);
    }
}