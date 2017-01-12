
module.exports = {
    mapToAuthorDto: function (rawAuthor) {
        var author = {
            id: rawAuthor._id,
            name: rawAuthor.Name,
            surname: rawAuthor.Surname
        };

        return author;
    },
}