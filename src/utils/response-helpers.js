const sendSuccessResponse = (response, data = null, statusCode = 200, message) => {
  const responseBody = {
    status: true,
    message: message,
  };

  if (data !== null) {
    responseBody.data = data;
  }

  response.status(statusCode).json(responseBody);
};

const sendSuccessResponseWithMeta = (response, data, metadata, statusCode = 200, message) => {
  const responseBody = {
    status: true,
    message: message,
    metadata: metadata,
    data: data,
  };

  response.status(statusCode).json(responseBody);
};

const sendErrorResponse = (response, statusCode, message) => {
  response.status(statusCode).json({
    status: false,
    message: message,
  }).end();
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  sendSuccessResponseWithMeta,
};