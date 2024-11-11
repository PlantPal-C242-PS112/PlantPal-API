const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const prisma = new PrismaClient()

async function seedUsers() {
  const hashedPassword = await bcrypt.hash('password', 10)

  const alice = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
      fullname: 'Alice Jones',
      email: 'alice@prisma.io',
      password: hashedPassword,
      email_verified: true,
    },
  });

  const bob = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
      fullname: 'Bob Smith',
      email: 'bob@prisma.io',
      password: hashedPassword,
      email_verified: true,
    },
  });

  const charlie = await prisma.user.upsert({
    where: { username: 'charlie' },
    update: {},
    create: {
      username: 'charlie',
      fullname: 'Charlie Brown',
      email: 'charlie@prisma.io',
      password: hashedPassword,
      email_verified: false,
    },
  });

  console.log({ alice, bob, charlie })
}

module.exports = seedUsers