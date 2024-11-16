const express = require('express');
const userController = require('../controller/user-controller');
const jwtMiddleware = require('../middleware/jwt-middleware');

const userRouter = new express.Router();
userRouter.use(jwtMiddleware);
userRouter.get('', userController.getUserDetails);
userRouter.put('/change-password', userController.changePassword);

module.exports = { userRouter };