const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlants() {
	const plants = [
		{
			id: 1,
			name: 'Tomat',
			description: 'Tomat atau rangam (Solanum lycopersicum) adalah tumbuhan dari keluarga terong-terongan, tumbuhan asli Amerika Tengah dan Selatan, dari Meksiko sampai Peru. Tomat mengandung antioksidan berupa likopen yang dapat membantu memerangi efek radikal bebas penyebab kanker. Tomat juga memiliki kandungan antioksidan lain yakni polifenol, naringenin, dan asam klorogenat. Di samping itu, ternyata buah tomat rendah kalori dan lemak, tetapi kaya akan karotenoid, lutein, gula, vitamin A, vitamin C, asam folat, dan kalium.',
			cultivation_tips: '1. Pilih bibit tomat yang sehat dan bebas dari penyakit. 2. Tanam bibit tomat di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman tomat dari gulma dan hama. 6. Jangan lupa untuk memangkas cabang-cabang yang tidak produktif. 7. Panen tomat ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/tomato-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			name: 'Strawberry',
			description: 'Strawberry atau juga dikenal sebagai stroberi merupakan buah yang berasal dari genus Fragaria. Buah ini termasuk dalam keluarga Rosaceae. Strawberry biasanya memiliki biji kecil yang tersebar di permukaannya. Buah ini memiliki rasa manis dengan sedikit rasa asam yang menyegarkan. Strawberry memiliki kandungan vitamin C yang tinggi, serat, dan antioksidan yang baik untuk kesehatan tubuh.',
			cultivation_tips: '1. Pilih bibit strawberry yang sehat dan bebas dari penyakit. 2. Tanam bibit strawberry di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman strawberry dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen strawberry ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/strawberry-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			name: 'Paprika',
			description: 'Tanaman bell pepper, yang juga dikenal dengan nama paprika, adalah salah satu jenis sayuran yang populer dan banyak digunakan dalam berbagai masakan di seluruh dunia. Dengan nama ilmiah Capsicum annuum, tanaman ini tergolong dalam keluarga Solanaceae, yang juga mencakup tomat, terong, dan kentang. Paprika memiliki rasa manis dan warna yang beragam, mulai dari merah, kuning, hijau, hingga oranye.',
			cultivation_tips: '1. Pilih bibit paprika yang sehat dan bebas dari penyakit. 2. Tanam bibit paprika di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman paprika dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen paprika ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/pepper-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 4,
			name: 'Labu',
			description: 'Labu adalah jenis tanaman berbuah dan buahnya yang merujuk pada anggota famili Cucurbitaceae. Cucurbita (bahasa Latin yang berarti "labu"), (dalam bahasa Inggris: "squash"), adalah genus dari tumbuhan merambat terna dalam famili labu, Cucurbitaceae, terkadang juga disebut cucurbit, berasal dari Andes dan Mesoamerika. Buah dari genus Cucurbita adalah sumber nutrisi, seperti vitamin A dan vitamin C, dan nutrisi lain sesuai spesiesnya. Selain itu, buah ini juga memiliki banyak kegunaan di bidang kuliner seperti dibuat menjadi pai labu, biskuit, roti, makanan penutup, puding, minuman, dan sup.',
			cultivation_tips: '1. Pilih bibit labu yang sehat dan bebas dari penyakit. 2. Tanam bibit labu di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman labu dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen labu ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/pumpkin-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 5,
			name: 'Anggur',
			description: 'Anggur merupakan jenis tanaman yang bisa tumbuh pada daerah Asia Barat dengan iklim sub tropis. Di Indonesia, anggur mulai menyebar pada abad ke-19. Anggur masuk dalam keluarga Vitaceae (tanaman berupa perdu merambat) dengan nama latin Vitis vinifera.Buah anggur memiliki beragam warna, mulai dari putih, merah, ungu, hingga hitam. Setiap jenis anggur memiliki rasa yang berbeda-beda, tergantung pada kandungan gula dan asam yang terdapat di dalamnya. Anggur kaya sumber vitamin A serta mengandung antioksidan tinggi yang berguna untuk menangkal kerusakan sel akibat radikal bebas.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/grape-100.png',
			cultivation_tips: '1. Pilih bibit anggur yang sehat dan bebas dari penyakit. 2. Tanam bibit anggur di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman anggur dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen anggur ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/grape-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 6,
			name: 'Apel',
			description: 'Nama ilmiah pohon apel dalam bahasa Latin ialah Malus domestica. Apel budi daya adalah keturunan dari Malus sieversii asal Asia Tengah, dengan sebagian genom dari Malus sylvestris (apel hutan/apel liar). Apel bisa mengurangi risiko kanker usus besar, kanker prostat, dan kanker paru-paru. Dibandingkan dengan buah lainnya dan sayuran, apel mengandung vitamin C yang tidak seberapa, tetapi kaya dengan senyawa antioksidan lainnya.',
			cultivation_tips: '1. Pilih bibit apel yang sehat dan bebas dari penyakit. 2. Tanam bibit apel di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman apel dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen apel ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/apple-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 7,
			name: 'Jeruk',
			description: 'Jeruk adalah buah yang berasal dari keluarga Rutaceae dan termasuk dalam genus Citrus. Jeruk biasanya berwarna oranye, tetapi ada juga yang berwarna kuning, hijau, atau merah. Buah ini mengandung banyak vitamin C, serat, dan antioksidan yang dapat membantu meningkatkan sistem kekebalan tubuh, menjaga kesehatan jantung, dan mencegah penyakit kronis seperti kanker dan diabetes. Jeruk juga dapat membantu meningkatkan pencernaan dan menjaga kesehatan kulit.',
			cultivation_tips: '1. Pilih bibit jeruk yang sehat dan bebas dari penyakit. 2. Tanam bibit jeruk di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman jeruk dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen jeruk ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/orange-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 8,
			name: 'Mangga',
			description: 'Mangga( Mangifera indica) atau mempelam adalah nama sejenis buah dan sekaligus nama pohon yang termasuk ke dalam marga Mangifera dan suku Anacardiaceae yang memiliki sekitar 35-40 anggota. Tanaman dan buah mangga Berasal dari sekitar perbatasan India dengan Burma. Pohon mangga termasuk tumbuhan tingkat tinggi yang struktur batangnya (habitus) termasuk kelompok arboreus, yaitu tumbuhan berkayu yang mempunyai tinggi batang lebih dari 5 m. Mangga bisa mencapai tinggi 10-40 m.',
			cultivation_tips: '1. Pilih bibit mangga yang sehat dan bebas dari penyakit. 2. Tanam bibit mangga di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman mangga dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen mangga ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/mango-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 9,
			name: 'Singkong',
			description: 'Ubi kayu, singkong, atau ketela pohon (Manihot esculenta, sinonim: Manihot utilissima) adalah perdu tropis dan subtropis tahunan[2] dari suku Euphorbiaceae. Tanaman ini juga disebut kaspe, ubi sampa, atau ubi prancis. Umbinya dikenal luas sebagai makanan pokok penghasil karbohidrat dan daunnya sebagai sayuran.',
			cultivation_tips: '1. Pilih bibit singkong yang sehat dan bebas dari penyakit. 2. Tanam bibit singkong di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman singkong dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen singkong ketika umbi sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/yucca-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 10,
			name: 'Padi',
			description: 'Padi (Oryza sativa) adalah tanaman pangan yang menjadi makanan pokok bagi sebagian besar penduduk di dunia. Padi merupakan tanaman semusim yang dapat tumbuh setinggi 1-1,5 meter. Padi ditanam di sawah yang tergenang air, tetapi ada juga yang ditanam di lahan kering. Padi mengandung karbohidrat kompleks, serat, protein, vitamin B, dan mineral seperti zat besi, magnesium, dan fosfor.',
			cultivation_tips: '1. Pilih bibit padi yang sehat dan bebas dari penyakit. 2. Tanam bibit padi di sawah yang tergenang air. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai sawah terlalu kering atau terlalu basah. 5. Jaga kebersihan sawah padi dari gulma dan hama. 6. Jangan lupa untuk memangkas batang padi yang tidak produktif. 7. Panen padi ketika butir padi sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/rice-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 11,
			name: 'Kentang',
			description: 'Kentang (Solanum tuberosum L.) adalah tanaman sayuran perdu semusim dan berumbi. Tanaman kentang berkembang biak melalui umbi.Tanaman kentang akan tumbuh subur di dataran tinggi yang beriklim dingin.',
			cultivation_tips: '1. Pilih bibit kentang yang sehat dan bebas dari penyakit. 2. Tanam bibit kentang di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman kentang dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen kentang ketika umbi sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/potato-100.png',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 12,
			name: 'Jagung',
			description: 'Jagung , ( Zea mays ), tanaman serealia dari keluarga rumput-rumputan ( Poaceae ) dan biji-bijiannya yang dapat dimakan . Tanaman yang dibudidayakan ini berasal dari Amerika dan merupakan salah satu tanaman pangan yang paling banyak tersebar di dunia . Jagung digunakan sebagai makanan manusia, pakan ternak , sebagai biofuel , dan sebagai bahan baku dalam industri.',
			cultivation_tips: '1. Pilih bibit jagung yang sehat dan bebas dari penyakit. 2. Tanam bibit jagung di tempat yang terkena sinar matahari langsung. 3. Berikan pupuk organik atau pupuk kandang setiap 2 minggu sekali. 4. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 5. Jaga kebersihan tanaman jagung dari gulma dan hama. 6. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 7. Panen jagung ketika buah sudah matang sempurna.',
			icon: 'https://storage.googleapis.com/plantpal-assets/plants/icons/corn-100.png',
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
		for (const media of plantMedia[plant]) {
			await prisma.plantMedia.upsert({
				where: { id: media.id },
				update: {},
				create: media,
			});
		}
		console.log(`${plant} seeded`);
	}
};

module.exports = {
	seedPlants,
	seedPlantMedia
};