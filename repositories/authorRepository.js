var baseRepository = require('./baseRepository');

module.exports = {
    getAuthorById: function(authorId, next){
        var db = baseRepository.getDb();

        db.collection('Authors').findOne({_id:authorId}, next);
    }
}