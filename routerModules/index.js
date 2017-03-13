var booksModule = require('./booksModule');
var authorsModule = require('./authorsModule');
var publishersModule = require('./publishersModule');
var genresModule = require('./genresModule');
var notificationsModule = require('./notificationsModule');

module.exports = {
    init: function (app) {
        booksModule.init(app);
        authorsModule.init(app);
        publishersModule.init(app);
        genresModule.init(app);
        notificationsModule.init(app);
    }
}