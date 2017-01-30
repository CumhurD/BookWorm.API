
module.exports = {
    mapToGenre: function(rawGenre){
        var genre = {
            id: rawGenre._id,
            name: rawGenre.Name
        };

        return genre;
    }
}