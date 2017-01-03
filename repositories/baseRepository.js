var mongoClient = require('mongodb').MongoClient;
var configuration = require('../config.json');
var assert = require('assert');
var database = null;

// BUG: getDb function should return database object also on first call.
// IDEA: Call mongoClient.connect method on contructor, and return stored database object as it is now.
module.exports = {
    connectDb: function(){
        mongoClient.connect(configuration.mongoUrl, {
            db: {
                ufferMaxEntries: 0, 
                autoConnect: true }
            },function(err, db ){
                console.log('Successfuly connected to MongoDB server!');
                database = db;
        });
    },
    getDb: function(){
        return database;
    }
};