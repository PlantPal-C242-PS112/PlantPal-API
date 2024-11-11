const seedUsers = require('./user-seeder')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await seedUsers()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})