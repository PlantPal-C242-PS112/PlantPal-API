const tfjs = require('@tensorflow/tfjs-node');

const loadModel = async () => {
	const model = await tfjs.loadLayersModel('file://model/model.json');
	return model;
}

const predict = async (model, request) => {
	const imageBuffer = request.file.buffer;
	// the req shape is [ 1, 224, 224, 3 ]
	// const tensor = tfjs.node.decodeImage(imageBuffer, 3).resizeBilinear([224, 224]).expandDims().div(255);
	const tensor = tfjs.node.decodeImage(imageBuffer, 3).resizeNearestNeighbor([224, 224]).expandDims().toFloat().div(255);
	const result = model.predict(tensor);
	const prediction = result.arraySync()[0];
	const maxPrediction = Math.max(...prediction);
	const predictedIndex = prediction.indexOf(maxPrediction);
	const class_names = [
		'Apple___Black_rot', 
		'Apple___Cedar_apple_rust', 
		'Apple___healthy', 
		'Apple___scab', 
		'Corn___(maize)_Cercospora_leaf_spot Gray_leaf_spot', 
		'Corn___(maize)_Common_rust_', 
		'Corn___(maize)_Northern_Leaf_Blight', 
		'Corn___(maize)_healthy', 
		'Grape___Black_rot', 
		'Grape___Esca_(Black_Measles)', 
		'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
		'Grape___healthy', 
		'Orange___Haunglongbing_(Citrus_greening)', 
		'Pepper___bell_Bacterial_spot', 
		'Pepper___bell_healthy', 
		'Potato___Early_blight', 
		'Potato___Late_blight', 
		'Potato___healthy', 
		'Squash___Powdery_mildew', 
		'Strawberry___Leaf_scorch', 
		'Strawberry___healthy', 
		'Tomato___Bacterial_spot', 
		'Tomato___Early_blight', 
		'Tomato___Late_blight', 
		'Tomato___Leaf_Mold', 
		'Tomato___Septoria_leaf_spot', 
		'Tomato___Spider_mites Two-spotted_spider_mite', 
		'Tomato___Target_Spot', 
		'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 
		'Tomato___Tomato_mosaic_virus', 
		'Tomato___healthy'
	];

	if (maxPrediction < 0.5) {
		return {
			predictedClass: 'Unknown'
		};
	}

	const predictedClass = class_names[predictedIndex];

	return {
		predictedClass,
		plant_id: 'to do',
		disease_id: 'to do',
	};
}

module.exports = {
	loadModel,
	predict,
};