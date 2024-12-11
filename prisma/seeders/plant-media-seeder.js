const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantMedia() {
	const cultivation_data = {
		is_cultivation: true,
		type: 'image',
	};
	const plant_media_data = {
		is_cultivation: false,
		type: 'image',
	};

	const plantMedia = {
		tomatoMedia: [
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Tomato.jpg',
				...plant_media_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Tomato/Tanaman-tomat2.jpg',
				...plant_media_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Tomato/tomatt.png',
				...plant_media_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Tomato/tomatoo.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/Tomat_Muda_Solanum_lycopersicum.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/bibit%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/panen%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/pemupukan%20tanaman%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/penanaman%20bibit%20tomat.jpeg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/pengendalian%20hama%20dan%20penyakit.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/pengolahan%20tanah%20lahan%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/penyemaian%20pada%20tumbuhan%20tomat.png',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/penyiangan%20dan%20pembubuhan%20tanaman%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/penyiraman%20tanaman%20tomat.jpg',
				...cultivation_data
			},
			{
				plant_id: 1,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/tomato/persiapan%20lahan%20tomat.jpg',
				...cultivation_data
			},
		],
		strawberryMedia: [
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Strawberry.jpg',
				...plant_media_data
			},
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Strawberry/hanging-strawberries.jpg',
				...plant_media_data
			},
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Strawberry/strawb.jpg',
				...plant_media_data
			},
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Strawberry/stroberii.jpeg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/strawberry/media%20tanaman%20strawberry.jpg',
				...cultivation_data
			},
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/strawberry/perawatan%20tanaman%20strawberry.jpeg',
				...cultivation_data
			},
			{
				plant_id: 2,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/strawberry/tanaman%20strawberry.jpg',
				...cultivation_data
			},
		],
		paprikaMedia: [
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper.jpg',
				...plant_media_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper/Bell%20Pepper1.jpg',
				...plant_media_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper/Bell%20Pepper2.jpg',
				...plant_media_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper/Bell%20Pepper3.jpg',
				...plant_media_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper/Bell%20Pepper%204.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/bibit%20bell%20pepper.jpg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/panen%20bell%20pepper.jpg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/pembuatan%20lubang%20pada%20media%20tanam%20bell%20pepper.jpg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/penanaman%20tanaman%20bell%20pepper.jpg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/pengolahan%20media%20tanam%20bell%20pepper.jpg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/persemaian%20bibit%20bell%20pepper.jpeg',
				...cultivation_data
			},
			{
				plant_id: 3,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/bellpepper/tanaman%20bell%20pepper.jpg',
				...cultivation_data
			},
		],
		squashMedia: [
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash.jpg',
				...plant_media_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash/Squash%20plant.jpeg',
				...plant_media_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash/Yellow-Crookneck-Squash.jpg',
				...plant_media_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash/squash.jpg',
				...plant_media_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash/squashh.jpeg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/squash/Lahan%20Labu.jpg',
				...cultivation_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/squash/Menanam%20Labu.jpg',
				...cultivation_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/squash/Panen%20Labu.jpg',
				...cultivation_data
			},
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/squash/Tanaman%20Labu.jpg',
				...cultivation_data
			},
		],
		grapeMedia: [
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape.jpg',
				...plant_media_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape/Grape1.jpg',
				...plant_media_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape/Grape2.jpg',
				...plant_media_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape/Grape3.jpg',
				...plant_media_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape/Grape4.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/grape/Menanam%20Anggur.jpg',
				...cultivation_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/grape/Panen%20Anggur.jpg',
				...cultivation_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/grape/Pemangkasan-Tanaman-Anggur.jpg',
				...cultivation_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/grape/Persiapan.jpg',
				...cultivation_data
			},
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/grape/Tanaman%20Anggur.jpg',
				...cultivation_data
			},
		],
		appleMedia: [
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple.jpg',
				...plant_media_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple/Apple1.jpg',
				...plant_media_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple/Apple2.jpg',
				...plant_media_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple/Apple3.jpg',
				...plant_media_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple/Apple4.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/959_2.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/Cara-Budidaya-Tanaman-Apel_108037.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/Firefly-menanam-apel-64999.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/Tree_with_red_apples_in_Barkedal_4.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/a052f998-2638-4d48-8151-ff2f47aced45.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/depositphotos_659473554-stock-photo-woman-cuts-extra-thin-branches.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/istockphoto-1218777333-612x612.jpg',
				...cultivation_data
			},
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/apple/penyakit-busuk-buah-apel-1.jpg',
				...cultivation_data
			},
		],
		orangeMedia: [
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange.jpg',
				...plant_media_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange/Orange1.jpg',
				...plant_media_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange/Orange2.jpg',
				...plant_media_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange/Orange3.jpg',
				...plant_media_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange/Orange4.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/orange/Bibit%20Jeruk.jpg',
				...cultivation_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/orange/Jeruk.jpg',
				...cultivation_data
			},
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/orange/Menyiram%20Jeruk.jpg',
				...cultivation_data
			}
		],
		potatoMedia: [
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato.png',
				...plant_media_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato/Potato1.jpg',
				...plant_media_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato/Potato2.jpg',
				...plant_media_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato/Potato3.jpg',
				...plant_media_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato/Potato4.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/potato/19678543973kentang-BJ21.jpg',
				...cultivation_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/potato/63a532f5d36a0.jpg',
				...cultivation_data
			},
			{
				plant_id: 8,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/potato/ilustrasi-menanam-kentang-istock_ratio-16x9.jpg',
				...cultivation_data
			},
		],
		cornMedia: [
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn.jpg',
				...plant_media_data
			},
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn/Corn1.jpg',
				...plant_media_data
			},
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn/Corn2.jpg',
				...plant_media_data
			},
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn/Corn3.jpg',
				...plant_media_data
			},
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn/Corn4.jpg',
				...plant_media_data
			},
			// Cultivation
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/corn/5230_20200819195612.jpg',
				...cultivation_data
			},
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_cultivation/corn/Corn_Zea_mays_Plant_Row_2000px.jpg',
				...cultivation_data
			},
		]
	};

	for (const plant in plantMedia) {
		for (const media of plantMedia[plant]) {
			await prisma.plantMedia.create({
				data: media
			});
		}
		console.log(`${plant} media seeded`);
	}
};

module.exports = seedPlantMedia;