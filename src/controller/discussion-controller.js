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

const getDiscussionById = async (request, response, next) => {
  try {
    const discussion = await discussionService.getDiscussionById(request.params.id, request.user.id);
    sendSuccessResponse(response, discussion, 200, "Discussion Fetched Successfully");
  } catch (error) {
    next(error);
  }
}

const createDiscussion = async (request, response, next) => {
  try {
    const discussionData = request.body;
    const file = request.file;
    const userId = request.user.id;

    const result = await discussionService.createDiscussion(discussionData, file, userId);
    sendSuccessResponse(response, result, 201, "Discussion Created Successfully");
  } catch (error) {
    next(error);
  }
}

const updateDiscussion = async (request, response, next) => {
  try {
    const discussionId = request.params.id;
    const discussionData = request.body;
    const file = request.file;
    const userId = request.user.id;

    const result = await discussionService.updateDiscussion(discussionId, discussionData, file, userId);
    sendSuccessResponse(response, result, 200, "Discussion Updated Successfully");
  } catch (error) {
    next(error);
  }
}

const deleteDiscussion = async (request, response, next) => {
  try {
    const discussionId = request.params.id;
    const userId = request.user.id;

    await discussionService.deleteDiscussion(discussionId, userId);
    sendSuccessResponse(response, null, 200, "Discussion Deleted Successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDiscussions,
  getDiscussionById,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};