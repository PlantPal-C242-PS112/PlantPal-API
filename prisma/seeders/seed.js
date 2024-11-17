const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const seedUsers = require('./user-seeder');
const { seedPlants, seedPlantMedia } = require('./plant__plant_media-seeder');
const { seedPlantDisease, seedDiseaseMedia } = require('./plant_disease__disease_media-seeder');

async function main() {
  await seedUsers();
  await seedPlants();
  await seedPlantMedia();
  await seedPlantDisease();
  await seedDiseaseMedia();
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