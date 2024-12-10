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
			plant_id: 1,
			title: 'Pacific Pests, Pathogens, Weeds & Pesticides',
			url: 'https://apps.lucidcentral.org/pppw_v12/text/web_full/entities/index.htm'
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
			title: `Beginner's Guide on How to Grow a Bell Pepper Plant`,
			url: 'https://blog.backtotheroots.com/2021/03/30/bell-pepper-plant/'
		},

		{
			plant_id: 4,
			title: `Labu - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Labu'
		},
		{
			plant_id: 4,
			title: `Cucurbita - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Cucurbita'
		},
		{
			plant_id: 4,
			title: `Cara Menanam Labu - wikiHow`,
			url: 'https://id.wikihow.com/Menanam-Labu'
		},
		
		{
			plant_id: 5,
			title: `Anggur - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Anggur'
		},
		{
			plant_id: 5,
			title: `Syarat dan Persiapan Lahan untuk Pertanian Anggur - WikiFarmer`,
			url: 'https://wikifarmer.com/id/syarat-dan-persiapan-lahan-untuk-pertanian-anggur/'
		},
		{
			plant_id: 5,
			title: `Cara Budidaya Anggur: Mudah dan Bisa Menjadi Sumber Penghasilan - Gramedia`,
			url: 'https://www.gramedia.com/best-seller/budidaya-anggur/'
		},
		{
			plant_id: 5,
			title: `Ini Cara Budidaya Anggur di Wilayah Panas - Pangan News`,
			url: 'https://pangannews.id/berita/1681616288/ini-cara-budidaya-anggur-di-wilayah-panas'
		},
		{
			plant_id: 5,
			title: `Langkah Mudah Menanam Anggur di Pekarangan - FPP UMKO`,
			url: 'https://fpp.umko.ac.id/2021/06/28/langkah-mudah-menanam-anggur-di-pekarangan/'
		},

		{
			plant_id: 6,
			title: `Apel - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Apel'
		},
		{
			plant_id: 6,
			title: `Budidaya Apel - Tanam.co.id`,
			url: 'https://www.tanam.co.id/budidaya-apel/'
		},

		{
			plant_id: 7,
			title: `Jeruk - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Jeruk'
		},
		{
			plant_id: 7,
			title: `Teknik Budidaya Jeruk - Stockist Nasa`,
			url: 'https://stockistnasa.com/teknik-budidaya-jeruk/'
		},

		{
			plant_id: 8,
			title: `Kentang - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Kentang'
		},
		{
			plant_id: 8,
			title: `Budi Daya Tanaman Kentang - Distan Buleleng`,
			url: 'https://distan.bulelengkab.go.id/informasi/detail/artikel/budi-daya-tanaman-kentang-34'
		},

		{
			plant_id: 9,
			title: `Jagung - Wikipedia bahasa Indonesia, ensiklopedia bebas`,
			url: 'https://id.wikipedia.org/wiki/Jagung'
		},
		{
			plant_id: 9,
			title: `Cara Menanam Jagung - Gramedia`,
			url: 'https://www.gramedia.com/best-seller/cara-menanam-jagung/'
		},
		{
			plant_id: 9,
			title: `Gray leaf spot on corn | UMN Extension`,
			url: 'https://extension.umn.edu/corn-pest-management/gray-leaf-spot-corn'
		},
		{
			plant_id: 9,
			title: `Corn Plant | Britannica`,
			url: 'https://www.britannica.com/plant/corn-plant'
		},
	];

	await prisma.readLink.createMany({
		data: readLinks
	});

	console.log('Read Links Seeded Successfully');
};

module.exports = seedReadLinks;