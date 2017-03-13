var authorMapper = require('../mappers/authorMapper');

module.exports = {
    transformAuthor: function (request, response, next) {
        let rawAuthor = request.getParameter('author');
        let author = authorMapper.mapToAuthorDto(rawAuthor);
        return response.send(author);
    },
    transformAuthors: function (request, response, next) {
        let rawAuthors = request.getParameter('authors');
        let authors = rawAuthors.map(authorMapper.mapToAuthorDto);
        return response.send(authors);
    }
}