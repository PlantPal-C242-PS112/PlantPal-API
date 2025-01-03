const plantService = require('../service/plant-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const get = async (request, response, next) => {
	try {
		const result = await plantService.getAllPlants();
		message = result.length === 0 ? "Plants Fetched Successfully But No Plants Found" : "Plants Fetched Successfully";
		sendSuccessResponse(response, result, 200, message);
	} catch (error) {
		next(error);
	}
};

const getById = async (request, response, next) => {
	try {
		const result = await plantService.getPlantById(request.params.id, request.query);
		sendSuccessResponse(response, result, 200, "Plant Fetched Successfully");
	} catch (error) {
		next(error);
	}
};

const getCultivationTips = async (request, response, next) => {
	try {
		const result = await plantService.getCultivationTips(request.params.id);
		sendSuccessResponse(response, result, 200, "Cultivation Tips Fetched Successfully");
	} catch (error) {
		next(error);
	}
};

const getPlantDiseases = async (request, response, next) => {
	try {
		const result = await plantService.getPlantDiseases(request.params.id);
		message = result.length === 0 ? "Plant Diseases Fetched Successfully But No Diseases Found" : "Plant Diseases Fetched Successfully";
		sendSuccessResponse(response, result, 200, message);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	get,
	getById,
	getCultivationTips,
	getPlantDiseases
};