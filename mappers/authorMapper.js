
module.exports = {
    mapToAuthorDto: function (rawAuthor) {
        let author = {
            id: rawAuthor._id,
            name: rawAuthor.Name,
            surname: rawAuthor.Surname
        };

        return author;
    },
}