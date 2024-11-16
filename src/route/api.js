const express = require('express');
const userController = require('../controller/user-controller');
const jwtMiddleware = require('../middleware/jwt-middleware');
const multer = require('multer');

// Konfigurasi Multer untuk upload file
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // Maks 5MB
});

const userRouter = new express.Router();
userRouter.use(jwtMiddleware);
userRouter.get('', userController.getUserDetails);
userRouter.put('/change-password', userController.changePassword);
userRouter.put('/update-profile', upload.single('profile_picture'), userController.updateProfile);

module.exports = { userRouter };