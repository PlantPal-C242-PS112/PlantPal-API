const { validate } = require('../validation/validation');
const {
  registerUserValidation,
  loginUserValidation,
  sendOTPValidation,
} = require('../validation/user-validation');
const prisma = require('../application/database');
const mailer = require('../application/mailer');
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
    email_verified: user.email_verified,
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

const getUserDetails = async (userId) => {
  const user = prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      email: true,
      fullname: true,
      profile_photo: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  return user;
};

const sendOTP = async (request) => {
  const { email } = validate(sendOTPValidation, request);

  let user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  const otp = Math.floor(10000 + Math.random() * 90000).toString();
  const otp_expiry = new Date();
  otp_expiry.setMinutes(otp_expiry.getMinutes() + 5);

  user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      otp,
      otp_expiry
    },
  });

  await mailer.sendMail(email, 'PlantPal Registration OTP', './src/template/register-otp.html', otp);

  return otp;
};

module.exports = {
  register,
  login,
  getUserDetails,
  sendOTP,
};