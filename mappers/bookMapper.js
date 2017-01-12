

module.exports = {
    mapToBookDto: function (rawBook) {
        var author = rawBook.Author[0];

        var bookDto = {
            id: rawBook._id,
            title: rawBook.Title,
            authorName: author.Name + ' ' + author.Surname
        }

        return bookDto;
    },
    mapToVariantDto: function (rawVariant) {
        var variantDto = {
            variantId: rawVariant._variantId,
            title: rawVariant.Title,
            language: rawVariant.Language,
            publishDate: rawVariant.PublishDate,
            publisherId: rawVariant.PublisherId
        }

        return variantDto;
    }
}