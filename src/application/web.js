const express = require('express');
const { publicRouter } = require('../route/public-api');
const { userRouter } = require('../route/api');
const { errorMiddleware } = require('../middleware/error-middleware');

const web = express();
web.use(express.json());

web.use('/api/v1/users', publicRouter);
web.use('/api/v1/users', userRouter);

web.use(errorMiddleware);

module.exports = web;