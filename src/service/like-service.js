const prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const likeOrDislikeDiscussion = async (discussionId, userId) => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      id: discussionId,
    },
    select: {
      id: true,
      total_likes: true,
    },
  });

  if (!discussion) {
    throw new ResponseError(404, 'Discussion Not Found');
  }

  const isUserLiked = await prisma.like.findFirst({
    where: {
      discussion_id: discussionId,
      user_id: userId,
    },
  });

  if (isUserLiked) {
    await prisma.like.delete({
      where: {
        id: isUserLiked.id,
      },
    });

    await prisma.discussion.update({
      where: {
        id: discussionId,
      },
      data: {
        total_likes: {
          decrement: 1,
        },
      },
    });

    return {
      message: 'Discussion Disliked Successfully',
      total_likes: discussion.total_likes - 1,
    };
  }

  await prisma.like.create({
    data: {
      discussion_id: discussionId,
      user_id: userId,
    },
  });

  await prisma.discussion.update({
    where: {
      id: discussionId,
    },
    data: {
      total_likes: {
        increment: 1,
      },
    },
  });

  return {
    message: 'Discussion Liked Successfully',
    total_likes: discussion.total_likes + 1,
  };
};

module.exports = {
  likeOrDislikeDiscussion,
};