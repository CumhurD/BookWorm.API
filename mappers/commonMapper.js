
module.exports = {
    mapToUpdateResultDto: function (rawResult) {
        let result = {
            matchedItems: rawResult.matchedCount,
            updatedItems: rawResult.modifiedCount
        };

        return result;
    },
    mapToInsertResultDto: function (rawResult) {
        let result = {
            insertedItems: rawResult.insertedCount
        };

        return result;
    }
}