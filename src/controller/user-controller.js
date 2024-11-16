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

const getUserDetails = async (request, response, next) => {
  try {
    const result = await userService.getUserDetails(request.user.id);
    sendSuccessResponse(response, result, 200, "User Details Fetched Successfully");
  } catch (error) {
    next(error);
  }
};

const sendEmailVerificationOTP = async (request, response, next) => {
  try {
    const result = await userService.sendOTP(request.body, "verifikasi email");
    sendSuccessResponse(response, null, 200, "OTP Sent Successfully");
  } catch (error) {
    next(error);
  }
};

const verifyEmailVerificationOTP = async (request, response, next) => {
  try {
    const result = await userService.verifyOTP(request.body, "verifikasi email");
    sendSuccessResponse(response, null, 200, "OTP Verified Successfully");
  } catch (error) {
    next(error);
  }
};

const sendForgotPasswordOTP = async (request, response, next) => {
  try {
    const result = await userService.sendOTP(request.body, "lupa password");
    sendSuccessResponse(response, null, 200, "OTP Sent Successfully");
  } catch (error) {
    next(error);
  }
};

const verifyForgotPasswordOTP = async (request, response, next) => {
  try {
    const result = await userService.verifyOTP(request.body, "lupa password");
    sendSuccessResponse(response, null, 200, "OTP Verified Successfully");
  } catch (error) {
    next(error);
  }
};

const changeForgotPassword = async (request, response, next) => {
  try {
    await userService.changeForgotPassword(request.body);
    sendSuccessResponse(response, null, 200, "Password Changed Successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getUserDetails,
  sendEmailVerificationOTP,
  verifyEmailVerificationOTP,
  sendForgotPasswordOTP,
  verifyForgotPasswordOTP,
  changeForgotPassword,
};