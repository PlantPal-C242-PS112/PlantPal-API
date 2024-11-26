const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantDiseases() {
	const tomatoDisease = [
		{
			id: 1,
			plant_id: 1,
			name: 'Bacterial Spot',
			description: 'Penyakit bercak bakteri (bacterial spot) pada daun tanaman tomat disebabkan oleh bakteri Xanthomonas sp., ditandai dengan munculnya bercak-bercak kecil berair pada permukaan daun. Bercak ini lama-kelamaan akan mengering, berubah menjadi cekungan berwarna cokelat keabu-abuan dengan ukuran diameter sekitar 1-5 mm. Akibatnya, daun tomat menjadi kering dan melengkung ke bawah.',
			care_tips: '1. Tanam tomat di tempat yang terkena sinar matahari langsung. 2. Jaga kebersihan tanaman tomat dari gulma dan hama. 3. Berikan air secara teratur, jangan sampai tanah terlalu kering atau terlalu basah. 4. Jangan lupa untuk memangkas daun-daun yang tidak produktif. 5. Jika tanaman terkena penyakit, segera lakukan pemangkasan dan pembakaran daun yang terinfeksi.',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			plant_id: 1,
			name: 'Early Blight',
			description: 'Penyakit busuk daun (early blight) dapat menyebabkan kerusakan parah pada tomat dan gejalanya dapat terjadi pada salah satu bagian tanaman di atas tanah termasuk daun, batang dan buah. Lesi dimulai dengan bagian kuning kecil pada daun yang mulai berubah menjadi coklat, dan ini terutama terlihat pada daun yang dekat dengan tanah. Lesi ini dapat berkembang menjadi bercak berwarna coklat tua dengan tepi yang lebih gelap. Daun yang terinfeksi biasanya akan mengering dan mati. Gejala ini biasanya terjadi pada musim panas yang lembab. Penyakit ini disebabkan oleh jamur Alternaria solani.',
			care_tips: 'Untuk mengatasi Early Blight pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif chlorothalonil atau tebuconazole secara berkala, dengan menyemprotkan pada daun dan batang sesuai dosis yang tertera pada kemasan. Penting juga untuk segera memangkas dan membuang daun yang terinfeksi guna mencegah penyebaran penyakit lebih lanjut. Memperbaiki sirkulasi udara dengan menjaga jarak tanam yang cukup serta memangkas daun yang lebat dapat membantu mengurangi kelembapan di area kanopi tanaman. Pengaturan penyiraman yang baik, seperti menggunakan irigasi tetes dan menghindari menyiram dari atas, juga sangat dianjurkan untuk menjaga daun tetap kering. Selain itu, melakukan rotasi tanaman dengan varietas lain setiap tahun akan mencegah akumulasi patogen di tanah. Memilih varietas tomat yang tahan terhadap Early Blight dan melakukan pemantauan rutin untuk mendeteksi gejala awal akan sangat membantu dalam menjaga kesehatan tanaman. Dengan menerapkan langkah-langkah ini, risiko kerusakan akibat Early Blight dapat diminimalisir.',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			plant_id: 1,
			name: 'Late Blight',
			description: 'Penyakit ini disebabkan oleh jamur Phytophthora infestans dan sering muncul saat kelembapan tinggi. Busuk daun dapat menyebar cepat dan menyebabkan daun, batang, serta buah membusuk. Untuk gejalanya itu muncul bercak coklat atau hitam pada daun dan batang, daun layu dan mati secara bertahap, serta berwarna hitam dan membusuk.',
			care_tips: 'Untuk mengatasi Late Blight pada daun tomat, disarankan untuk menggunakan fungisida berbasis tembaga atau fosetil-aluminium secara berkala, dengan cara menyemprotkan pada daun dan batang tanaman, terutama pada bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan. Segera pangkas dan buang daun serta bagian tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut, dan pastikan untuk membuang sisa tanaman yang terinfeksi jauh dari area penanaman. Meningkatkan drainase di area penanaman dan menjaga jarak antar tanaman cukup untuk meningkatkan sirkulasi udara akan membantu mengurangi kelembapan, yang mendukung pertumbuhan jamur. Melakukan rotasi tanaman setiap musim juga penting untuk mencegah akumulasi patogen di tanah, mengingat Late Blight dapat bertahan dalam waktu lama. Selain itu, menghindari penanaman tomat pada musim dengan cuaca lembap dan memeriksa tanaman secara berkala untuk gejala awal akan sangat bermanfaat. Dengan menerapkan langkah-langkah ini, Anda dapat secara efektif mengurangi dampak Late Blight pada tanaman tomat.',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 4,
			plant_id: 1,
			name: 'Leaf Mold',
			description: 'Penyakit leaf mold pada daun tomat merupakan penyakit bercak daun yang disebabkan oleh jamur Cladosporium fulvum. penyakit tersebut biasanya terjadi pada tomat yang dibudidayakan dalam lingkungan lembab. Gejala penyakit yang sulit terdeteksi secara manual, dapat menyebabkan penurunan kualitas dan hasil panen tomat  selama 10 tahun terakhir. Gejala penyakit ini biasanya muncul pada daun bagian bawah tanaman tomat, berupa bercak kuning atau kecoklatan yang kemudian berkembang menjadi bercak berwarna hijau kekuningan dengan tepi yang lebih gelap. Bercak ini akan berkembang menjadi bercak berwarna coklat tua yang terlihat seperti serbuk halus pada permukaan daun. Daun yang terinfeksi biasanya akan mengering dan mati.',
			care_tips: 'Untuk mengatasi Leaf Mold pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif tembaga atau azoxystrobin secara berkala, dengan cara menyemprotkan larutan pada daun, terutama bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan. Penting untuk memangkas dan membuang daun yang menunjukkan gejala infeksi segera setelah terdeteksi, serta memastikan bahwa sisa tanaman yang terinfeksi tidak dibiarkan di sekitar area penanaman. Meningkatkan sirkulasi udara di sekitar tanaman dengan memberikan jarak tanam yang cukup dan memangkas daun yang lebat akan membantu mengurangi kelembapan, yang merupakan kondisi ideal bagi pertumbuhan jamur penyebab Leaf Mold. Selain itu, melakukan penyiraman di pagi hari dan menggunakan irigasi yang tepat untuk menjaga kelembapan tanah, tetapi tidak membasahi daun, akan sangat membantu. Melakukan rotasi tanaman dengan varietas lain dan memilih varietas tomat yang tahan terhadap Leaf Mold juga sangat dianjurkan. Dengan pemantauan rutin untuk mendeteksi gejala awal, Anda dapat secara efektif mengurangi dampak Leaf Mold pada tanaman tomat dan menjaga kesehatan tanaman secara keseluruhan.',
			created_at: new Date(),
			updated_at: new Date()
		},
	];

	tomatoDisease.forEach(async (disease) => {
		await prisma.plantDisease.upsert({
			where: { id: disease.id },
			update: {},
			create: disease,
		});
		console.log(`Tomato Disease ${disease.name} seeded`);
	});
};

