const express = require('express');
const userController = require('../controller/user-controller');

const publicRouter = new express.Router();
publicRouter.post('/api/v1/users/register', userController.register);

module.exports = { publicRouter };