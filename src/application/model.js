const tfjs = require('@tensorflow/tfjs-node');

const loadModel = async () => {
	const model = await tfjs.loadGraphModel(process.env.MODEL_URL);
	return model;
}

module.exports = loadModel;