async function seedDiseaseMedia() {
	const tomatoDiseaseMedia = [
		{
			id: 1,
			disease_id: 1,
			type: 'image',
			url: 'https://hort.extension.wisc.edu/files/2017/03/Bacterial-spot-tomato-e1721249468183.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			disease_id: 1,
			type: 'image',
			url: 'https://hort.extension.wisc.edu/files/2017/03/Bacterial-spot-on-tomato-leaves-e1721249493890.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			disease_id: 2,
			type: 'image',
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIHsfBUtCVB_7M8sxfe6d7juHAUwy_ffrzA&s',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 4,
			disease_id: 3,
			type: 'image',
			url: 'https://www.planetnatural.com/wp-content/uploads/2012/12/late-blight-tomato.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 5,
			disease_id: 4,
			type: 'image',
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtAQlNhpGebJgNH01lB3UiKFPCdOr9Db5fw&s',
			created_at: new Date(),
			updated_at: new Date()
		},
	];

	tomatoDiseaseMedia.forEach(async (media) => {
		await prisma.diseaseMedia.upsert({
			where: { id: media.id },
			update: {},
			create: media,
		});
		console.log(`Tomato Disease Media ${media.url} seeded`);
	});
};

module.exports = {
	seedPlantDiseases,
	seedDiseaseMedia
};