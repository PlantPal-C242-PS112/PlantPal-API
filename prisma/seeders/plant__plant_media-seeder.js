const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlants() {
	const plants = [
		{
			id: 1,
			name: 'Tomat',
			description: 'Tomat atau rangam (Solanum lycopersicum) adalah tumbuhan dari keluarga terong-terongan, tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko sampai Peru. Tomat mengandung antioksidan berupa likopen yang dapat membantu memerangi efek radikal bebas penyebab kanker. Tomat juga memiliki kandungan antioksidan lain yakni polifenol, naringenin, dan asam klorogenat. Di samping itu, ternyata buah tomat rendah kalori dan lemak, tetapi kaya akan karotenoid, lutein, gula, vitamin A, vitamin C, asam folat, dan kalium.',
			cultivation_tips: '1. Pilih bibit tomat yang sehat dan bebas dari penyakit. 2. Tanam bibit tomat di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman tomat dari gulma dan hama. 6. Jangan lupa untuk memangkas cabang-cabang yang tidak produktif. 7. Panen tomat ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			name: 'Strawberry',
			description: 'Strawberry atau juga dikenal sebagai stroberi merupakan buah yang berasal dari genus Fragaria. Buah ini termasuk dalam keluarga Rosaceae. Strawberry biasanya memiliki biji kecil yang tersebar di permukaannya. Buah ini memiliki rasa manis dengan sedikit rasa asam yang menyegarkan. Strawberry memiliki kandungan vitamin C yang tinggi, serat, dan antioksidan yang baik untuk kesehatan tubuh.',
			cultivation_tips: '1. Pilih bibit strawberry yang sehat dan bebas dari penyakit. 2. Tanam bibit strawberry di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman strawberry dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen strawberry ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			name: 'Paprika',
			description: 'Tanaman bell pepper, yang juga dikenal dengan nama paprika, adalah salah satu jenis sayuran yang populer dan banyak digunakan dalam berbagai masakan di seluruh dunia. Dengan nama ilmiah Capsicum annuum, tanaman ini tergolong dalam keluarga Solanaceae, yang juga mencakup tomat, terong, dan kentang. Paprika memiliki rasa manis dan warna yang beragam, mulai dari merah, kuning, hijau, hingga oranye.',
			cultivation_tips: '1. Pilih bibit paprika yang sehat dan bebas dari penyakit. 2. Tanam bibit paprika di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman paprika dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen paprika ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		}
	];

	plants.forEach(async (plant) => {
		await prisma.plant.upsert({
			where: { id: plant.id },
			update: {},
			create: plant,
		});
		console.log(`Plant ${plant.name} seeded`);
	});
};

async function seedPlantMedia() {
	plantMedia = {
		tomatoMedia: [
			{
				id: 1,
				plant_id: 1,
				is_cultivation: false,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/800px-Tomato_je.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 2,
				plant_id: 1,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Tomatoes-on-the-bush.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 3,
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
				id: 4,
				plant_id: 2,
				is_cultivation: false,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/800px-PerfectStrawberry.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 5,
				plant_id: 2,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1920px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 6,
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
				id: 7,
				plant_id: 3,
				is_cultivation: false,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/800px-Green-Yellow-Red-Pepper-2009.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 8,
				plant_id: 3,
				is_cultivation: true,
				type: 'image',
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cachi_02.jpg/220px-Cachi_02.jpg',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 9,
				plant_id: 3,
				is_cultivation: true,
				type: 'image',
				url: 'https://th.bing.com/th/id/OIP.MU902Zr1mnvTKBqgawVzGAHaGL?rs=1&pid=ImgDetMain',
				created_at: new Date(),
				updated_at: new Date()
			},
		]
	};

	for (const plant in plantMedia) {
		plantMedia[plant].forEach(async (media) => {
			await prisma.plantMedia.upsert({
				where: { id: media.id },
				update: {},
				create: media,
			});
		});
		console.log(`${plant} seeded`);
	}
};

module.exports = {
	seedPlants,
	seedPlantMedia
};