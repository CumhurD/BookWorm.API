var booksModule = require('./booksModule');
var authorsModule = require('./authorsModule');

module.exports = {
    init : function(app){
        booksModule.init(app);
        authorsModule.init(app);
    }
}