const Joi = require("joi");

const getDiscussionsValidation = Joi.object({
  page: Joi.number().required(),
  limit: Joi.number().required(),
  keywords: Joi.string().allow(null, ''),
  plant_id: Joi.number().allow(null, ''),
});

const createDiscussionValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  plant_id: Joi.number().required(),
});

module.exports = {
  getDiscussionsValidation,
  createDiscussionValidation,
};