const diseaseService = require('../service/disease-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const getById = async (request, response, next) => {
	try {
		const result = await diseaseService.getById(request.params.id);
		sendSuccessResponse(response, result, 200, "Disease Fetched Successfully");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getById
};