const tfjs = require('@tensorflow/tfjs-node');
const { saveBucket, bucket } = require('./storage');

const loadModel = async () => {
	const modelPath = process.env.MODEL_PATH.split(',');

	const jsonFile = saveBucket.file(modelPath[0]);
	const binFile = saveBucket.file(modelPath[1]);

	await jsonFile.copy(bucket.file(`temp/${modelPath[0]}`));
	await binFile.copy(bucket.file(`temp/${modelPath[1]}`));

	model = await tfjs.loadGraphModel(modelPath[2]);

	bucket.deleteFiles({ prefix: 'temp/' });

	return model;
}

module.exports = loadModel;