const express = require('express');
const { publicRouter } = require('../route/public-api');
const { userRouter } = require('../route/api');
const { plantRouter } = require('../route/api');
const { diseaseRouter } = require('../route/api');
const { errorMiddleware } = require('../middleware/error-middleware');

const web = express();
web.use(express.json());

web.use('/api/v1/users', publicRouter);
web.use('/api/v1/users', userRouter);
web.use('/api/v1/plants', plantRouter);
web.use('/api/v1/diseases', diseaseRouter);

web.use(errorMiddleware);

module.exports = web;