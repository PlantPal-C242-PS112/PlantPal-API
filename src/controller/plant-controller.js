const plantService = require('../service/plant-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const get = async (request, response, next) => {
	try {
		const result = await plantService.getAllPlants();
		sendSuccessResponse(response, result, 200, "Plants Fetched Successfully");
	} catch (error) {
		next(error);
	}
};

const getById = async (request, response, next) => {
	try {
		const result = await plantService.getPlantById(request.params.id);
		sendSuccessResponse(response, result, 200, "Plant Fetched Successfully");
	} catch (error) {
		next(error);
	}
}

module.exports = {
	get,
	getById
};