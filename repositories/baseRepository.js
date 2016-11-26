var mongoClient = require('mongodb').MongoClient;
var configuration = require('../config.json');
var assert = require('assert');
var database = null;

module.exports = {
    getDb: function(){
        if (!database){
            mongoClient.connect(configuration.mongoUrl, function(err, db){
                    assert.equal(null, err);
                    console.log('Successfuly connected to MongoDB server!');
                    database = db;
                });
        }

        return database;
    }
};