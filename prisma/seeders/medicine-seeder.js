const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedMedicines = async () => {
	const medicines = [
		{
			id: 1,
			disease_id: 1, // Tomato Bacterial Spot
			name: 'Pestisida Copper Hydroxide 50% WP atau Copper Oxychloride 50% WP',
			description: 'Pestisida ini berfungsi untuk mengendalikan penyakit bakteri pada tanaman tomat.',
			usage_tips: '- Takaran: Ikuti petunjuk pada kemasan produk, biasanya sekitar 20-30 gram per liter air. - Frekuensi penyemprotan: Lakukan penyemprotan setiap 7-14 hari sekali, tergantung pada kondisi cuaca dan tingkat infeksi. Jika hujan sering turun, penyemprotan perlu lebih sering dilakukan. - Waktu penyemprotan: Lakukan pada pagi atau sore hari, ketika kelembaban tinggi tetapi suhu tidak terlalu panas.',
			image: 'https://3.imimg.com/data3/OL/BO/MY-5735962/5-1000x1000.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			disease_id: 2, // Tomato Early Blight
			name: 'Fungisida Chlorothalonil atau Mancozeb',
			description: 'Fungisida ini berfungsi untuk mengendalikan penyakit jamur pada tanaman tomat.',
			usage_tips: '- Campurkan fungisida sesuai dengan dosis yang tertera pada kemasan (biasanya antara 2-3 gram per liter air). - Semprotkan secara merata pada daun, batang, dan area sekitar pangkal tanaman. Fokuskan pada daun yang menunjukkan gejala awal. - Lakukan penyemprotan secara berkala, setiap 7-10 hari sekali selama cuaca lembab atau pada musim hujan, karena jamur ini cenderung tumbuh pada kondisi basah.',
			image: 'https://th.bing.com/th/id/OIP.L-J1-kp2VgYrYbE6Yep25gHaHa?rs=1&pid=ImgDetMain',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			disease_id: 3, // Tomato Late Blight
			name: 'Fungisida Tembaga atau Fosetil-Aluminium',
			description: 'Fungisida ini berfungsi untuk mengendalikan penyakit jamur pada tanaman tomat. Contoh produk: Dithane M-45 (Mancozeb), Kocide 3000, Copper Oxychloride, Metalaxyl-M dan Mancozeb',
			usage_tips: '- Semprotkan pada daun dan batang tanaman, terutama pada bagian yang sudah terinfeksi. Ikuti dosis yang tertera pada kemasan (biasanya sekitar 3-4 gram per liter air). - Lakukan penyemprotan setiap 7-10 hari sekali, atau lebih sering jika cuaca sangat lembab. - Pastikan untuk membuang daun yang sudah terinfeksi dan menjaga kebersihan area sekitar tanaman.',
			image: 'https://th.bing.com/th/id/OIP.QyiphqPJkKrxkzDuoHvmRgHaHa?rs=1&pid=ImgDetMain',
			created_at: new Date(),
			updated_at: new Date()
		}
	];

	medicines.forEach(async (medicine) => {
		await prisma.medicine.upsert({
			where: { id: medicine.id },
			update: {},
			create: medicine,
		});
		console.log(`Medicine '${medicine.name}' seeded`);
	});
};

module.exports = seedMedicines;