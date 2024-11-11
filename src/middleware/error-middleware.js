const { ResponseError } = require('../error/response-error');
const { sendErrorResponse } = require('../utils/response-helpers');

const errorMiddleware = (error, request, response, next) => {
  if (!error) {
    next();
    return;
  }

  if (error instanceof ResponseError) {
    sendErrorResponse(response, error.status, error.message);
  } else {
    sendErrorResponse(response, 500, 'Internal Server Error');
  }
};

module.exports = { errorMiddleware };