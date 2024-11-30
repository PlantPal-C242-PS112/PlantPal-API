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

const updateComment = async (request, response, next) => {
  try {
    const commentId = request.params.commentId;
    const commentData = request.body;
    const userId = request.user.id;

    const result = await commentService.updateComment(commentData, userId, commentId);
    sendSuccessResponse(response, result, 200, "Comment Updated Successfully");
  } catch (error) {
    next(error);
  }
}

const deleteComment = async (request, response, next) => {
  try {
    const commentId = request.params.commentId;
    const userId = request.user.id;

    await commentService.deleteComment(commentId, userId);
    sendSuccessResponse(response, null, 200, "Comment Deleted Successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};