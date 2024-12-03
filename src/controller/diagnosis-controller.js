const diagnosisService = require('../service/diagnosis-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const diagnose = async (request, response, next) => {
	try {
		const model = await diagnosisService.loadModel();
		const prediction = await diagnosisService.predict(model, request);
		
		// TODO: save the prediction to the database

		// TODO: save image to the storage

		// TODO: send response with plant disease details and recommended actions

		const result = { predictedClass: prediction.predictedClass, plant_data: 'todo', disease_data: 'todo' }

		sendSuccessResponse(response, result, 200, "Prediction Successful");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	diagnose
};