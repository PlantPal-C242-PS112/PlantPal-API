const { validate } = require('../validation/validation');
const validation = require('../validation/comment-validation');
const prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const getComments = async (discussionId) => {
  const comments = await prisma.comment.findMany({
    where: {
      discussion_id: parseInt(discussionId),
    },
    select: {
      id: true,
      content: true,
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          profile_photo: true,
        }
      },
      updated_at: true,
    }
  });

  return comments;
};

const createComment = async (commentData, userId, discussionId) => {
  const { content } = validate(validation.createCommentValidation, commentData);

  const discussion = await prisma.discussion.findUnique({
    where: {
      id: parseInt(discussionId),
    }
  });

  if (!discussion) {
    throw new ResponseError(404, "Discussion not found");
  }

  const comment = await prisma.comment.create({
    data: {
      content,
      discussion_id: parseInt(discussionId),
      user_id: parseInt(userId),
    },
    select: {
      id: true,
      content: true,
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          profile_photo: true,
        }
      },
      updated_at: true,
    }
  });

  return comment;
}

module.exports = {
  getComments,
  createComment,
};