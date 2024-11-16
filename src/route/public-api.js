const express = require('express');
const userController = require('../controller/user-controller');

const publicRouter = new express.Router();
publicRouter.post('/register', userController.register);
publicRouter.post('/login', userController.login);
publicRouter.post('/register/send-otp', userController.sendEmailVerificationOTP);
publicRouter.post('/register/verify-otp', userController.verifyEmailVerificationOTP);
publicRouter.post('/forgot-password/send-otp', userController.sendForgotPasswordOTP);
publicRouter.post('/forgot-password/verify-otp', userController.verifyForgotPasswordOTP);
publicRouter.put('/forgot-password/change-password', userController.changeForgotPassword);

module.exports = { publicRouter };