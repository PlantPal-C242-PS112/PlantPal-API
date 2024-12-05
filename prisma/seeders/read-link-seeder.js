const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedReadLinks = async () => {
	const readLinks = [
		{
			plant_id: 1,
			title: 'Tomat - Wikipedia bahasa Indonesia, ensiklopedia bebas',
			url: 'https://id.wikipedia.org/wiki/Tomat'
		},
		{
			plant_id: 1,
			title: 'Cara Budidaya Tomat yang Baik dan Benar - Petani Bertani',
			url: 'https://petanibertani.com/cara-budidaya-tomat-yang-baik-dan-benar/'
		},
		{
			plant_id: 1,
			title: '3 Penyakit Tanaman Tomat Serta Cara Mengendalikannya - DGW Fertilizer',
			url: 'https://www.dgwfertilizer.co.id/3-penyakit-tanaman-tomat-serta-cara-mengendalikannya/'
		},
		{
			plant_id: 1,
			title: 'Informasi Tentang Mengontrol Septoria Leaf Spot pada Tomat',
			url: 'https://id.haenselblatt.com/septoria-leaf-canker-information-controlling-septoria-leaf-spot-tomatoes'
		},
		{
			plant_id: 1,
			title: 'Managing Tomato Mosaic Virus - Gardening Know How',
			url: 'https://www.gardeningknowhow.com/edible/vegetables/tomato/managing-tomato-mosaic-virus.htm'
		},
		{
			plant_id: 2,
			title: 'Strawberry - Wikipedia bahasa Indonesia, ensiklopedia bebas',
			url: 'https://id.wikipedia.org/wiki/Strawberry'
		},
		{
			plant_id: 2,
			title: 'Cara Menanam Buah Strawberry - Cara Budidaya',
			url: 'https://carabudidaya.co.id/cara-menanam-buah-strawberry/'
		},
		{
			plant_id: 3,
			title: 'Paprika - Wikipedia bahasa Indonesia, ensiklopedia bebas',
			url: 'https://id.wikipedia.org/wiki/Paprika'
		},
		{
			plant_id: 3,
			title: 'Mengenal Lebih Dekat Tanaman Bell Pepper (Capsicum annuum), Si Paprika Beraneka Warna',
			url: 'https://padrirestaurant.net/mengenal-lebih-dekat-tanaman-bell-pepper-capsicum-annuum-si-paprika-beraneka-warna/'
		},
		{
			plant_id: 3,
			title: 'Cara Menanam dan Merawat Bell Pepper - PictureThis',
			url: 'https://www.picturethisai.com/id/care/Bell_pepper.html'
		},
		{
			plant_id: 3,
			title: 'Beginner’s Guide on How to Grow a Bell Pepper Plant',
			url: 'https://blog.backtotheroots.com/2021/03/30/bell-pepper-plant/'
		}
	];

	await prisma.readLink.createMany({
		data: readLinks
	});

	console.log('Read Links Seeded Successfully');
};

module.exports = seedReadLinks;