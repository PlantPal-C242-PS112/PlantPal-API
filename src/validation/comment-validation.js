const Joi = require("joi");

const createCommentValidation = Joi.object({
  content: Joi.string().required(),
});

module.exports = {
  createCommentValidation,
};