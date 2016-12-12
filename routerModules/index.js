var booksModule = require('./booksModule');
var moduleManager = require('../managers/moduleManager');

module.exports = {
    init : function(app){
        app.use(moduleManager.checkAuthentication)

        booksModule.init(app);

        app.use(moduleManager.processResponse);
    }
}