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

const seedMedicineLinks = async () => {
	const medicineLinks = [
		{
			id: 1,
			medicine_id: 1,
			name: 'Copper Hydroxide COPCIDE 77WP 100gr',
			url: 'https://www.tokopedia.com/netafarm/pestisida-fungisida-copper-hydroxide-copcide-77wp-100gr',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			medicine_id: 1,
			name: 'Dhanucop (Copper Oxychloride 50% WP)',
			url: 'https://www.dhanuka.com/fungicide/dhanucop',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			medicine_id: 2,
			name: 'Fungisida PROTECT Mancozeb 15% + Khlorotalonil 10% + Mgn Silika 60%',
			url: 'https://www.tokopedia.com/abdaustore/fungisida-protect-mancozeb-15-khlorotalonil-10-mgn-silika-60',
			created_at: new Date(),
			updated_at: new Date()
		}
	];

	medicineLinks.forEach(async (medicineLink) => {
		await prisma.medicineLink.upsert({
			where: { id: medicineLink.id },
			update: {},
			create: medicineLink,
		});
		console.log(`Medicine Link '${medicineLink.name}' seeded`);
	});
};

module.exports = {
	seedMedicines,
	seedMedicineLinks
};