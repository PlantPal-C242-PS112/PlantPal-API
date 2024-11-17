const joi = require("joi");

const userPlantIdValidation = joi.object({
	plantId: joi.number().required()
});

module.exports = {
	userPlantIdValidation
};