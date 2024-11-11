const Joi = require("joi");

const registerUserValidation = Joi.object({
  username: Joi.string().min(5).max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(255).required(),
  fullname: Joi.string().min(5).max(255).required(),
});

const loginUserValidation = Joi.object({
  identifier: Joi.alternatives()
    .try(
      Joi.string().email().min(5).max(255), 
      Joi.string().min(5).max(255)
    )
    .required(),
  password: Joi.string().min(5).max(255).required(),
});

module.exports = {
  registerUserValidation,
  loginUserValidation,
};
