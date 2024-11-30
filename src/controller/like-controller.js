const likeService = require('../service/like-service');
const {
  sendSuccessResponse,
} = require('../utils/response-helpers');

const likeOrDislikeDiscussion = async (request, response, next) => {
  try {
    const discussionId = request.params.id;
    const userId = request.user.id;

    const result = await likeService.likeOrDislikeDiscussion(parseInt(discussionId), parseInt(userId));
    sendSuccessResponse(response, {
      total_likes: result.total_likes
    }, 200, result.message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  likeOrDislikeDiscussion,
};
