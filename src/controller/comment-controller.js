const commentService = require('../service/comment-service');
const {
  sendSuccessResponse,
} = require('../utils/response-helpers');

const getComments = async (request, response, next) => {
  try {
    const comments = await commentService.getComments(request.params.id);
    sendSuccessResponse(response, comments, 200, "Comments Fetched Successfully");
  } catch (error) {
    next(error);
  }
}

const createComment = async (request, response, next) => {
  try {
    const commentData = request.body;
    const userId = request.user.id;
    const discussionId = request.params.id;

    const result = await commentService.createComment(commentData, userId, discussionId);
    sendSuccessResponse(response, result, 201, "Comment Created Successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getComments,
  createComment,
};