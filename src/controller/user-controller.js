const userService = require('../service/user-service');
const { sendSuccessResponse } = require('../utils/response-helpers');

const register = async (request, response, next) => {
  try {
    const result = await userService.register(request.body);
    sendSuccessResponse(response, result, 201, "User Registered Successfully");
  } catch (error) {
    next(error);
  }
};

const login = async (request, response, next) => {
  try {
    const result = await userService.login(request.body);
    sendSuccessResponse(response, result, 200, "User Logged In Successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};