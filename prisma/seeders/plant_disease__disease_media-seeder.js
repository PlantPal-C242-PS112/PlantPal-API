const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantDiseases() {
	const tomatoDisease = [
		{
			id: 1,
			plant_id: 1,
			name: 'Bacterial Spot',
			description: '<p>Penyakit bercak bakteri (bacterial spot) pada daun tanaman tomat disebabkan oleh bakteri Xanthomonas sp., ditandai dengan munculnya bercak-bercak kecil berair pada permukaan daun. Bercak ini lama-kelamaan akan mengering, berubah menjadi cekungan berwarna cokelat keabu-abuan dengan ukuran diameter sekitar 1-5 mm. Akibatnya, daun tomat menjadi kering dan melengkung ke bawah.</p>',
			prevention: `<p>Untuk mencegah penyakit bercak bakteri pada tanaman tomat, disarankan untuk melakukan sanitasi yang baik dengan membersihkan peralatan dan peralatan pertanian sebelum digunakan. Selain itu, hindari menyiram tanaman dari atas dan hindari menyentuh tanaman saat daunnya basah. Jaga kebersihan lingkungan sekitar tanaman dengan membersihkan gulma dan sisa tanaman yang terinfeksi. Pemilihan varietas tomat yang tahan terhadap penyakit bercak bakteri juga sangat dianjurkan. Dengan menerapkan langkah-langkah ini, risiko infeksi bakteri pada tanaman tomat dapat diminimalisir.</p>`,
			treatment: `<p>Untuk mengatasi Bacterial Spot pada daun tomat, gunakan fungisida berbahan tembaga secara berkala untuk menghambat penyebaran bakteri. Pangkas dan buang daun yang terinfeksi, serta pastikan tanaman memiliki jarak yang cukup untuk sirkulasi udara optimal. Lakukan penyiraman di pangkal tanaman dan hindari membasahi daun. Terapkan rotasi tanaman untuk mencegah penumpukan bakteri di tanah dan pilih varietas tomat yang tahan terhadap Bacterial Spot jika tersedia.</p>`,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			plant_id: 1,
			name: 'Early Blight',
			description: '<p>Penyakit busuk daun (early blight) dapat menyebabkan kerusakan parah pada tomat dan gejalanya dapat terjadi pada salah satu bagian tanaman di atas tanah termasuk daun, batang dan buah. Lesi dimulai dengan bagian kuning kecil pada daun yang mulai berubah menjadi coklat, dan ini terutama terlihat pada daun yang dekat dengan tanah. Lesi ini dapat berkembang menjadi bercak berwarna coklat tua dengan tepi yang lebih gelap. Daun yang terinfeksi biasanya akan mengering dan mati. Gejala ini biasanya terjadi pada musim panas yang lembab. Penyakit ini disebabkan oleh jamur Alternaria solani.</p>',
			prevention: `<p>Untuk mencegah Early Blight pada tanaman tomat, disarankan untuk melakukan sanitasi yang baik dengan membersihkan gulma dan sisa tanaman yang terinfeksi. Hindari menyiram tanaman dari atas dan hindari menyentuh tanaman saat daunnya basah. Jaga kebersihan lingkungan sekitar tanaman dengan membersihkan peralatan dan peralatan pertanian sebelum digunakan. Pemilihan varietas tomat yang tahan terhadap penyakit busuk daun juga sangat dianjurkan. Dengan menerapkan langkah-langkah ini, risiko infeksi jamur pada tanaman tomat dapat diminimalisir.</p>`,
			treatment: `<p>Untuk mengatasi Early Blight pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif chlorothalonil atau tebuconazole secara berkala, dengan menyemprotkan pada daun dan batang sesuai dosis yang tertera pada kemasan. Penting juga untuk segera memangkas dan membuang daun yang terinfeksi guna mencegah penyebaran penyakit lebih lanjut. Memperbaiki sirkulasi udara dengan menjaga jarak tanam yang cukup serta memangkas daun yang lebat dapat membantu mengurangi kelembapan di area kanopi tanaman. Pengaturan penyiraman yang baik, seperti menggunakan irigasi tetes dan menghindari menyiram dari atas, juga sangat dianjurkan untuk menjaga daun tetap kering. Selain itu, melakukan rotasi tanaman dengan varietas lain setiap tahun akan mencegah akumulasi patogen di tanah. Memilih varietas tomat yang tahan terhadap Early Blight dan melakukan pemantauan rutin untuk mendeteksi gejala awal akan sangat membantu dalam menjaga kesehatan tanaman. Dengan menerapkan langkah-langkah ini, risiko kerusakan akibat Early Blight dapat diminimalisir.</p>`,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			plant_id: 1,
			name: 'Late Blight',
			description: '<p>Penyakit ini disebabkan oleh jamur Phytophthora infestans dan sering muncul saat kelembapan tinggi. Busuk daun dapat menyebar cepat dan menyebabkan daun, batang, serta buah membusuk. Untuk gejalanya itu muncul bercak coklat atau hitam pada daun dan batang, daun layu dan mati secara bertahap, serta berwarna hitam dan membusuk.</p>',
			prevention: `<p>Untuk mencegah Late Blight pada tanaman tomat, disarankan untuk melakukan sanitasi yang baik dengan membersihkan gulma dan sisa tanaman yang terinfeksi segera setelah terdeteksi. Hindari menyiram tanaman dari atas dan hindari menyentuh tanaman saat daunnya basah. Jaga kebersihan lingkungan sekitar tanaman dengan membersihkan peralatan dan peralatan pertanian sebelum digunakan. Pemilihan varietas tomat yang tahan terhadap penyakit busuk daun juga sangat dianjurkan. Dengan menerapkan langkah-langkah ini, risiko infeksi jamur pada tanaman tomat dapat diminimalisir.</p>`,
			treatment: `<p>Untuk mengatasi Late Blight pada daun tomat, disarankan untuk menggunakan fungisida berbasis tembaga atau fosetil-aluminium secara berkala, dengan cara menyemprotkan pada daun dan batang tanaman, terutama pada bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan. Segera pangkas dan buang daun serta bagian tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut, dan pastikan untuk membuang sisa tanaman yang terinfeksi jauh dari area penanaman. Meningkatkan drainase di area penanaman dan menjaga jarak antar tanaman cukup untuk meningkatkan sirkulasi udara akan membantu mengurangi kelembapan, yang mendukung pertumbuhan jamur. Melakukan rotasi tanaman setiap musim juga penting untuk mencegah akumulasi patogen di tanah, mengingat Late Blight dapat bertahan dalam waktu lama. Selain itu, menghindari penanaman tomat pada musim dengan cuaca lembap dan memeriksa tanaman secara berkala untuk gejala awal akan sangat bermanfaat. Dengan menerapkan langkah-langkah ini, Anda dapat secara efektif mengurangi dampak Late Blight pada tanaman tomat.</p>`,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 4,
			plant_id: 1,
			name: 'Leaf Mold',
			description: '<p>Penyakit leaf mold pada daun tomat merupakan penyakit bercak daun yang disebabkan oleh jamur Cladosporium fulvum. penyakit tersebut biasanya terjadi pada tomat yang dibudidayakan dalam lingkungan lembab. Gejala penyakit yang sulit terdeteksi secara manual, dapat menyebabkan penurunan kualitas dan hasil panen tomat  selama 10 tahun terakhir. Gejala penyakit ini biasanya muncul pada daun bagian bawah tanaman tomat, berupa bercak kuning atau kecoklatan yang kemudian berkembang menjadi bercak berwarna hijau kekuningan dengan tepi yang lebih gelap. Bercak ini akan berkembang menjadi bercak berwarna coklat tua yang terlihat seperti serbuk halus pada permukaan daun. Daun yang terinfeksi biasanya akan mengering dan mati.</p>',
			prevention: `<p>Untuk mencegah Leaf Mold pada tanaman tomat, disarankan untuk melakukan sanitasi yang baik dengan membersihkan gulma dan sisa tanaman yang terinfeksi segera setelah terdeteksi. Hindari menyiram tanaman dari atas dan hindari menyentuh tanaman saat daunnya basah. Jaga kebersihan lingkungan sekitar tanaman dengan membersihkan peralatan dan peralatan pertanian sebelum digunakan. Pemilihan varietas tomat yang tahan terhadap penyakit leaf mold juga sangat dianjurkan. Dengan menerapkan langkah-langkah ini, risiko infeksi jamur pada tanaman tomat dapat diminimalisir.</p>`,
			treatment: `<p>Untuk mengatasi Leaf Mold pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif tembaga atau azoxystrobin secara berkala, dengan cara menyemprotkan larutan pada daun, terutama bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan. Penting untuk memangkas dan membuang daun yang menunjukkan gejala infeksi segera setelah terdeteksi, serta memastikan bahwa sisa tanaman yang terinfeksi tidak dibiarkan di sekitar area penanaman. Meningkatkan sirkulasi udara di sekitar tanaman dengan memberikan jarak tanam yang cukup dan memangkas daun yang lebat akan membantu mengurangi kelembapan, yang merupakan kondisi ideal bagi pertumbuhan jamur penyebab Leaf Mold. Selain itu, melakukan penyiraman di pagi hari dan menggunakan irigasi yang tepat untuk menjaga kelembapan tanah, tetapi tidak membasahi daun, akan sangat membantu. Melakukan rotasi tanaman dengan varietas lain dan memilih varietas tomat yang tahan terhadap Leaf Mold juga sangat dianjurkan. Dengan pemantauan rutin untuk mendeteksi gejala awal, Anda dapat secara efektif mengurangi dampak Leaf Mold pada tanaman tomat dan menjaga kesehatan tanaman secara keseluruhan.</p>`,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 5,
			plant_id: 1,
			name: 'Septoria Leaf Spot',
			description: '<p>Septoria pada daun tomat bermanifestasi sebagai bintik-bintik air yang memiliki lebar 1/16 hingga 1/4 inci. Ketika titik-titik tersebut matang, mereka memiliki pinggiran berwarna coklat dan pusat-pusat tan yang lebih terang dan menjadi serbuk daun septoria. Kaca pembesar akan mengkonfirmasi keberadaan tubuh buah hitam kecil di tengah-tengah bintik-bintik. Tubuh buah ini akan matang dan meledak dan menyebarkan spora jamur lebih banyak. Penyakit ini tidak meninggalkan bekas pada batang atau buah tetapi menyebar ke atas ke dedaunan yang lebih muda.</p>',
			prevention: `<p>Untuk mengatasi Septoria Leaf Spot pada tomat, gunakan fungisida berbahan chlorothalonil, tembaga, atau mancozeb secara berkala. Pangkas dan buang daun yang terinfeksi, serta pastikan jarak tanam cukup untuk sirkulasi udara yang baik. Lakukan penyiraman di pangkal tanaman dan hindari membasahi daun. Terapkan rotasi tanaman, gunakan mulsa, dan pilih varietas yang tahan penyakit. Lakukan pemantauan rutin untuk mendeteksi gejala awal dan mengambil tindakan cepat.</p>`,
			treatment: `<p>- Perbaiki Drainase: Pastikan area penanaman memiliki drainase yang baik untuk mencegah genangan air, yang dapat mendukung pertumbuhan jamur.</p><br><p>- Rotasi Tanaman: Lakukan rotasi tanaman setiap musim dengan varietas lain untuk memutus siklus hidup patogen di tanah.</p><br><p>- Kebersihan Alat Berkebun: Pastikan semua alat yang digunakan untuk pemangkasan dan perawatan tanaman bersih dan disinfektan untuk mencegah penyebaran spora.</p><br><p>- Pilih Varietas Tahan Penyakit: Saat menanam, pilih varietas tomat yang tahan terhadap Septoria Leaf Spot jika memungkinkan.</p><br><p>- Penyiraman yang Tepat: Usahakan untuk menyiram di pangkal tanaman dan hindari membasahi daun untuk menjaga kelembapan yang berlebih.</p><br><p>- Pemangkasan Daun: Pangkas dan buang daun yang terinfeksi untuk mencegah penyebaran penyakit ke daun lain.</p>`,
			created_at: new Date(),
			updated_at: new Date()
		}
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