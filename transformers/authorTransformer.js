var authorMapper = require('../mappers/authorMapper');

module.exports = {
    transformAuthor: function(request, response, next){
        var rawAuthor = request.getParameter('author');
        var author = authorMapper.mapToAuthorDto(rawAuthor);
        return response.send(author);
    },
    transformAuthors: function(request, response, next){
        var rawAuthors = request.getParameter('authors');
        var authors = rawAuthors.map(authorMapper.mapToAuthorDto);
        return response.send(authors);
    }
}