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

const updateComment = async (commentData, userId, commentId) => {
  const { content } = validate(validation.createCommentValidation, commentData);

  const comment = await prisma.comment.findUnique({
    where: {
      id: parseInt(commentId),
    },
    select: {
      id: true,
      user_id: true,
    }
  });

  if (!comment) {
    throw new ResponseError(404, "Comment not found");
  }

  if (comment.user_id !== userId) {
    throw new ResponseError(403, "Forbidden");
  }

  const updatedComment = await prisma.comment.update({
    where: {
      id: parseInt(commentId),
    },
    data: {
      content,
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

  return updatedComment;
}

module.exports = {
  getComments,
  createComment,
  updateComment,
};