const { validate } = require('../validation/validation');
const validation = require('../validation/discussion-validation');
const prisma = require('../application/database');
const storage = require('../application/storage');
const { ResponseError } = require('../error/response-error');

const getDiscussions = async (request) => {
  const { page, limit, keywords, plant_id } = validate(validation.getDiscussionsValidation, request.query);

  let discussions = await prisma.discussion.findMany({
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
          profile_photo: true,
        }
      },
      plant: {
        select: {
          id: true,
          name: true,
        }
      },
      created_at: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  const likedDiscussions = await prisma.like.findMany({
    where: {
      user_id: request.user.id,
    },
    select: {
      discussion_id: true,
    }
  });

  discussions = discussions.map((discussion) => {
    discussion.is_liked = likedDiscussions.some((likedDiscussion) => likedDiscussion.discussion_id === discussion.id);
    const { created_at, ...rest } = discussion;
    return { ...rest, created_at };
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
};

const getDiscussionById = async (id, userId) => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      id: parseInt(id),
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
          profile_photo: true,
        }
      },
      plant: {
        select: {
          id: true,
          name: true,
        }
      },
      created_at: true,
    },
  });

  if (!discussion) {
    throw new ResponseError(404, 'Discussion Not Found');
  };

  const likedDiscussion = await prisma.like.findFirst({
    where: {
      user_id: userId,
      discussion_id: discussion.id,
    },
  });

  const { created_at, ...rest } = discussion;
  const discussion_is_liked = likedDiscussion ? true : false;
  const orderedDiscussion = { ...rest, is_liked: discussion_is_liked, created_at };

  return orderedDiscussion;
};

const createDiscussion = async (discussionData, file, userId) => {
  const { title, content, plant_id } = validate(validation.createDiscussionValidation, discussionData);

  let mediaUrl;
  if (file) {
    mediaUrl = await storage.uploadFile(file, "discussions");
  } else {
    throw new ResponseError(400, 'Media File is Required');
  };

  const discussion = await prisma.discussion.create({
    data: {
      title,
      content,
      plant_id,
      user_id: userId,
      media_url: mediaUrl,
    },
    include: {
      user: {
        select: {
          id: true,
          fullname: true,
          username: true,
          profile_photo: true,
        },
      },
      plant: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const { created_at, updated_at, ...rest } = discussion;
  const orderedDiscussion = { ...rest, created_at, updated_at };

  return orderedDiscussion;
};

const updateDiscussion = async (discussionId, discussionData, file, userId) => {
  const { title, content, plant_id } = validate(validation.createDiscussionValidation, discussionData);

  const discussion = await prisma.discussion.findUnique({
    where: {
      id: parseInt(discussionId),
    },
    select: {
      id: true,
      user_id: true,
      media_url: true,
    }
  });

  if (!discussion) {
    throw new ResponseError(404, 'Discussion Not Found');
  };

  if (discussion.user_id !== userId) {
    throw new ResponseError(403, 'Forbidden');
  };

  let mediaUrl;
  if (file) {
    await storage.deleteFile(discussion.media_url);
    mediaUrl = await storage.uploadFile(file, "discussions");
  } else {
    mediaUrl = discussion.media_url;
  };

  const updatedDiscussion = await prisma.discussion.update({
    where: {
      id: parseInt(discussionId),
    },
    data: {
      title,
      content,
      plant_id,
      media_url: mediaUrl,
    },
    include: {
      user: {
        select: {
          id: true,
          fullname: true,
          username: true,
          profile_photo: true,
        },
      },
      plant: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const { created_at, updated_at, ...rest } = updatedDiscussion;
  const orderedDiscussion = { ...rest, created_at, updated_at };

  return orderedDiscussion;
};

const deleteDiscussion = async (discussionId, userId) => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      id: parseInt(discussionId),
    },
    select: {
      id: true,
      user_id: true,
      media_url: true,
    }
  });

  if (!discussion) {
    throw new ResponseError(404, 'Discussion Not Found');
  };

  if (discussion.user_id !== userId) {
    throw new ResponseError(403, 'Forbidden');
  };

  await storage.deleteFile(discussion.media_url);

  await prisma.discussion.delete({
    where: {
      id: parseInt(discussionId),
    },
  });
};

module.exports = {
  getDiscussions,
  getDiscussionById,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};