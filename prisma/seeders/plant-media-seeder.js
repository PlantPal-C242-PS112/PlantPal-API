const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantMedia() {
	const plantMedia = {
		tomatoMedia: [
			{
				plant_id: 1,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Tomato.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 1,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Tomatoes-on-the-bush.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 1,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tomat_Muda_Solanum_lycopersicum.jpg/1280px-Tomat_Muda_Solanum_lycopersicum.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
		],
		strawberryMedia: [
			{
				plant_id: 2,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Strawberry.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 2,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1920px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 2,
				is_cultivation: true,
				type: 'image',
				url: 'https://th.bing.com/th/id/OIP.hxAJlQzr1PuSmw9s6NI9QAHaE8?w=281&h=188&c=7&r=0&o=5&pid=1.7',
				created_at: new Date(),
				updated_at: new Date()
			},
		],
		paprikaMedia: [
			{
				plant_id: 3,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Bell%20Pepper.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 3,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cachi_02.jpg/220px-Cachi_02.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				plant_id: 3,
				is_cultivation: true,
				type: 'image',
				url: 'https://th.bing.com/th/id/OIP.MU902Zr1mnvTKBqgawVzGAHaGL?rs=1&pid=ImgDetMain',
				created_at: new Date(),
				updated_at: new Date()
			},
		],
		squashMedia: [
			{
				plant_id: 4,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Squash.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		grapeMedia: [
			{
				plant_id: 5,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Grape.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		appleMedia: [
			{
				plant_id: 6,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Apple.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		orangeMedia: [
			{
				plant_id: 7,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Orange.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		potatoMedia: [
			{
				plant_id: 8,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Potato.png',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		cornMedia: [
			{
				plant_id: 9,
				is_cultivation: false,
				type: 'image',
				url: 'https://storage.googleapis.com/plantpal-assets/plants/plant_media/Corn.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		mangoMedia: [
			{
				plant_id: 10,
				is_cultivation: false,
				type: 'image',
				url: 'https://gkmdblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/12/16193752/Blog-Mangga-Indonsia.jpeg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		cassavaMedia: [
			{
				plant_id: 11,
				is_cultivation: false,
				type: 'image',
				url: 'https://blog.lambangjaya.com/wp-content/uploads/2024/08/pngtree-cassava-garden-background-field-grow-photo-picture-image_5400130-1024x683.png',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
		riceMedia: [
			{
				plant_id: 12,
				is_cultivation: false,
				type: 'image',
				url: 'https://ketahananpangan.semarangkota.go.id/v3/content/images/Padi.jpg',
				created_at: new Date(),
				updated_at: new Date()
			}
		],
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