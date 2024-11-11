const { validate } = require('../validation/validation');
const {
  registerUserValidation,
} = require('../validation/user-validation');
const prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');
const bcrypt = require('bcrypt');

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const emailExist = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (emailExist) {
    throw new ResponseError(400, 'Email already exist');
  }

  const  usernameExist = await prisma.user.findUnique({
    where: {
      username: user.username,
    },
  });

  if (usernameExist) {
    throw new ResponseError(400, 'Username already exist');
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prisma.user.create({
    data: user,
  });
};

module.exports = { register };