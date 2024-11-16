const express = require('express');
const jwtMiddleware = require('../middleware/jwt-middleware');
const userController = require('../controller/user-controller');
const plantController = require('../controller/plant-controller');

const userRouter = new express.Router();
const plantRouter = new express.Router();
userRouter.use(jwtMiddleware);
userRouter.get('', userController.getUserDetails);

plantRouter.use(jwtMiddleware);
plantRouter.get('', plantController.get);
plantRouter.get('/:id', plantController.getById);

module.exports = {
	userRouter, 
	plantRouter
};