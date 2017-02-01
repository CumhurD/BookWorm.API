var baseRepository = require('./baseRepository');

module.exports = {
    getAllGenres: function (callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').find({}).toArray(callback);
    },
    getGenreById: function (genreId, callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').findOne({ _id: genreId }, callback);
    },
    getGenreByIdList: function (genreIds, callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').find({ _id: { $in: genreIds } }).toArray(callback);
    },
    getGenreByNameList: function (genreNames, callback) {
        var db = baseRepository.getDb();

        db.collection('Genres').find({ Name: { $in: genreNames } }).toArray(callback);
    }
}