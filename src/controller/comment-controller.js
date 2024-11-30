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

module.exports = {
  getComments,
};