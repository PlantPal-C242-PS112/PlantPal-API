const userService = require('../service/user-service');

const register = async (request, response, next) => {
  try {
    const result = await userService.register(request.body);
    response.status(200).json({
      data: result,
    })
  } catch (error) {
    next(error);
  }
};

module.exports = { register };