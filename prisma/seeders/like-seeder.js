const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedLikes() {
  await prisma.like.createMany({
    data: [
      {
        user_id: 1,
        discussion_id: 1,
      },
      {
        user_id: 2,
        discussion_id: 1,
      },
      {
        user_id: 3,
        discussion_id: 1,
      },
      {
        user_id: 2,
        discussion_id: 2,
      },
      {
        user_id: 3,
        discussion_id: 2,
      },
      {
        user_id: 1,
        discussion_id: 2,
      },
      {
        user_id: 3,
        discussion_id: 3,
      },
      {
        user_id: 2,
        discussion_id: 3,
      },
      {
        user_id: 1,
        discussion_id: 3,
      },
      {
        user_id: 3,
        discussion_id: 4,
      },
      {
        user_id: 1,
        discussion_id: 4,
      },
      {
        user_id: 2,
        discussion_id: 4,
      },
      {
        user_id: 3,
        discussion_id: 5,
      },
      {
        user_id: 1,
        discussion_id: 5,
      },
      {
        user_id: 2,
        discussion_id: 5,
      },
      {
        user_id: 1,
        discussion_id: 6,
      },
      {
        user_id: 3,
        discussion_id: 6,
      },
      {
        user_id: 2,
        discussion_id: 6,
      },
      {
        user_id: 2,
        discussion_id: 7,
      },
      {
        user_id: 3,
        discussion_id: 7,
      },
      {
        user_id: 1,
        discussion_id: 7,
      },
      {
        user_id: 1,
        discussion_id: 8,
      },
      {
        user_id: 2,
        discussion_id: 8,
      },
      {
        user_id: 3,
        discussion_id: 8,
      },
      {
        user_id: 3,
        discussion_id: 9,
      },
      {
        user_id: 1,
        discussion_id: 9,
      },
      {
        user_id: 2,
        discussion_id: 9,
      }
    ],
  });

  console.log('Likes seeded');
};

module.exports = seedLikes;