

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
        var publisher = rawVariant.Publisher[0];

        var variantDto = {
            id: rawVariant._variantId,
            title: rawVariant.Title,
            language: rawVariant.Language,
            publishInfo: {
                publishDate: rawVariant.PublishDate,
                publisherId: rawVariant.PublisherId,
                publisherName: publisher.Name
            }
        }

        return variantDto;
    }
}