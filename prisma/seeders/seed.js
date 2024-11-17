const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const seedUsers = require('./user-seeder');
const { seedPlants, seedPlantMedia } = require('./plant__plant_media-seeder');
const { seedPlantDiseases, seedDiseaseMedia } = require('./plant_disease__disease_media-seeder');
const { seedMedicines, seedMedicineLinks } = require('./medicine__medicine_link-seeder');
const { seedUserPlants } = require('./user_plant-seeder');

async function main() {
  await seedUsers();
  await seedPlants();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedPlantMedia();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedPlantDiseases();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedDiseaseMedia();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedMedicines();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedMedicineLinks();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await seedUserPlants();
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