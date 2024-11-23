const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedDiscussions() {
  await prisma.discussion.createMany({
    data: [
      {
        user_id: 1,
        plant_id: 1,
        title: 'Daun tanaman tomat saya muncul bercak',
        content: 'Tolong bantu saya, daun pada tanaman tomat saya muncul bercak. Apa yang harus saya lakukan?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-tomat.jpg',
      },
      {
        user_id: 2,
        plant_id: 2,
        title: 'Daun tanaman strawberry saya muncul bercak ungu',
        content: 'Bunga pada tanaman strawberry saya muncul bercak ungu. Penyakit apa ini? Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-strawberry.jpeg',
      },
    ],
  });

 console.log('Discussions Seeded Successfully');
}

module.exports = seedDiscussions