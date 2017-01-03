

module.exports = {
    mapToBookDto: function (rawBook){
        var bookDto = {
            title: rawBook.Title,
            authorName: 'Robin Hobb'
        }

        return bookDto;
    },
    mapToBookDtoArray: function(rawBooks){
        if (!rawBooks instanceof Array)
            throw "rawBooks variable is not an instance of Array!";

        var bookDtos = rawBooks.map(book => { return this.mapToBookDto(book); });

        return bookDtos;
    }
}