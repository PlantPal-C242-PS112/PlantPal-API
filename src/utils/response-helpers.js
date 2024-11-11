const sendSuccessResponse = (response, data, statusCode = 200, message) => {
  response.status(statusCode).json({
    status: true,
    message: message,
    data: data,
  });
};

const sendErrorResponse = (response, statusCode, message) => {
  response.status(statusCode).json({
    status: false,
    message: message,
  }).end();
};

module.exports = { sendSuccessResponse, sendErrorResponse };