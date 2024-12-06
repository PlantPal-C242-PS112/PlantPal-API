const tfjs = require('@tensorflow/tfjs-node');
const firestore = require('../application/firestore');
const { Timestamp } = require('firebase-admin/firestore');
const { ResponseError } = require('../error/response-error');

const predict = async (request) => {
	if (!request.file) {
		throw new ResponseError(400, 'Image is required');
	}

	const model = request.app.locals.model;
	const imageBuffer = request.file.buffer;

	const classes = [
		{ class_name: 'Apple___Black_rot', plant_id: 6, disease_id: 16 },
		{ class_name: 'Apple___Cedar_apple_rust', plant_id: 6, disease_id: 17 },
		{ class_name: 'Apple___healthy', plant_id: 6, disease_id: 0 },
		{ class_name: 'Apple___scab', plant_id: 6, disease_id: 18 },
		{ class_name: 'Corn___(maize)_Cercospora_leaf_spot Gray_leaf_spot', plant_id: 9, disease_id: 22 },
		{ class_name: 'Corn___(maize)_Common_rust_', plant_id: 9, disease_id: 23 },
		{ class_name: 'Corn___(maize)_Northern_Leaf_Blight', plant_id: 9, disease_id: 24 },
		{ class_name: 'Corn___(maize)_healthy', plant_id: 9, disease_id: 0 },
		{ class_name: 'Grape___Black_rot', plant_id: 5, disease_id: 13 },
		{ class_name: 'Grape___Esca_(Black_Measles)', plant_id: 5, disease_id: 14 },
		{ class_name: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', plant_id: 5, disease_id: 15 },
		{ class_name: 'Grape___healthy', plant_id: 5, disease_id: 0 },
		{ class_name: 'Orange___Haunglongbing_(Citrus_greening)', plant_id: 7, disease_id: 19 },
		{ class_name: 'Pepper___bell_Bacterial_spot', plant_id: 3, disease_id: 11 },
		{ class_name: 'Pepper___bell_healthy', plant_id: 3, disease_id: 0 },
		{ class_name: 'Potato___Early_blight', plant_id: 8, disease_id: 20 },
		{ class_name: 'Potato___Late_blight', plant_id: 8, disease_id: 21 },
		{ class_name: 'Potato___healthy', plant_id: 8, disease_id: 0 },
		{ class_name: 'Squash___Powdery_mildew', plant_id: 4, disease_id: 12 },
		{ class_name: 'Strawberry___Leaf_scorch', plant_id: 2, disease_id: 10 },
		{ class_name: 'Strawberry___healthy', plant_id: 2, disease_id: 0 },
		{ class_name: 'Tomato___Bacterial_spot', plant_id: 1, disease_id: 1 },
		{ class_name: 'Tomato___Early_blight', plant_id: 1, disease_id: 2 },
		{ class_name: 'Tomato___Late_blight', plant_id: 1, disease_id: 3 },
		{ class_name: 'Tomato___Leaf_Mold', plant_id: 1, disease_id: 4 },
		{ class_name: 'Tomato___Septoria_leaf_spot', plant_id: 1, disease_id: 5 },
		{ class_name: 'Tomato___Spider_mites Two-spotted_spider_mite', plant_id: 1, disease_id: 6 },
		{ class_name: 'Tomato___Target_Spot', plant_id: 1, disease_id: 7 },
		{ class_name: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', plant_id: 1, disease_id: 8 },
		{ class_name: 'Tomato___Tomato_mosaic_virus', plant_id: 1, disease_id: 9 },
		{ class_name: 'Tomato___healthy', plant_id: 1, disease_id: 0 },
	];

	// the req shape is [ 1, 224, 224, 3 ]
	const tensor = tfjs.node.decodeImage(imageBuffer, 3).resizeNearestNeighbor([224, 224]).expandDims().toFloat().div(255);
	const result = model.predict(tensor);
	const prediction = (await result.array())[0];

	// take top 3 predictions, in percentage, 2 decimal places
	const top3 = prediction
		.map((value, index) => ({ value, index }))
		.sort((a, b) => b.value - a.value)
		.slice(0, 3)
		.map(({ value, index }) => ({
			class_name: classes[index].class_name,
			plant_id: classes[index].plant_id,
			disease_id: classes[index].disease_id,
			confidenceScore: parseFloat((value * 100).toFixed(2)),
		}));

	const message = top3[0].confidenceScore < 50 ? "We are not sure about the disease. Please try again with a clearer image." : top3[0].disease_id === 0 ? "Prediction Successful. No disease detected." : "Prediction Successful. Disease detected.";

	return {
		message,
		top3,
	};
}

const savePrediction = async (userId, predictionData, createdAt) => {
	const predictionRef = firestore.collection('predictions').doc();
	await predictionRef.set({
		userId,
		...predictionData,
		createdAt: Timestamp.fromDate(createdAt),
	});
	return predictionRef.id;
}

module.exports = {
	predict,
	savePrediction,
};