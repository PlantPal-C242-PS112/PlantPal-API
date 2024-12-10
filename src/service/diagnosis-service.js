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
		{ class_name: 'Apel__Black Rot', plant_id: 6, disease_id: 16 },
		{ class_name: 'Apel__Cedar Apple Rust', plant_id: 6, disease_id: 17 },
		{ class_name: 'Apel__Healthy', plant_id: 6, disease_id: 0 },
		{ class_name: 'Apel__Apple Scab', plant_id: 6, disease_id: 18 },
		{ class_name: 'Jagung__Cercospora Leaf Spot (Gray Leaf Spot)', plant_id: 9, disease_id: 22 },
		{ class_name: 'Jagung__Common Rust', plant_id: 9, disease_id: 23 },
		{ class_name: 'Jagung__Northern Corn Leaf Blight', plant_id: 9, disease_id: 24 },
		{ class_name: 'Jagung__Healthy', plant_id: 9, disease_id: 0 },
		{ class_name: 'Anggur__Black Rot (Bercak Daun)', plant_id: 5, disease_id: 13 },
		{ class_name: 'Anggur__Black Measles (Esca)', plant_id: 5, disease_id: 14 },
		{ class_name: 'Anggur__Isariopsis Leaf Spot (Leaf Blight)', plant_id: 5, disease_id: 15 },
		{ class_name: 'Anggur__Healthy', plant_id: 5, disease_id: 0 },
		{ class_name: 'Jeruk__Huanglongbing (Citrus Greening)', plant_id: 7, disease_id: 19 },
		{ class_name: 'Paprika__Bacterial Spot', plant_id: 3, disease_id: 11 },
		{ class_name: 'Paprika__Healthy', plant_id: 3, disease_id: 0 },
		{ class_name: 'Kentang__Early Blight', plant_id: 8, disease_id: 20 },
		{ class_name: 'Kentang__Late Blight', plant_id: 8, disease_id: 21 },
		{ class_name: 'Kentang__Healthy', plant_id: 8, disease_id: 0 },
		{ class_name: 'Labu__Powdery Mildew', plant_id: 4, disease_id: 12 },
		{ class_name: 'Strawberry__Leaf Scorch', plant_id: 2, disease_id: 10 },
		{ class_name: 'Strawberry__Healthy', plant_id: 2, disease_id: 0 },
		{ class_name: 'Tomat__Bacterial Spot', plant_id: 1, disease_id: 1 },
		{ class_name: 'Tomat__Early Blight', plant_id: 1, disease_id: 2 },
		{ class_name: 'Tomat__Late Blight', plant_id: 1, disease_id: 3 },
		{ class_name: 'Tomat__Leaf Mold', plant_id: 1, disease_id: 4 },
		{ class_name: 'Tomat__Septoria Leaf Spot', plant_id: 1, disease_id: 5 },
		{ class_name: 'Tomat__Spider mites (Two Spotted)', plant_id: 1, disease_id: 6 },
		{ class_name: 'Tomat__Target Spot', plant_id: 1, disease_id: 7 },
		{ class_name: 'Tomat__Tomato Yellow Leaf Curl Virus', plant_id: 1, disease_id: 8 },
		{ class_name: 'Tomat__Mosaic Virus', plant_id: 1, disease_id: 9 },
		{ class_name: 'Tomat__Healthy', plant_id: 1, disease_id: 0 },
	];

	const top3 = tfjs.tidy(() => {
		const tensor = tfjs.node.decodeImage(imageBuffer, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.div(255);
		const result = model.predict(tensor);
		const prediction = result.arraySync()[0];

		return prediction
			.map((value, index) => ({ value, index }))
			.sort((a, b) => b.value - a.value)
			.slice(0, 3)
			.map(({ value, index }) => ({
				class_name: classes[index].class_name,
				plant_id: classes[index].plant_id,
				disease_id: classes[index].disease_id,
				confidence_score: parseFloat((value * 100).toFixed(2)),
			}));
	});

	return top3;
}

const savePrediction = async (userId, predictionData, createdAt) => {
	const predictionRef = firestore.collection('predictions').doc();
	await predictionRef.set({
		user_id: userId,
		result: predictionData,
		created_at: Timestamp.fromDate(createdAt),
		deleted_at: null,
	});
	return predictionRef.id;
}

const getPredictions = async (userId) => {
	const snapshot = await firestore.collection('predictions')
		.where('user_id', '==', userId)
		.where('deleted_at', '==', null)
		.select('result', 'created_at')
		.get();
	return snapshot.docs.map(doc => ({
		id: doc.id,
		result: doc.data().result,
		created_at: doc.data().created_at.toDate(),
	})).sort((a, b) => b.created_at - a.created_at);
}

const deletePrediction = async (userId, predictionId) => {
	const predictionRef = firestore.collection('predictions').doc(predictionId);
	const prediction = await predictionRef.get();
	if (prediction.data().deleted_at !== null) {
		throw new ResponseError(404, 'Prediction not found');
	}
	if (prediction.data().user_id !== userId) {
		throw new ResponseError(403, 'Forbidden');
	}
	await predictionRef.update({
		deleted_at: Timestamp.now(),
	});

	return predictionId;
}

const deleteAllPredictions = async (userId) => {
	const snapshot = await firestore.collection('predictions')
		.where('user_id', '==', userId)
		.where('deleted_at', '==', null)
		.get();

	if (snapshot.empty) {
		throw new ResponseError(404, 'No predictions found');
	}

	const batch = firestore.batch();
	snapshot.docs.forEach(doc => {
		const predictionRef = firestore.collection('predictions').doc(doc.id);
		batch.update(predictionRef, { deleted_at: Timestamp.now() });
	});
	await batch.commit();
}

module.exports = {
	predict,
	savePrediction,
	getPredictions,
	deletePrediction,
	deleteAllPredictions,
};