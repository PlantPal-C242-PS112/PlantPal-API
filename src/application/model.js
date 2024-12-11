const tfjs = require('@tensorflow/tfjs-node');
const { saveBucket, bucket } = require('./storage');

const loadModel = async () => {
	const modelPath = process.env.MODEL_PATH;

	const jsonFile = saveBucket.file("model/model.json");
	const binFile = saveBucket.file("model/group1-shard1of1.bin");

	await jsonFile.copy(bucket.file("temp/model/model.json"));
	await binFile.copy(bucket.file("temp/model/group1-shard1of1.bin"));

	model = await tfjs.loadGraphModel(modelPath);

	bucket.deleteFiles({ prefix: 'temp/' });

	return model;
}

module.exports = loadModel;