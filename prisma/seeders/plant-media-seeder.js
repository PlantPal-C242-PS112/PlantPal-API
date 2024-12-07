const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantMedia() {
	const cultivation_data = {
		is_cultivation: true,
		type: 'image',
		created_at: new Date(),
		updated_at: new Date()
	};
	const plant_media_data = {
		is_cultivation: false,
		type: 'image',
		created_at: new Date(),
		updated_at: new Date()
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
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Tomatoes-on-the-bush.jpg',
				...plant_media_data
			},
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
			}
		],
		squashMedia: [
			{
				plant_id: 4,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash.jpg',
				...plant_media_data
			}
		],
		grapeMedia: [
			{
				plant_id: 5,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape.jpg',
				...plant_media_data
			}
		],
		appleMedia: [
			{
				plant_id: 6,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple.jpg',
				...plant_media_data
			}
		],
		orangeMedia: [
			{
				plant_id: 7,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange.jpg',
				...plant_media_data
			},
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
			}
		],
		cornMedia: [
			{
				plant_id: 9,
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn.jpg',
				...plant_media_data
			}
		]
	};

	for (const plant in plantMedia) {
		for (const media of plantMedia[plant]) {
			await prisma.plantMedia.create({
				data: media
			});
		}
		console.log(`${plant} seeded`);
	}
};

module.exports = seedPlantMedia;