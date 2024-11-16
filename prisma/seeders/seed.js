const seedUsers = require('./user-seeder');
const { seedPlants, seedPlantMedia } = require('./plant-seeder');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await seedUsers();
  await seedPlants();
  await seedPlantMedia();
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