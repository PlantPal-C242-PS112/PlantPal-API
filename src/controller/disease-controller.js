const diseaseService = require('../service/disease-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const get = async (request, response, next) => {
	try {
		const result = await diseaseService.getAllDiseases();
		message = result.length === 0 ? "Diseases Fetched Successfully But No Diseases Found" : "Diseases Fetched Successfully";
		sendSuccessResponse(response, result, 200, message);
	} catch (error) {
		next(error);
	}
};

const getById = async (request, response, next) => {
	try {
		const result = await diseaseService.getById(request.params.id);
		sendSuccessResponse(response, result, 200, "Disease Fetched Successfully");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	get,
	getById
};