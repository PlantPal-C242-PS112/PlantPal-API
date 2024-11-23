const discussionService = require('../service/discussion-service');
const {
  sendSuccessResponse,
  sendSuccessResponseWithMeta,
} = require('../utils/response-helpers');

const getDiscussions = async (request, response, next) => {
  try {
    const { discussions, metadata } = await discussionService.getDiscussions(request);
    sendSuccessResponseWithMeta(response, discussions, metadata, 200, "Discussions Fetched Successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDiscussions,
};