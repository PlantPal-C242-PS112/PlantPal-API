const express = require('express');
const jwtMiddleware = require('../middleware/jwt-middleware');
const userController = require('../controller/user-controller');
const plantController = require('../controller/plant-controller');
const diseaseController = require('../controller/disease-controller');
const userPlantController = require('../controller/user-plant-controller');
const discussionController = require('../controller/discussion-controller');
const multer = require('multer');

// Konfigurasi Multer untuk upload file
const upload = multer({
	storage: multer.memoryStorage(),
	limits: { fileSize: 5 * 1024 * 1024 }, // Maks 5MB
});

const userRouter = new express.Router();
const plantRouter = new express.Router();
const diseaseRouter = new express.Router();
const userPlantRouter = new express.Router();
const discussionRouter = new express.Router();

userRouter.use(jwtMiddleware);
userRouter.get('', userController.getUserDetails);
userRouter.put('/change-password', userController.changePassword);
userRouter.put('/update-profile', upload.single('profile_picture'), userController.updateProfile);

plantRouter.use(jwtMiddleware);
plantRouter.get('', plantController.get);
plantRouter.get('/:id', plantController.getById);
plantRouter.get('/:id/cultivation-tips', plantController.getCultivationTips);
plantRouter.get('/:id/diseases', plantController.getPlantDiseases);

diseaseRouter.use(jwtMiddleware);
diseaseRouter.get('/:id', diseaseController.getById);

userPlantRouter.use(jwtMiddleware);
userPlantRouter.get('', userPlantController.get);
userPlantRouter.post('', userPlantController.add);
userPlantRouter.delete('', userPlantController.remove);

discussionRouter.use(jwtMiddleware);
discussionRouter.get('', discussionController.getDiscussions);

module.exports = {
	userRouter,
	plantRouter,
	diseaseRouter,
	userPlantRouter,
	discussionRouter,
};