const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const seedUsers = require('./user-seeder');
const { seedPlants, seedPlantMedia } = require('./plant--plant-media-seeder');
const { seedReadLinks } = require('./read-link-seeder');
const { seedPlantDiseases, seedDiseaseMedia } = require('./plant-disease--disease-media-seeder');
const { seedMedicines, seedMedicineLinks } = require('./medicine--medicine-link-seeder');
const { seedUserPlants } = require('./user-plant-seeder');
const seedDiscussions = require('./discussion-seeder');
const seedComments = require('./comment-seeder');
const seedLikes = require('./like-seeder');

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
  await seedReadLinks();
  await delay(1000);
  await seedDiseaseMedia();
  await seedMedicines();
  await delay(1000);
  await seedMedicineLinks();
  await seedUserPlants();
  await seedDiscussions();
  await delay(1000);
  await seedComments();
  await seedLikes();
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });