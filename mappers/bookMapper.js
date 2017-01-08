

module.exports = {
    mapToBookDto: function (rawBook){
        var bookDto = {
            title: rawBook.Title,
            authorName: 'Robin Hobb'
        }

        return bookDto;
    },
    mapToVariantDto: function(rawVariant){
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