const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedMedicineLinks = async () => {
	const medicineLinks = [
		{
			medicine_id: 1,
			name: 'Copper Hydroxide COPCIDE 77WP 100gr',
			url: 'https://www.tokopedia.com/netafarm/pestisida-fungisida-copper-hydroxide-copcide-77wp-100gr',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			medicine_id: 1,
			name: 'Dhanucop (Copper Oxychloride 50% WP)',
			url: 'https://www.dhanuka.com/fungicide/dhanucop',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			medicine_id: 2,
			name: 'Fungisida PROTECT Mancozeb 15% + Khlorotalonil 10% + Mgn Silika 60%',
			url: 'https://www.tokopedia.com/abdaustore/fungisida-protect-mancozeb-15-khlorotalonil-10-mgn-silika-60',
			created_at: new Date(),
			updated_at: new Date()
		}
	];

	medicineLinks.forEach(async (medicineLink) => {
		await prisma.medicineLink.create({
			data: medicineLink
		});
		console.log(`Medicine Link '${medicineLink.name}' seeded`);
	});
};

module.exports = seedMedicineLinks;