var configuration = require('./config.json');
var routerModules = require('./routerModules');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routerModules.init(app);

app.listen(configuration.applicationPort, function(){
    console.log('Bookworm.API listening on port '+ configuration.applicationPort);
});

