const Joi = require("joi");

const getPlantValidation = Joi.object({
	id: Joi.integer().required(),
})

module.exports = { getPlantValidation };