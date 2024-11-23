const Joi = require("joi");

const getDiscussionsValidation = Joi.object({
  page: Joi.number().required(),
  limit: Joi.number().required(),
  keywords: Joi.string().allow(null, ''),
  plant_id: Joi.number().allow(null, ''),
});

module.exports = {
  getDiscussionsValidation,
};