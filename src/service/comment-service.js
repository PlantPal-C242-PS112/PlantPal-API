const { validate } = require('../validation/validation');
const validation = require('../validation/comment-validation');
const prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const getComments = async (discussion_id) => {
  const comments = await prisma.comment.findMany({
    where: {
      discussion_id: parseInt(discussion_id),
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
}

module.exports = {
  getComments,
};