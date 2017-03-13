var baseRepository = require('./baseRepository');

module.exports = {
    getAllGenres: function (callback) {
        let db = baseRepository.getDb();

        db.collection('Genres').find({}).toArray(callback);
    },
    getGenreById: function (genreId, callback) {
        let db = baseRepository.getDb();

        db.collection('Genres').findOne({ _id: genreId }, callback);
    },
    getGenreByIdList: function (genreIds, callback) {
        let db = baseRepository.getDb();

        db.collection('Genres').find({ _id: { $in: genreIds } }).toArray(callback);
    },
    getGenreByNameList: function (genreNames, callback) {
        let db = baseRepository.getDb();

        db.collection('Genres').find({ Name: { $in: genreNames } }).toArray(callback);
    }
}