const diagnosisService = require('../service/diagnosis-service');
const diseaseService = require('../service/disease-service');
const storage = require('../application/storage');
const { sendSuccessResponse } = require('../utils/response-helpers');

const diagnose = async (request, response, next) => {
	try {
		const { message, top3 } = await diagnosisService.predict(request);
		const createdAt = new Date();
		
		disease_data = top3[0].disease_id === 0 ? {} : await diseaseService.getById(top3[0].disease_id);
		const result = { top3, disease_data, createdAt };
		
		sendSuccessResponse(response, result, 201, message);
		
		const imageUrl = await storage.uploadFile(request.file, 'diagnosis');
		await diagnosisService.savePrediction(request.user.id, { top3, imageUrl: imageUrl }, createdAt);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	diagnose
};