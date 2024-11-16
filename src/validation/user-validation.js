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

const sendOTPValidation = Joi.object({
  email: Joi.string().email().required(),
});

const verifyOTPValidation = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(5).required(),
});

const changeForgotPasswordValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(255).required(),
});

module.exports = {
  registerUserValidation,
  loginUserValidation,
  sendOTPValidation,
  verifyOTPValidation,
  changeForgotPasswordValidation,
};
