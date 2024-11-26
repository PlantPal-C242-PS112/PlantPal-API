const userPlantService = require('../service/user-plant-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const get = async (request, response, next) => {
	try {
		const result = await userPlantService.get(request.user.id);
		message = result.length === 0 ? "User Hasn't Added Any Plants Yet" : "User Plants Fetched Successfully";
		sendSuccessResponse(response, result, 200, message);
	} catch (error) {
		next(error);
	}
};

const add = async (request, response, next) => {
	try {
		const result = await userPlantService.add(request.user.id, request.body);
		sendSuccessResponse(response, result, 201, "Plant Added Successfully");
	} catch (error) {
		next(error);
	}
};

const remove = async (request, response, next) => {
	try {
		result = await userPlantService.remove(request.user.id, request.body);
		sendSuccessResponse(response, result, 204, "Plant Removed Successfully");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	get,
	add,
	remove
};