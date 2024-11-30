const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seedComments() {
  await prisma.comment.createMany({
    data: [
      {
        user_id: 1,
        discussion_id: 1,
        content: 'Mungkin tanaman tomat kamu terkena penyakit cendawan. Coba gunakan fungisida untuk mengatasinya.',
      },
      {
        user_id: 2,
        discussion_id: 1,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 1,
        content: 'Saya pernah mengalami hal yang sama. Fungisida memang efektif untuk mengatasi penyakit cendawan.',
      },
      {
        user_id: 2,
        discussion_id: 2,
        content: 'Bercak ungu pada tanaman strawberry bisa jadi disebabkan oleh penyakit antraknosa. Coba gunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 2,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida untuk mengatasi penyakit antraknosa.',
      },
      {
        user_id: 1,
        discussion_id: 2,
        content: 'Terima kasih atas saran yang diberikan. Saya akan mencoba menggunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 3,
        content: 'Hama pada tanaman paprika bisa jadi disebabkan oleh kutu daun. Coba gunakan insektisida untuk mengatasinya.',
      },
      {
        user_id: 2,
        discussion_id: 3,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan insektisida untuk mengatasi hama pada tanaman paprika.',
      },
      {
        user_id: 1,
        discussion_id: 3,
        content: 'Terima kasih atas saran yang diberikan. Saya akan mencoba menggunakan insektisida.',
      },
      {
        user_id: 3,
        discussion_id: 4,
        content: 'Mungkin tanaman tomat kamu terkena penyakit cendawan. Coba gunakan fungisida untuk mengatasinya.',
      },
      {
        user_id: 1,
        discussion_id: 4,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida.',
      },
      {
        user_id: 2,
        discussion_id: 4,
        content: 'Saya pernah mengalami hal yang sama. Fungisida memang efektif untuk mengatasi penyakit cendawan.',
      },
      {
        user_id: 1,
        discussion_id: 5,
        content: 'Bercak ungu pada tanaman strawberry bisa jadi disebabkan oleh penyakit antraknosa. Coba gunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 5,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida untuk mengatasi penyakit antraknosa.',
      },
      {
        user_id: 2,
        discussion_id: 5,
        content: 'Terima kasih atas saran yang diberikan. Saya akan mencoba menggunakan fungisida.',
      },
      {
        user_id: 2,
        discussion_id: 6,
        content: 'Hama pada tanaman paprika bisa jadi disebabkan oleh kutu daun. Coba gunakan insektisida untuk mengatasinya.',
      },
      {
        user_id: 1,
        discussion_id: 6,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan insektisida untuk mengatasi hama pada tanaman paprika.',
      },
      {
        user_id: 3,
        discussion_id: 6,
        content: 'Terima kasih atas saran yang diberikan. Saya akan mencoba menggunakan insektisida.',
      },
      {
        user_id: 1,
        discussion_id: 7,
        content: 'Mungkin tanaman tomat kamu terkena penyakit cendawan. Coba gunakan fungisida untuk mengatasinya.',
      },
      {
        user_id: 2,
        discussion_id: 7,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 7,
        content: 'Saya pernah mengalami hal yang sama. Fungisida memang efektif untuk mengatasi penyakit cendawan.',
      },
      {
        user_id: 2,
        discussion_id: 8,
        content: 'Bercak ungu pada tanaman strawberry bisa jadi disebabkan oleh penyakit antraknosa. Coba gunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 8,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan fungisida untuk mengatasi penyakit antraknosa.',
      },
      {
        user_id: 1,
        discussion_id: 8,
        content: 'Terima kasih atas saran yang diberikan. Saya akan mencoba menggunakan fungisida.',
      },
      {
        user_id: 3,
        discussion_id: 9,
        content: 'Hama pada tanaman paprika bisa jadi disebabkan oleh kutu daun. Coba gunakan insektisida untuk mengatasinya.',
      },
      {
        user_id: 2,
        discussion_id: 9,
        content: 'Saya setuju dengan pendapat sebelumnya. Coba gunakan insektisida untuk mengatasi hama pada tanaman paprika.',
      },
    ],
  });

  console.log('Comments seeded');
}

module.exports = seedComments;