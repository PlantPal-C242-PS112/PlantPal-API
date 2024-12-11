const diagnosisService = require('../service/diagnosis-service');
const diseaseService = require('../service/disease-service');
const storage = require('../application/storage');
const { sendSuccessResponse } = require('../utils/response-helpers');

const diagnose = async (request, response, next) => {
	try {
		const top3 = await diagnosisService.predict(request);
		const createdAt = new Date();

		let message, diseaseData, classNameFile;
		if (top3[0].confidence_score < 70) {
			message = "We are not sure about the disease. Please try again with a clearer image."
			classNameFile = 'Unknown';
		} else {
			classNameFile = top3[0].class_name;
			if (top3[0].disease_id === 0) {
				message = "Prediction Successful. No disease detected.";
				diseaseData = {}
			} else {
				message = "Prediction Successful. Disease detected.";
				diseaseData = await diseaseService.getById(top3[0].disease_id);
			}
		}
		const result = { top3, diseaseData, createdAt };

		sendSuccessResponse(response, result, 201, message);

		const imageUrl = await storage.uploadPredictedImage(request.file, classNameFile);
		await diagnosisService.savePrediction(request.user.id, { message, ...top3[0], image_url: imageUrl }, createdAt);
	} catch (error) {
		next(error);
	}
};

const getPredictions = async (request, response, next) => {
	try {
		const predictions = await diagnosisService.getPredictions(request.user.id);
		sendSuccessResponse(response, predictions);
	} catch (error) {
		next(error);
	}
};

const deletePrediction = async (request, response, next) => {
	try {
		await diagnosisService.deletePrediction(request.user.id, request.params.id);
		sendSuccessResponse(response, null, 204);
	} catch (error) {
		next(error);
	}
}

const deleteAllPredictions = async (request, response, next) => {
	try {
		await diagnosisService.deleteAllPredictions(request.user.id);
		sendSuccessResponse(response, null, 204);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	diagnose,
	getPredictions,
	deletePrediction,
	deleteAllPredictions,
};