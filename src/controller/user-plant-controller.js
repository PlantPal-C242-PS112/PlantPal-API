const userPlantService = require('../service/user-plant-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const get = async (request, response, next) => {
	try {
		const result = await userPlantService.get(request.user.id, request.user.username);
		message = result.length === 0 ? "User Hasn't Added Any Plants Yet" : "User Plants Fetched Successfully";
		sendSuccessResponse(response, result, 200, message);
	} catch (error) {
		next(error);
	}
};

const add = async (request, response, next) => {
	try {
		const result = await userPlantService.add(request.user.id, request.body.plantId);
		sendSuccessResponse(response, result, 201, "Plant Added Successfully");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	get,
	add
};