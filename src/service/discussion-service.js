const { validate } = require('../validation/validation');
const validation = require('../validation/discussion-validation');
const prisma = require('../application/database');
const storage = require('../application/storage');
const { ResponseError } = require('../error/response-error');

const getDiscussions = async (request) => {
  const { page, limit, keywords, plant_id } = validate(validation.getDiscussionsValidation, request.query);

  const discussions = await prisma.discussion.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      title: {
        contains: keywords,
      },
      plant_id: plant_id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      media_url: true,
      total_likes: true,
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
        }
      },
      plant: {
        select: {
          id: true,
          name: true,
        }
      },
      updated_at: true,
    }
  });

  const total_discussions = await prisma.discussion.count({
    where: {
      title: {
        contains: keywords,
      },
      plant_id: plant_id,
    }
  });

  const metadata = {
    total_data: total_discussions,
    total_page: Math.ceil(total_discussions / limit),
    current_page: page,
    first_page: 1,
    last_page: Math.ceil(total_discussions / limit),
  };

  return {
    discussions,
    metadata,
  };
}

module.exports = {
  getDiscussions,
};