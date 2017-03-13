
module.exports = {
    mapToGenre: function(rawGenre){
        let genre = {
            id: rawGenre._id,
            name: rawGenre.Name
        };

        return genre;
    }
}