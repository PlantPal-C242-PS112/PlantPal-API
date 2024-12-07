const { validate } = require('../validation/validation');
const validation = require('../validation/user-validation');
const prisma = require('../application/database');
const mailer = require('../application/mailer');
const { ResponseError } = require('../error/response-error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const storage = require('../application/storage');

dotenv.config();

const register = async (request) => {
  let user = validate(validation.registerUserValidation, request);

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

  user = await prisma.user.create({
    data: user,
  });

  user = {
    id: user.id,
    username: user.username,
    email: user.email,
    fullname: user.fullname,
    email_verified: user.email_verified,
  }

  return user;
};

const login = async (request) => {
  const { identifier, password } = validate(validation.loginUserValidation, request);

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
  const user = await prisma.user.findUnique({
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

const sendOTP = async (request, action) => {
  const { email } = validate(validation.sendOTPValidation, request);

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

  await mailer.sendMail(email, 'PlantPal Registration OTP', './src/template/otp.html', otp, action);

  return otp;
};

const verifyOTP = async (request, action) => {
  const { email, otp } = validate(validation.verifyOTPValidation, request);

  let user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  if (user.otp !== otp) {
    throw new ResponseError(400, 'Invalid OTP');
  }

  if (user.otp_expiry < new Date()) {
    throw new ResponseError(400, 'OTP expired');
  }

  if (action === 'verifikasi email') {
    user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        email_verified: true,
        otp: null,
        otp_expiry: null,
      },
    });
  } else if (action === 'lupa password') {
    user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        forgot_password_verified: true,
        otp: null,
        otp_expiry: null,
      },
    });
  }

  return user;
};

const changeForgotPassword = async (request) => {
  const { email, password } = validate(validation.changeForgotPasswordValidation, request);
  
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  if (!user.forgot_password_verified) {
    throw new ResponseError(400, 'User not verified to change password');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      password: hashedPassword,
      forgot_password_verified: false,
    },
  });
};

const changePassword = async (request, userId) => {
  const { old_password, new_password } = validate(validation.changePasswordValidation, request);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  if (old_password === new_password) {
    throw new ResponseError(400, 'Old password and new password cannot be the same');
  }

  const isPasswordValid = await bcrypt.compare(old_password, user.password);

  if (!isPasswordValid) {
    throw new ResponseError(400, 'Old password is not valid');
  }

  const hashedPassword = await bcrypt.hash(new_password, 10);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    }
  });
};

const updateProfile = async (userData, file, userId) => {
  const { fullname } = validate(validation.updateProfileValidation, userData);

  let user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  let photoUrl;
  if (file) {
    if (user.profile_photo) {
      await storage.deleteFile(user.profile_photo);
    }
    photoUrl = await storage.uploadFile(file, "profile-pictures");
  }

  const data = { fullname };
  if (photoUrl) {
    data.profile_photo = photoUrl;
  }

  user = await prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });

  user = {
    id: user.id,
    username: user.username,
    email: user.email,
    fullname: user.fullname,
    profile_photo: user.profile_photo,
  };

  return user;
}

module.exports = {
  register,
  login,
  getUserDetails,
  sendOTP,
  verifyOTP,
  changeForgotPassword,
  changePassword,
  updateProfile,
};