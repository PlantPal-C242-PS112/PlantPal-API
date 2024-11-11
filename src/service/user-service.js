const { validate } = require('../validation/validation');
const {
  registerUserValidation,
  loginUserValidation,
} = require('../validation/user-validation');
const prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

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

const login = async (request) => {
  const { identifier, password } = validate(loginUserValidation, request);

  let user = await prisma.user.findUnique({
    where: identifier.includes('@') ? { email: identifier } : { username: identifier },
  });

  if (!user) {
    throw new ResponseError(400, 'User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ResponseError(400, 'Password is not valid');
  }

  const token = jwt.sign({
    id: user.id,
    username: user.username,
    email: user.email,
  }, process.env.JWT_SECRET);

  user = {
    id: user.id,
    username: user.username,
    email: user.email,
    fullname: user.fullname,
    token,
  };

  return user;
};

module.exports = {
  register,
  login,
};