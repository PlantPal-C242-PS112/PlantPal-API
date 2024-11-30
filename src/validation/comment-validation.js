const Joi = require("joi");

const createDiscussionValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  createDiscussionValidation,
};