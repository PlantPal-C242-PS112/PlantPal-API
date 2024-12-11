const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedDiscussions() {
  await prisma.discussion.createMany({
    data: [
      {
        user_id: 1,
        plant_id: 1,
        title: '1 Daun tanaman tomat saya muncul bercak',
        content: 'Tolong bantu saya, daun pada tanaman tomat saya muncul bercak. Apa yang harus saya lakukan?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-tomat.jpg',
        total_likes: 3,
      },
      {
        user_id: 2,
        plant_id: 2,
        title: '1 Daun tanaman strawberry saya muncul bercak ungu',
        content: 'Bunga pada tanaman strawberry saya muncul bercak ungu. Penyakit apa ini? Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-strawberry.jpeg',
        total_likes: 3,
      },
      {
        user_id: 3,
        plant_id: 3,
        title: '1 Hama pada tanaman paprika',
        content: 'Tanaman paprika saya diserang hama. Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-paprika.jpg',
        total_likes: 3,
      },
      {
        user_id: 2,
        plant_id: 1,
        title: '2 Daun tanaman tomat saya muncul bercak',
        content: 'Tolong bantu saya, daun pada tanaman tomat saya muncul bercak. Apa yang harus saya lakukan?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-tomat.jpg',
        total_likes: 3,
      },
      {
        user_id: 3,
        plant_id: 2,
        title: '2 Daun tanaman strawberry saya muncul bercak ungu',
        content: 'Bunga pada tanaman strawberry saya muncul bercak ungu. Penyakit apa ini? Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-strawberry.jpeg',
        total_likes: 3,
      },
      {
        user_id: 1,
        plant_id: 3,
        title: '2 Hama pada tanaman paprika',
        content: 'Tanaman paprika saya diserang hama. Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-paprika.jpg',
        total_likes: 3,
      },
      {
        user_id: 3,
        plant_id: 1,
        title: '3 Daun tanaman tomat saya muncul bercak',
        content: 'Tolong bantu saya, daun pada tanaman tomat saya muncul bercak. Apa yang harus saya lakukan?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-tomat.jpg',
        total_likes: 3,
      },
      {
        user_id: 1,
        plant_id: 2,
        title: '3 Daun tanaman strawberry saya muncul bercak ungu',
        content: 'Bunga pada tanaman strawberry saya muncul bercak ungu. Penyakit apa ini? Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-strawberry.jpeg',
        total_likes: 3,
      },
      {
        user_id: 2,
        plant_id: 3,
        title: '3 Hama pada tanaman paprika',
        content: 'Tanaman paprika saya diserang hama. Apa yang harus saya lakukan untuk mengatasinya?',
        media_url: 'https://storage.googleapis.com/plantpal-assets/discussions/penyakit-paprika.jpg',
        total_likes: 3,
      },
    ],
  });

  console.log('Discussions seeded');
}

module.exports = seedDiscussions;