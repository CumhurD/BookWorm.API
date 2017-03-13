var bodyParser = require('body-parser');
var express = require('express');
var DBCollection = require('mongodb')
var app = express();

var configuration = require('./config.json');
var errorManager = require('./managers/errorManager');
var moduleManager = require('./managers/moduleManager');
var baseRepository = require('./repositories/baseRepository');
var routerModules = require('./routerModules');

baseRepository.connectDb();
baseRepository.implementCollectionHelpers();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(moduleManager.implementRequestHelpers);
app.use(moduleManager.addCorsHeaders);
routerModules.init(app);
app.use(errorManager.handleError);

app.listen(configuration.applicationPort, function () {
    console.log('Bookworm.API listening on port ' + configuration.applicationPort);
});

process.on('uncaughtException', (err) => {
    //   fs.writeSync(1, `Caught exception: ${err}`);
});

