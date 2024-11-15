const express = require('express');
const userController = require('../controller/user-controller');

const publicRouter = new express.Router();
publicRouter.post('/register', userController.register);
publicRouter.post('/login', userController.login);
publicRouter.post('/register/send-otp', userController.sendOTP);

module.exports = { publicRouter };