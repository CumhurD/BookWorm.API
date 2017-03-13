var commonMapper = require('../mappers/commonMapper');

module.exports = {
    commonInsertResult: function (request, response, next) {
        let rawResult = request.getParameter('result');
        let result = commonMapper.mapToInsertResultDto(rawResult);

        return response.send(result);
    },
    commonUpdateResult: function (request, response, next) {
        let rawResult = request.getParameter('result');
        let result = commonMapper.mapToUpdateResultDto(rawResult);

        return response.send(result);
    }
}