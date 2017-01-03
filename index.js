var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var configuration = require('./config.json');
var errorManager = require('./managers/errorManager');
var moduleManager = require('./managers/moduleManager');
var baseRepository = require('./repositories/baseRepository');
var routerModules = require('./routerModules');

baseRepository.connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(moduleManager.implementRequestHelpers);
routerModules.init(app);
app.use(errorManager.handleError);

app.listen(configuration.applicationPort, function(){
    console.log('Bookworm.API listening on port ' + configuration.applicationPort);
});

process.on('uncaughtException', (err) => {
    debugger;
//   fs.writeSync(1, `Caught exception: ${err}`);
});

