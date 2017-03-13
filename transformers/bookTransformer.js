var bookMapper = require('../mappers/bookMapper');

module.exports = {
    transformBook: function (request, response, next) {
        let rawBook = request.getParameter('book');
        let book = bookMapper.mapToBookDto(rawBook);
        return response.send(book);
    },
    transformBooks: function (request, response, next) {
        let rawBooks = request.getParameter('books');
        let books = rawBooks.map(bookMapper.mapToBookDto);
        return response.send(books);
    },
    transformVariant: function (request, response, next) {
        let rawVariant = request.getParameter('variant');
        let variant = bookMapper.mapToVariantDto(rawVariant);

        return response.send(variant);
    },
    transformVariants: function (request, response, next) {
        let rawVariants = request.getParameter('variants');
        let variants = rawVariants.map(bookMapper.mapToVariantDto);
        return response.send(variants);
    }
}
