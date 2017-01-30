var booksModule = require('./booksModule');
var authorsModule = require('./authorsModule');
var publishersModule = require('./publishersModule');
var genresModule = require('./genresModule');

module.exports = {
    init: function (app) {
        booksModule.init(app);
        authorsModule.init(app);
        publishersModule.init(app);
        genresModule.init(app);
    }
}