const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlants() {
	const tomato = await prisma.plant.upsert({
		where: { id: 1 },
		update: {},
		create: {
			name: 'Tomat',
			description: 'Tomat atau rangam (Solanum lycopersicum) adalah tumbuhan dari keluarga terong-terongan, tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko sampai Peru. Tomat mengandung antioksidan berupa likopen yang dapat membantu memerangi efek radikal bebas penyebab kanker. Tomat juga memiliki kandungan antioksidan lain yakni polifenol, naringenin, dan asam klorogenat. Di samping itu, ternyata buah tomat rendah kalori dan lemak, tetapi kaya akan karotenoid, lutein, gula, vitamin A, vitamin C, asam folat, dan kalium.',
			cultivation_tips: '1. Pilih bibit tomat yang sehat dan bebas dari penyakit. 2. Tanam bibit tomat di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman tomat dari gulma dan hama. 6. Jangan lupa untuk memangkas cabang-cabang yang tidak produktif. 7. Panen tomat ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	const strawberry = await prisma.plant.upsert({
		where: { id: 2 },
		update: {},
		create: {
			name: 'Strawberry',
			description: 'Strawberry atau juga dikenal sebagai stroberi merupakan buah yang berasal dari genus Fragaria. Buah ini termasuk dalam keluarga Rosaceae. Strawberry biasanya memiliki biji kecil yang tersebar di permukaannya. Buah ini memiliki rasa manis dengan sedikit rasa asam yang menyegarkan. Strawberry memiliki kandungan vitamin C yang tinggi, serat, dan antioksidan yang baik untuk kesehatan tubuh.',
			cultivation_tips: '1. Pilih bibit strawberry yang sehat dan bebas dari penyakit. 2. Tanam bibit strawberry di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman strawberry dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen strawberry ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	const paprika = await prisma.plant.upsert({
		where: { id: 3 },
		update: {},
		create: {
			name: 'Paprika',
			description: 'Tanaman bell pepper, yang juga dikenal dengan nama paprika, adalah salah satu jenis sayuran yang populer dan banyak digunakan dalam berbagai masakan di seluruh dunia. Dengan nama ilmiah Capsicum annuum, tanaman ini tergolong dalam keluarga Solanaceae, yang juga mencakup tomat, terong, dan kentang. Paprika memiliki rasa manis dan warna yang beragam, mulai dari merah, kuning, hijau, hingga oranye.',
			cultivation_tips: '1. Pilih bibit paprika yang sehat dan bebas dari penyakit. 2. Tanam bibit paprika di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman paprika dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen paprika ketika buah sudah matang sempurna.',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	console.log({ tomato, strawberry, paprika });
}

async function seedPlantMedia() {
	const tomatoMedia = await prisma.plantMedia.upsert({
		where: { id: 1 },
		update: {},
		create: {
			plant_id: 1,
			type: 'image',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/800px-PerfectStrawberry.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	const strawberryMedia = await prisma.plantMedia.upsert({
		where: { id: 2 },
		update: {},
		create: {
			plant_id: 2,
			type: 'image',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/800px-PerfectStrawberry.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	const paprikaMedia = await prisma.plantMedia.upsert({
		where: { id: 3 },
		update: {},
		create: {
			plant_id: 3,
			type: 'image',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/800px-Green-Yellow-Red-Pepper-2009.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
	});

	console.log({ tomatoMedia, strawberryMedia, paprikaMedia });
}

module.exports = { seedPlants, seedPlantMedia };