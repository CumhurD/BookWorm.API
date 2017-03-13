

module.exports = {

    mapToBookDto: function (rawBook) {
        let author = rawBook.Author[0];

        let bookDto = {
            id: rawBook._id,
            title: rawBook.Title,
            authorName: author.Name + ' ' + author.Surname,
            genres: rawBook.Genres
        }

        return bookDto;
    },
    mapToVariantDto: function (rawVariant) {
        let publisher = rawVariant.Publisher[0];

        let variantDto = {
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