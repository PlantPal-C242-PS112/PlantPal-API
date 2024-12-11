const express = require('express');
const jwtMiddleware = require('../middleware/jwt-middleware');
const userController = require('../controller/user-controller');
const plantController = require('../controller/plant-controller');
const diseaseController = require('../controller/disease-controller');
const userPlantController = require('../controller/user-plant-controller');
const diagnosisController = require('../controller/diagnosis-controller');
const discussionController = require('../controller/discussion-controller');
const commentController = require('../controller/comment-controller');
const likeController = require('../controller/like-controller');
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
const diagnosisRouter = new express.Router();
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
diseaseRouter.get('', diseaseController.get);
diseaseRouter.get('/:id', diseaseController.getById);

userPlantRouter.use(jwtMiddleware);
userPlantRouter.get('', userPlantController.get);
userPlantRouter.post('/:plantId', userPlantController.add);
userPlantRouter.delete('/:plantId', userPlantController.remove);

diagnosisRouter.use(jwtMiddleware);
diagnosisRouter.post('', upload.single('image'), diagnosisController.diagnose);
diagnosisRouter.get('/history', diagnosisController.getPredictions);
diagnosisRouter.patch('/history/:id', diagnosisController.deletePrediction);
diagnosisRouter.patch('/history', diagnosisController.deleteAllPredictions);

discussionRouter.use(jwtMiddleware);
discussionRouter.get('', discussionController.getDiscussions);
discussionRouter.get('/:id', discussionController.getDiscussionById);
discussionRouter.post('', upload.single('media'), discussionController.createDiscussion);
discussionRouter.put('/:id', upload.single('media'), discussionController.updateDiscussion);
discussionRouter.delete('/:id', discussionController.deleteDiscussion);
discussionRouter.get('/:id/comments', commentController.getComments);
discussionRouter.post('/:id/comments', commentController.createComment);
discussionRouter.put('/:id/comments/:commentId', commentController.updateComment);
discussionRouter.delete('/:id/comments/:commentId', commentController.deleteComment);
discussionRouter.post('/:id/like', likeController.likeOrDislikeDiscussion);

module.exports = {
	userRouter,
	plantRouter,
	diseaseRouter,
	userPlantRouter,
	diagnosisRouter,
	discussionRouter,
};