const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const seedUsers = require('./user-seeder');
const { seedPlants, seedPlantMedia } = require('./plant__plant_media-seeder');
const { seedPlantDiseases, seedDiseaseMedia } = require('./plant_disease__disease_media-seeder');
const { seedMedicines, seedMedicineLinks } = require('./medicine__medicine_link-seeder');

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function main() {
  await seedUsers();
  await seedPlants();
  await delay(1000);
  await seedPlantMedia();
  await seedPlantDiseases();
  await delay(1000);
  await seedDiseaseMedia();
  await seedMedicines();
  await delay(1000);
  await seedMedicineLinks();
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