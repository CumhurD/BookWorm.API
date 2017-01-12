var baseRepository = require('./baseRepository');

module.exports = {
    getGenreById: function (genreId, callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').findOne({ _id: genreId }, callback);
    },
    getGenreByIdList: function (genreIds, callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').find({ _id: { $in: genreIds } }).toArray(callback);
    }
}