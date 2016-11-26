var booksModule = require('./booksModule');

module.exports = {
    init : function(app){
        booksModule.init(app);
    }
}