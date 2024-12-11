const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function seedUsers() {
  const hashedPassword = await bcrypt.hash("password", 10);

  await prisma.user.createMany({
    data: [
      {
        username: "alice",
        fullname: "Alice Jones",
        email: "alice@prisma.io",
        password: hashedPassword,
        email_verified: true,
      },
      {
        username: "bob",
        fullname: "Bob Smith",
        email: "bob@prisma.io",
        password: hashedPassword,
        email_verified: true,
      },
      {
        username: "charlie",
        fullname: "Charlie Brown",
        email: "charlie@prisma.io",
        password: hashedPassword,
        email_verified: false,
      },
    ],
  });

  console.log("Users seeded");
}

module.exports = seedUsers;
