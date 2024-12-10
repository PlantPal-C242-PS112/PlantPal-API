const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantDiseases() {
	const plantDisease = {
		tomatoDisease: [
			{
				id: 1,
				plant_id: 1,
				name: 'Bacterial Spot',
				description: '<p>Penyakit bercak bakteri (<em>bacterial spot</em>) pada daun tanaman tomat disebabkan oleh bakteri <em>Xanthomonas sp.</em>, ditandai dengan munculnya bercak-bercak kecil berair pada permukaan daun. Bercak ini lama-kelamaan akan mengering, berubah menjadi cekungan berwarna cokelat keabu-abuan dengan ukuran diameter sekitar 1-5 mm. Akibatnya, daun tomat menjadi kering dan melengkung ke bawah.</p>',
				prevention: `<ul><li>Cek tanaman secara berkala untuk gejala awal Late Blight.</li><li>Hindari menyiram tanaman dari atas, dan usahakan untuk menyiram di area akar saja.</li><li>Gunakan varietas tomat yang tahan terhadap Late Blight jika memungkinkan.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Bacterial Spot</em> pada daun tomat, gunakan fungisida berbahan tembaga secara berkala untuk menghambat penyebaran bakteri. Pangkas dan buang daun yang terinfeksi, serta pastikan tanaman memiliki jarak yang cukup untuk sirkulasi udara optimal. Lakukan penyiraman di pangkal tanaman dan hindari membasahi daun. Terapkan rotasi tanaman untuk mencegah penumpukan bakteri di tanah dan pilih varietas tomat yang tahan terhadap <em>Bacterial Spot</em> jika tersedia.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Tomato_Bacterial%20Spot.jpg',
			},
			{
				id: 2,
				plant_id: 1,
				name: 'Early Blight',
				description: '<p>Penyakit busuk daun (<em>early blight</em>) dapat menyebabkan kerusakan parah pada tanaman tomat. Gejala penyakit ini dapat muncul pada salah satu bagian tanaman di atas tanah, termasuk daun, batang, dan buah. Lesi biasanya dimulai sebagai bagian kecil berwarna kuning pada daun, yang kemudian berubah menjadi cokelat. Gejala ini terutama terlihat pada daun yang berada dekat dengan tanah.</p>',
				prevention: `<ul><li>Jangan menyiram tanaman dari atas, karena air pada daun dapat memperparah penyakit. Siram dari bagian bawah atau gunakan irigasi tetes.</li><li>Periksa tanaman secara berkala untuk gejala awal agar dapat melakukan tindakan pencegahan segera.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Early Blight</em> pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif chlorothalonil atau tebuconazole secara berkala, dengan menyemprotkan pada daun dan batang sesuai dosis yang tertera pada kemasan. Penting juga untuk segera memangkas dan membuang daun yang terinfeksi guna mencegah penyebaran penyakit lebih lanjut.</p><p>Memperbaiki sirkulasi udara dengan menjaga jarak tanam yang cukup serta memangkas daun yang lebat dapat membantu mengurangi kelembapan di area kanopi tanaman. Pengaturan penyiraman yang baik, seperti menggunakan irigasi tetes dan menghindari menyiram dari atas, juga sangat dianjurkan untuk menjaga daun tetap kering.</p><p>Selain itu, melakukan rotasi tanaman dengan varietas lain setiap tahun akan mencegah akumulasi patogen di tanah. Memilih varietas tomat yang tahan terhadap <em>Early Blight</em> dan melakukan pemantauan rutin untuk mendeteksi gejala awal akan sangat membantu dalam menjaga kesehatan tanaman. Dengan menerapkan langkah-langkah ini, risiko kerusakan akibat <em>Early Blight</em> dapat diminimalisir.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Early%20Blight/Tomato_Early%20Blight.png',
			},
			{
				id: 3,
				plant_id: 1,
				name: 'Late Blight',
				description: '<p>Penyakit ini disebabkan oleh jamur <em>Phytophthora infestans</em> dan sering muncul saat kelembapan tinggi.</p><p>Busuk daun dapat menyebar cepat dan menyebabkan daun, batang, serta buah membusuk.</p><p>Gejalanya meliputi:</p><ul><li>Bercak coklat atau hitam pada daun dan batang.</li><li>Daun layu dan mati secara bertahap.</li><li>Buah berwarna hitam dan membusuk.</li></ul>',
				prevention: `<ul><li>Cek tanaman secara berkala untuk gejala awal Late Blight.</li><li>Hindari menyiram tanaman dari atas, dan usahakan untuk menyiram di area akar saja.</li><li>Gunakan varietas tomat yang tahan terhadap Late Blight jika memungkinkan.</li></ul>`,
				treatment: `<p>Untuk mengatasi Late Blight pada daun tomat, disarankan untuk menggunakan fungisida berbasis tembaga atau fosetil-aluminium secara berkala, dengan cara menyemprotkan pada daun dan batang tanaman, terutama pada bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan.</p><p>Segera pangkas dan buang daun serta bagian tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut, dan pastikan untuk membuang sisa tanaman yang terinfeksi jauh dari area penanaman.</p><p>Meningkatkan drainase di area penanaman dan menjaga jarak antar tanaman cukup untuk meningkatkan sirkulasi udara akan membantu mengurangi kelembapan, yang mendukung pertumbuhan jamur.</p><p>Melakukan rotasi tanaman setiap musim juga penting untuk mencegah akumulasi patogen di tanah, mengingat Late Blight dapat bertahan dalam waktu lama.</p><p>Selain itu, menghindari penanaman tomat pada musim dengan cuaca lembap dan memeriksa tanaman secara berkala untuk gejala awal akan sangat bermanfaat.</p><p>Dengan menerapkan langkah-langkah ini, Anda dapat secara efektif mengurangi dampak Late Blight pada tanaman tomat.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/Tomato_Late%20Blight.jpg',
			},
			{
				id: 4,
				plant_id: 1,
				name: 'Leaf Mold',
				description: '<p>Penyakit leaf mold pada daun tomat merupakan penyakit bercak daun yang disebabkan oleh jamur <em>Cladosporium fulvum</em>.</p><p>Penyakit tersebut biasanya terjadi pada tomat yang dibudidayakan dalam lingkungan lembap. Gejala penyakit yang sulit terdeteksi secara manual dapat menyebabkan penurunan kualitas dan hasil panen tomat selama 10 tahun terakhir.</p>',
				prevention: `<ul><li>Periksa tanaman secara berkala untuk gejala awal <em>Leaf Mold</em>, terutama selama musim hujan atau kondisi lembap.</li><li>Gunakan alat pelindung diri saat mengaplikasikan fungisida, dan selalu ikuti petunjuk produk untuk keamanan dan efektivitas maksimum.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Leaf Mold</em> pada daun tomat, disarankan untuk menggunakan fungisida berbahan aktif tembaga atau azoxystrobin secara berkala, dengan cara menyemprotkan larutan pada daun, terutama bagian yang terinfeksi, sesuai dengan dosis yang tertera pada kemasan.</p><p>Penting untuk memangkas dan membuang daun yang menunjukkan gejala infeksi segera setelah terdeteksi, serta memastikan bahwa sisa tanaman yang terinfeksi tidak dibiarkan di sekitar area penanaman.</p><p>Meningkatkan sirkulasi udara di sekitar tanaman dengan memberikan jarak tanam yang cukup dan memangkas daun yang lebat akan membantu mengurangi kelembapan, yang merupakan kondisi ideal bagi pertumbuhan jamur penyebab <em>Leaf Mold</em>.</p><p>Selain itu, melakukan penyiraman di pagi hari dan menggunakan irigasi yang tepat untuk menjaga kelembapan tanah, tetapi tidak membasahi daun, akan sangat membantu.</p><p>Melakukan rotasi tanaman dengan varietas lain dan memilih varietas tomat yang tahan terhadap <em>Leaf Mold</em> juga sangat dianjurkan.</p><p>Dengan pemantauan rutin untuk mendeteksi gejala awal, Anda dapat secara efektif mengurangi dampak <em>Leaf Mold</em> pada tanaman tomat dan menjaga kesehatan tanaman secara keseluruhan.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Leaf%20Mold/Tomato_Leaf%20Mold.jpg',
			},
			{
				id: 5,
				plant_id: 1,
				name: 'Septoria Leaf Spot',
				description: '<p>Septoria pada daun tomat bermanifestasi sebagai bintik-bintik air yang memiliki lebar 1/16 hingga 1/4 inci. Ketika titik-titik tersebut matang, mereka memiliki pinggiran berwarna coklat dan pusat-pusat tan yang lebih terang, menjadi serbuk daun Septoria. Kaca pembesar akan mengkonfirmasi keberadaan tubuh buah hitam kecil di tengah-tengah bintik-bintik. Tubuh buah ini akan matang dan meledak, menyebarkan lebih banyak spora jamur. Penyakit ini tidak meninggalkan bekas pada batang atau buah tetapi menyebar ke atas ke dedaunan yang lebih muda.</p>',
				prevention: `<ul><li><strong>Perbaiki Drainase:</strong> Pastikan area penanaman memiliki drainase yang baik untuk mencegah genangan air, yang dapat mendukung pertumbuhan jamur.</li><li><strong>Rotasi Tanaman:</strong> Lakukan rotasi tanaman setiap musim dengan varietas lain untuk memutus siklus hidup patogen di tanah.</li><li><strong>Kebersihan Alat Berkebun:</strong> Pastikan semua alat yang digunakan untuk pemangkasan dan perawatan tanaman bersih dan disinfektan untuk mencegah penyebaran spora.</li><li><strong>Pilih Varietas Tahan Penyakit:</strong> Saat menanam, pilih varietas tomat yang tahan terhadap <em>Septoria Leaf Spot</em> jika memungkinkan.</li><li><strong>Penyiraman yang Tepat:</strong> Usahakan untuk menyiram di pangkal tanaman dan hindari membasahi daun untuk menjaga kelembapan yang berlebih.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Septoria Leaf Spot</em> pada tomat, gunakan fungisida berbahan chlorothalonil, tembaga, atau mancozeb secara berkala. Pangkas dan buang daun yang terinfeksi, serta pastikan jarak tanam cukup untuk sirkulasi udara yang baik.</p><p>Lakukan penyiraman di pangkal tanaman dan hindari membasahi daun. Terapkan rotasi tanaman, gunakan mulsa, dan pilih varietas yang tahan penyakit. Lakukan pemantauan rutin untuk mendeteksi gejala awal dan mengambil tindakan cepat.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Septoria%20Leaf%20Spot/Tomato_Septoria%20Leaf%20Spot.jpg',
			},
			{
				id: 6,
				plant_id: 1,
				name: 'Spider Mites (Two Spotted)',
				description: '<p>Tungau laba-laba berbintik dua (two spotted) (<em>Tetranychus urticae</em>) adalah hama arthropoda polifagus yang ada di mana-mana dan memiliki dampak ekonomi besar pada industri tomat (<em>Solanum lycopersicum</em>).</p><p>Indeks kerusakan yang disebabkan oleh tungau laba-laba berbintik dua (<em>Tetranychus urticae</em>) pada tomat dijelaskan untuk memberikan informasi untuk pengendalian biologis menggunakan tungau predator <em>Phytoseiulus persimilis</em>.</p><p>Derajat skala 1-5 untuk kerusakan pada selebaran dan daun, yang ketika diintegrasikan ke tanaman, dapat membedakan lima puluh kelas kerusakan (0,0-5,0), ditandai dengan sejumlah tungau dan oleh struktur populasi.</p>',
				prevention: `<ul><li><strong>Pembersihan Daun:</strong> Cuci daun dengan air sabun ringan atau air biasa untuk menghilangkan hama dan jaring yang dibuat oleh Spider Mites.</li><li><strong>Peningkatan Kelembapan:</strong> Meningkatkan kelembapan di sekitar tanaman dengan menyemprotkan air secara berkala atau menggunakan pelembap, karena Spider Mites lebih menyukai kondisi kering.</li><li><strong>Perbaikan Sirkulasi Udara:</strong> Jaga jarak tanam agar sirkulasi udara baik, sehingga mencegah kondisi kering yang mendukung pertumbuhan hama.</li><li><strong>Penggunaan Predator Alami:</strong> Pertimbangkan menggunakan predator alami seperti laba-laba, ladybugs, atau predator mite (seperti Phytoseiulus persimilis) untuk membantu mengendalikan populasi Spider Mites.</li><li><strong>Pilih Varietas Tahan Hama:</strong> Saat menanam, pilih varietas tomat yang diketahui tahan terhadap Spider Mites jika memungkinkan.</li></ul>`,
				treatment: `<p>Untuk mengendalikan hama Spider Mites pada tanaman tomat, penting untuk segera menggunakan insektisida yang sesuai untuk menghentikan penyebaran hama. Lakukan penyemprotan secara berkala dan pastikan untuk menyasar area yang terinfeksi. Dengan pemantauan rutin dan tindakan cepat saat gejala pertama muncul, Anda dapat membantu tanaman pulih dari infestasi ini.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Two%20Spotted%20Spider%20Mites/Tomato_Two%20Spotted%20Spider%20Mites.jpg',
			},
			{
				id: 7,
				plant_id: 1,
				name: 'Target Spot',
				description: `<p>Penyakit ini dimulai pada daun yang lebih tua dan menyebar ke atas. Tanda-tanda pertama adalah bintik-bintik berbentuk tidak beraturan (kurang dari 1mm) dengan garis kuning. Beberapa bintik membesar hingga 10 mm dan menunjukkan karakteristik cincin, oleh karena itu dinamakan "titik target (target spot)". Bintik-bintik juga terjadi pada batang. Mereka panjang dan kurus. Bintik-bintik kecil berwarna coklat muda dengan tepi gelap juga dapat terjadi pada buah.</p>`,
				prevention: `<h3>Langkah-Langkah Pengendalian Target Spot pada Tanaman Tomat</h3><ul><li><strong>Pembersihan Area Tanaman:</strong> Pastikan untuk membersihkan area penanaman dari sisa-sisa tanaman yang terinfeksi untuk mencegah penyebaran spora patogen.</li><li><strong>Perbaiki Drainase:</strong> Pastikan area penanaman memiliki drainase yang baik untuk mencegah genangan air, yang dapat mendukung pertumbuhan jamur penyebab Target Spot.</li><li><strong>Rotasi Tanaman:</strong> Lakukan rotasi tanaman dengan varietas lain setiap musim untuk memutus siklus hidup patogen di tanah.</li><li><strong>Pilih Varietas Tahan Penyakit:</strong> Saat menanam, pilih varietas tomat yang tahan terhadap Target Spot jika memungkinkan.</li><li><strong>Penyiraman yang Tepat:</strong> Usahakan untuk menyiram di pangkal tanaman dan hindari membasahi daun untuk menjaga kelembapan yang berlebih.</li></ul>`,
				treatment: `<h3>Pengendalian Target Spot pada Tanaman Tomat</h3><p>Untuk mengendalikan Target Spot pada tanaman tomat, penting untuk segera menggunakan fungisida yang sesuai untuk menghentikan penyebaran penyakit.</p><p>Pastikan untuk memangkas dan membuang daun yang terinfeksi guna mengurangi risiko penyebaran lebih lanjut.</p><p>Selain itu, menjaga sirkulasi udara yang baik di sekitar tanaman dengan memberikan jarak tanam yang cukup sangat dianjurkan.</p><p>Dengan pemantauan rutin untuk mendeteksi gejala awal dan mengambil tindakan yang cepat, Anda dapat membantu tanaman pulih dari infeksi ini.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Target%20Spot/Tomato_Target%20Spot.jpg',
			},
			{
				id: 8,
				plant_id: 1,
				name: 'Tomato Yellow Leaf Curl Virus',
				description: `<h3>Virus Keriting Daun Kuning Tomat (Tomato Yellow Leaf Curl Virus - TYLCV)</h3><p>Virus keriting daun kuning tomat atau yang dikenal dengan <em>Tomato Yellow Leaf Curl Virus</em> (TYLCV) adalah virus DNA dari genus <em>Begomovirus</em> dan famili <em>Geminiviridae</em>. TYLCV menyebabkan penyakit tomat yang paling merusak, dan dapat ditemukan di daerah tropis dan subtropis yang menyebabkan kerugian ekonomi yang parah.</p><h3>Penularan TYLCV</h3><p>Virus ini ditularkan oleh vektor serangga dari famili <em>Aleyrodidae</em> dan ordo <em>Hemiptera</em>, yaitu kutu kebul <em>Bemisia tabaci</em>. Serangga ini umumnya dikenal sebagai kutu kebul daun perak atau kutu kebul ubi jalar.</p><h3>Inang Utama</h3><p>Inang utama TYLCV adalah tanaman tomat, yang sering kali menjadi sasaran utama infeksi virus ini.</p>`,
				prevention: `<ul><li><strong>Monitor Tanaman Secara Rutin:</strong> Periksa tanaman secara berkala untuk mendeteksi gejala awal dan populasi hama.</li><li><strong>Gunakan Jaring Penutup:</strong> Gunakan jaring atau penutup untuk melindungi tanaman dari hama penghisap, terutama selama fase awal pertumbuhan.</li><li><strong>Lakukan Pemupukan yang Baik:</strong> Pemupukan yang tepat akan membantu tanaman tetap sehat dan lebih mampu melawan infeksi.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Tomato Yellow Leaf Curl Virus</em> (TYLCV), sangat penting untuk mengendalikan populasi vektor dengan insektisida yang tepat dan memangkas bagian tanaman yang terinfeksi. Memilih varietas tomat yang tahan terhadap virus ini, menjaga kebersihan area tanam, dan melakukan rotasi tanaman akan membantu mengurangi risiko infeksi.</p><p>Dengan langkah-langkah ini, Anda dapat melindungi tanaman tomat Anda dari dampak serius yang disebabkan oleh TYLCV.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Yellow%20Leaf%20Curl%20Virus/Tomato_Yellow%20Leaf%20Curl%20Virus.jpg',
			},
			{
				id: 9,
				plant_id: 1,
				name: 'Mosaic Virus',
				description: `<h3>Virus Mosaik Tomat (Mosaic Virus)</h3><p>Virus mosaik tomat (<em>Mosaic Virus</em>) adalah penyakit serius dan sangat menular. Penyakit ini juga sulit untuk diidentifikasi karena gejala yang sangat bervariasi tergantung pada varietas dan usia tanaman yang terinfeksi, jenis virus, dan kondisi lingkungan.</p><h3>Gejala Virus Mosaik Tomat</h3><p>Gejala <em>Mosaic Virus</em> dapat ditemukan pada setiap tahap pertumbuhan, dan semua bagian tanaman dapat terinfeksi. Beberapa gejala yang sering terlihat meliputi:</p><ul><li>Bintik-bintik umum atau penampilan mosaik pada dedaunan.</li><li>Daun yang menjadi kerdil.</li><li>Penurunan produksi buah yang parah.</li><li>Tanaman yang mengeras dengan bercak kuning dan bintik-bintik nekrotik.</li><li>Bagian dalam buah berwarna coklat.</li></ul>`,
				prevention: `<ul><li><strong>Monitor Tanaman Secara Rutin:</strong> Periksa tanaman secara berkala untuk mendeteksi gejala awal dan segera ambil tindakan jika diperlukan.</li><li><strong>Hindari Penanaman Berdekatan:</strong> Usahakan untuk tidak menanam tomat dekat dengan tanaman lain yang rentan terhadap virus untuk mengurangi risiko penularan.</li><li><strong>Lakukan Rotasi Tanaman:</strong> Lakukan rotasi tanaman setiap tahun untuk memutus siklus hidup virus dan vektor.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Tomato Mosaic Virus</em>, penting untuk segera memangkas dan membuang tanaman yang terinfeksi serta menjaga kebersihan alat berkebun untuk mencegah penyebaran virus. Pemilihan varietas tomat yang tahan terhadap virus ini dan pengendalian serangga penghisap juga merupakan langkah penting.</p><p>Dengan langkah-langkah ini, Anda dapat melindungi tanaman tomat Anda dari dampak serius yang disebabkan oleh virus mosaik.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Mosaic%20Virus/Tomato_Mosaic%20Virus.png',
			}
		],
		strawberryDisease: [
			{
				id: 10,
				plant_id: 2,
				name: 'Leaf Scorch',
				description: `<p>Leaf Scorch, atau yang biasa disebut dengan daun hangus, disebabkan oleh jamur <em>Diplocarpon earliana</em>. Gejalanya dapat disalahartikan sebagai bercak daun biasa, yang disebabkan oleh <em>M. fragariae</em>.</p><h3>Gejala Leaf Scorch</h3><p>Beberapa bintik-bintik kecil, tidak beraturan, dan keunguan hingga cokelat atau "bercak" (diameter 1-5mm) berkembang di permukaan atas daun. Berbeda dengan bercak daun biasa, bagian tengah bercak tetap ungu atau perlahan-lahan mengembangkan pusat kecil kecoklatan.</p><p>Ketika bercak banyak dan mulai bergabung, jaringan di antara luka daun (lesi) berubah menjadi merah cerah menjadi coklat. Dalam kasus yang parah, seluruh daun melengkung di tepi, berubah menjadi coklat, dan mendapatkan penampilan yang terbakar (hangus).</p>`,
				prevention: `<ul><li><strong>Monitor Tanaman Secara Rutin:</strong> Periksa tanaman secara berkala untuk mendeteksi gejala awal dan ambil tindakan yang diperlukan sebelum masalah berkembang.</li><li><strong>Jaga Sirkulasi Udara:</strong> Pastikan jarak tanam cukup untuk menjaga sirkulasi udara yang baik, sehingga kelembapan tidak terperangkap dan mengurangi risiko penyakit.</li><li><strong>Hindari Penanaman Terlalu Dekat:</strong> Jangan menanam stroberi terlalu dekat dengan tanaman lain untuk mengurangi kompetisi air dan nutrisi.</li></ul>`,
				treatment: `<p>Untuk mengatasi <em>Leaf Scorch</em> pada tanaman stroberi, penting untuk memastikan tanaman mendapatkan cukup air dan pupuk yang tepat untuk mendukung pertumbuhannya. Penggunaan fungisida yang sesuai dapat membantu jika infeksi jamur menjadi penyebab.</p><p>Dengan perhatian terhadap kebutuhan lingkungan dan pemeliharaan yang baik, tanaman stroberi dapat pulih dari kondisi ini.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Strawberry_Leaf%20Scorch/Strawberry_Leaf%20Scorch.jpg',
			}
		],
		bellPepperDisease: [
			{
				id: 11,
				plant_id: 3,
				name: 'Bacterial Spot',
				description: `<p>Bakteri <em>Xanthomonas campestris</em> pv. <em>Vesicatoria</em> menyebabkan bintik-bintik bakteri. Infeksi bakteri ini dapat menyebabkan kerusakan pada tanaman dan buah yang dihasilkan. Gejala yang muncul jika terinfeksi dapat ditemukan di hampir semua bagian tanaman, termasuk daun dan buah.</p><p>Mengenali penyakit ini dapat dilihat secara langsung atau melalui pengujian laboratorium. Penyakit ini mengakibatkan prematur kerontokan daun tanaman yang terinfeksi dan bercak buah, sehingga mengurangi kualitas dan kuantitas buah.</p>`,
				prevention: `<ul><li><strong>Monitor Tanaman Secara Berkala:</strong> Periksa tanaman secara rutin untuk mendeteksi gejala awal dan ambil tindakan yang diperlukan sebelum masalah berkembang.</li><li><strong>Disinfeksi Alat Berkebun:</strong> Selalu disinfeksi alat berkebun setelah digunakan pada tanaman yang terinfeksi untuk menghindari penularan ke tanaman lain.</li><li><strong>Rotasi Tanaman:</strong> Lakukan rotasi tanaman setiap musim untuk memutus siklus hidup bakteri di tanah.</li></ul>`,
				treatment: `<p>Untuk mengatasi <strong>Bacterial Spot</strong> pada tanaman paprika, penggunaan bakteri berbasis tembaga sangat dianjurkan untuk mengendalikan infeksi. Pemangkasan bagian yang terinfeksi dan menjaga kebersihan area tanam juga merupakan langkah penting untuk mencegah penyebaran penyakit.</p><p>Dengan perhatian terhadap kelembapan tanah dan sirkulasi udara yang baik, tanaman paprika dapat pulih dari kondisi ini.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Bell%20Pepper_Bacterial%20Spot/Bell%20Pepper_Bacterial%20Spot.jpg',
			}
		],
		squashDisease: [
			{
				id: 12,
				plant_id: 4,
				name: 'Powdery Mildew',
				description: `<h3>Tanda-Tanda Powdery Mildew</h3><p>Pada permukaan daun dan batang terdapat lapisan tipis seperti tepung yang lama kelamaan bercak yang ditimbulkan pada embun tepung ini akan mengalami pengeringan jika tanaman ini cenderung berat, daun muda dan batang akan mati, hal ini akan mengalami penularan ke tanaman lain.</p><p>Proses pertumbuhannya menempel satu sama lain. Yang disebabkan oleh embun tepung adalah pada tanaman yang sudah berbuah akan mengalami masak yang belum pada waktunya, tanaman menjadi lemah dan pertumbuhan akan terhambat.</p>`,
				prevention: `<ul><li>Periksa tanaman secara rutin untuk mendeteksi gejala awal dan ambil tindakan yang diperlukan.</li><li>Jika memungkinkan, tanam varietas labu yang tahan terhadap Powdery Mildew.</li><li>Usahakan untuk tidak menanam labu terlalu dekat dengan tanaman lain yang rentan terhadap penyakit ini, guna mengurangi risiko penularan.</li><li>Pada tanaman yang sudah parah sebaiknya tanaman dicabut saja biar tanaman tidak menular ke tanaman lain.</li><li>Dilakukan dengan penyempotan dinokap atau dengan penyerbukan belerang, dan penggunaan peptisida.</li><li>Menjaga kebersihan area lingkungan.</li></ul>`,
				treatment: `<p>Untuk mengatasi <strong>Powdery Mildew</strong> pada tanaman labu, penggunaan fungisida berbasis sulfur atau fungisida sistemik sangat dianjurkan untuk mengendalikan infeksi. Memastikan sirkulasi udara yang baik dan menjaga kebersihan area tanam juga merupakan langkah penting untuk mencegah penyebaran penyakit.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Squash_Powdery%20Mildew/Squash_Powdery%20Mildew.jpg',
			}
		],
		grapeDisease: [
			{
				id: 13,
				plant_id: 5,
				name: 'Black Rot (Bercak Daun)',
				description: `<p><strong>Lesi coklat</strong> pada daun yang mengembangkan <em>titik-titik hitam (pycnidia)</em>; anggur memiliki <strong>bintik-bintik terang</strong> yang akhirnya membentuk <em>pycnidia</em>; anggur mengeras dan menghitam namun tetap berada di pohon anggur.</p>`,
				prevention: `<p><strong>Menanam varietas yang tidak terlalu peka</strong> (misalnya, <em>Cayuga</em>, <em>Elvira</em>, <em>Verona</em>, <em>Vidal</em>) dapat mengurangi masalah busuk hitam.</p><p><strong>Lakukan rotasi tanaman</strong> jika memungkinkan untuk mengurangi akumulasi patogen dalam tanah.</p>`,
				treatment: `<ul><li><strong>Buang semua buah yang menjadi mumi</strong> dari tanaman merambat selama pemangkasan yang tidak aktif.</li><li><strong>Olah tanah selama pemutusan tunas</strong> untuk mengubur mumi dan mengurangi inokulan.</li></ul>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Rot/Grape_Black%20Rot.jpg',
			},
			{
				id: 14,
				plant_id: 5,
				name: 'Black Measles (Esca)',
				description: `<p>Penyakit ini disebabkan oleh jamur. Pada daun, kita akan melihat garis-garis intervenaial yang terlihat seperti garis-garis macan. Kultivar putih menunjukkan garis-garis klorotik dan nekrotik, sedangkan kultivar merah menunjukkan area merah dan garis-garis nekrotik.</p><p>Pada buah beri, kita akan melihat bintik-bintik yang dangkal dan kemudian dapat menyatu sehingga buah tampak hitam.</p><p>Batang/lengan/pucuk menunjukkan garis-garis pembuluh darah berwarna coklat tua dan mengeluarkan getah berwarna gelap saat kita memotong batang. Kadang-kadang campak ini berasosiasi dengan banyak jamur pembusuk kayu sekunder yang menghiasi kebun anggur sepenuhnya.</p>`,
				prevention: `<ul><li>Pilih varietas anggur yang tahan terhadap penyakit ini.</li><li>Lakukan pemupukan yang tepat dan jaga kelembaban tanah agar tidak berlebihan.</li></ul>`,
				treatment: `<ul><li>Buang buah, daun, dan batang yang terinfeksi, lalu hancurkan.</li><li>Menerapkan sanitasi kebun dengan menjaga kebersihan area tanam.</li></ul>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Measles%20(Esca)/Grape_Black%20Measles%20(Esca).jpg',
			},
			{
				id: 15,
				plant_id: 5,
				name: 'Isariopsis Leaf Spot (Leaf blight)',
				description: `<p>Penyakit ini muncul di akhir musim. Cynthiana dan Cabernet Sauvignon rentan terhadap patogen ini.</p><h4>Tanda-Tanda</h4><p>Pada permukaan daun akan terlihat bercak-bercak yang bentuknya tidak beraturan (diameter 2 sampai 25 mm).</p><p>Awalnya lesi berwarna merah kusam sampai coklat kemudian berubah menjadi hitam. Jika penyakitnya parah, lesi ini dapat menyatu.</p><p>Pada buah beri kita dapat melihat gejala yang mirip dengan busuk hitam tetapi seluruh tandan akan runtuh.</p>`,
				prevention: `<ul><li>Jaga sirkulasi udara di sekitar tanaman dengan memangkas daun yang terlalu rimbun.</li><li>Pastikan tidak ada genangan air di sekitar akar tanaman.</li></ul>`,
				treatment: `<ul><li>Buang dan hancurkan daun, buah, dan batang yang terinfeksi untuk mengurangi inokulum di kebun anggur.</li><li>Lindungi luka pemangkasan dengan fungisida atau penyegel luka (misalnya, asam borat 5% dalam cat akrilik) untuk meminimalkan risiko infeksi selama pemangkasan.</li><li>Pangkas saat cuaca kering untuk mengurangi kelembapan di sekitar luka.</li><li>Pantau gejala secara teratur sepanjang musim tanam, terutama di akhir musim panas ketika kondisinya mendukung perkembangan penyakit.</li></ul>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Isariopsis%20Leaf%20Spot/Grape_Isariopsis%20Leaf%20Spot.jpg',
			}
		],
		appleDisease: [
			{
				id: 16,
				plant_id: 6,
				name: 'Black Rot',
				description: `<p>Bintik-bintik ungu atau lesi melingkar yang berwarna cokelat di bagian tengah dan ungu di pinggirannya; bintik-bintik merah, lesi ungu, dan/atau cincin hitam cokelat pada buah.</p>`,
				prevention: `<p>Lakukan pemangkasan secara teratur untuk meningkatkan sirkulasi udara di antara tanaman, sehingga mengurangi kelembapan di sekitar daun dan buah.</p>`,
				treatment: `<p>Buang kayu mati, buah yang sudah menjadi mumi, dan penyakit dari pohon untuk mengurangi penyebaran penyakit; bakar semua pangkasan yang telah dibuat dari pohon.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Black%20Rot/Apple_Black%20Rot.jpg',
			},
			{
				id: 17,
				plant_id: 6,
				name: 'Cedar Apple Rust',
				description: `<p>Disebabkan oleh jamur. Bercak oranye atau kuning cerah di sisi atas daun dikelilingi oleh pita merah dan bintik-bintik hitam kecil di tengahnya; pada pertengahan musim panas, struktur seperti cangkir yang disebut <em>aecia</em> terbentuk di bagian bawah daun; ini menjadi tertutup oleh struktur tubular tempat keluarnya spora.</p>`,
				prevention: `<p>Sayangnya, pilihan organik yang efektif tidak tersedia.</p>`,
				treatment: `<p>Tanam varietas tahan jika memungkinkan; singkirkan pohon cedar merah di dekatnya.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/Apple_Cedar%20Apple%20Rust.jpg',
			},
			{
				id: 18,
				plant_id: 6,
				name: 'Apple Scab',
				description: `<p>Disebabkan <em>jamur</em>. Bercak kuning atau klorotik pada daun; bercak hijau zaitun gelap pada daun dan buah; dapat berupa pertumbuhan seperti beludru pada bercak di bagian bawah daun; daun terpelintir; daun terdistorsi; daun yang terinfeksi parah menguning dan jatuh dari pohon.</p>`,
				prevention: `<p><strong>Mengaplikasikan fungisida secara berkala</strong>, sebaiknya sebelum acara pembasahan. <strong>Merobek-robek serasah daun</strong> dengan menggunakan mesin pemotong rumput.</p>`,
				treatment: `<p>Untuk menggunakan Fungisida <strong>Tembaga Kuproxat 345 SC</strong>, larutkan dosis yang dianjurkan, biasanya antara 2-4 ml per liter air, tergantung pada jenis tanaman dan penyakit yang ingin dikendalikan. Aplikasikan larutan melalui penyemprotan pada bagian tanaman yang terinfeksi, seperti daun dan batang, atau sebagai tindakan pencegahan sebelum gejala muncul.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Scab/Apple_Scab.jpg',
			}
		],
		orangeDisease: [
			{
				id: 19,
				plant_id: 7,
				name: 'Huanglongbing',
				description: `<p><strong>Huanglogbing</strong> disebabkan oleh bakteri. Gejala daun pada tanaman jeruk antara lain menguning pada satu dahan atau satu area kanopi, urat daun menguning, bercak-bercak dan/atau pulau-pulau hijau yang dikelilingi oleh jaringan daun yang seluruhnya berwarna kuning, ranting dan dahan mulai mati, buah jatuh sebelum waktunya, dan sering kali tidak sempurna serta miring, buah terasa pahit dan asin.</p>`,
				prevention: `<p>Lakukan pengendalian terhadap <strong>kutu loncat jeruk</strong> (<em>Diaphorina citri</em>) yang merupakan vektor utama penyebaran HLB. Penggunaan insektisida yang tepat dan pemantauan rutin dapat membantu mengendalikan populasi vektor ini.</p>`,
				treatment: `<p>Memeriksa kebun setidaknya 4 kali dalam setahun untuk mengetahui adanya gejala penyakit.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Orange_Huanglongbing/Orange_Huanglongbing.jpg',
			}
		],
		potatoDisease: [
			{
				id: 20,
				plant_id: 8,
				name: 'Early Blight',
				description: `<p><strong>Penyakit busuk daun</strong> (<em>early blight</em>) dapat menyebabkan kerusakan parah pada kentang dan gejalanya dapat terjadi pada salah satu bagian tanaman di atas tanah termasuk daun, batang, dan buah. Lesi dimulai dengan bagian kuning kecil pada daun yang mulai berubah menjadi coklat, dan ini terutama terlihat pada daun yang dekat dengan tanah.</p>`,
				prevention: `<p><strong>Gunakan benih sehat</strong>: Pastikan benih kentang bebas dari penyakit dan berasal dari sumber terpercaya.</p><p><strong>Rotasi tanaman</strong>: Hindari penanaman kentang berturut-turut di lahan yang sama, dan lakukan rotasi dengan tanaman non-rentan.</p><p><strong>Pastikan drainase baik</strong>: Pastikan lahan memiliki drainase yang baik untuk mengurangi kelembaban berlebih yang mendukung pertumbuhan jamur.</p><p><strong>Pemangkasan daun terinfeksi</strong>: Segera buang daun yang terinfeksi untuk mencegah penyebaran penyakit.</p>`,
				treatment: `<p>Lakukan <strong>rotasi tanaman</strong>, tingkatkan <strong>sirkulasi udara</strong> dengan jarak tanam yang tepat, dan hindari <strong>irigasi di atas kepala</strong> untuk mengurangi kebasahan daun.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Early%20Blight/Potato_Early%20Blight.jpg',
			},
			{
				id: 21,
				plant_id: 8,
				name: 'Late Blight',
				description: `<p>Penyakit ini disebabkan oleh jamur <em>Phytophthora infestans</em> dan sering muncul saat kelembapan tinggi. <strong>Busuk daun</strong> dapat menyebar cepat dan menyebabkan daun, batang, serta buah membusuk. Untuk gejalanya, muncul bercak coklat atau hitam pada daun dan batang, daun layu dan mati secara bertahap, serta berwarna hitam dan membusuk.</p>`,
				prevention: `<p>Pantau kondisi cuaca dengan cermat; gunakan fungisida secara preventif selama cuaca basah. Hancurkan tumpukan sampah dan tanaman sukarela untuk mengurangi sumber infeksi.</p>`,
				treatment: `<p>Pastikan kebersihan lapangan yang baik dengan membuang tanaman yang terinfeksi.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Late%20Blight/Potato_Late%20Blight.jpg',
			}
		],
		cornDisease: [
			{
				id: 22,
				plant_id: 9,
				name: 'Cercospora Leaf Spot (Gray Leaf Spot)',
				description: `<p><strong>Bercak daun abu-abu</strong> biasanya merupakan penyakit daun jagung yang paling serius di sabuk jagung AS, meskipun penyakit lain dapat lebih penting di daerah dan tahun-tahun di mana kondisi cuaca tidak mendukung bercak daun abu-abu. Bercak daun abu-abu membutuhkan periode kelembaban tinggi dan kondisi hangat yang panjang.</p>`,
				prevention: `<p>Pastikan <strong>sistem drainase</strong> baik untuk menghindari genangan air di lahan, karena kelembapan berlebih dapat meningkatkan risiko infeksi.</p>`,
				treatment: `<p><strong>Rotasi tanaman</strong> dengan tanaman bukan inang, kelola residu dengan mengolah tanah di bawah sisa-sisa jagung, dan pertahankan <strong>sirkulasi udara yang baik</strong> di ladang.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Grey%20Leaf%20Spot/Corn_Grey%20Leaf%20Spot.png',
			},
			{
				id: 23,
				plant_id: 9,
				name: 'Common Rust',
				description: `<p><strong>Penyakit Karat Jagung</strong> (<em>Common Rust</em>) menjadi penyakit kedua terpenting setelah penyakit bulai. Penyakit karat pada tanaman jagung disebabkan oleh cendawan <em>Puccinia polysora</em> dan <em>Puccinia sorghi</em>. Penyakit ini sering menjadi penyebab utama menurunnya hasil produksi di beberapa sentra produksi tanaman jagung di Indonesia. Hal ini dikarenakan cendawan yang tumbuh pada bagian tanaman akan mengakibatkan tanaman jagung tidak dapat melakukan proses fotosintesis secara sempurna sehingga pertumbuhannya melambat dan produksi yang dihasilkan rendah.</p>`,
				prevention: `<p>Gunakan fungisida yang sesuai pada awal musim tanam atau saat gejala awal muncul. Penyemprotan fungisida dapat membantu mengendalikan penyebaran penyakit jika dilakukan dengan tepat.</p>`,
				treatment: `<p>Terapkan <strong>rotasi tanaman</strong> dan hindari menanam jagung di lahan yang sama secara berurutan.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Common%20Rust/Corn_Common%20Rust.png',
			},
			{
				id: 24,
				plant_id: 9,
				name: 'Northern Corn Leaf Blight',
				description: `<p>Penyakit hawar daun jagung utara (<em>northern corn leaf blight</em>, <strong>NCLB</strong>) merupakan penyakit jagung yang disebabkan oleh jamur <em>Exserohilum turcicum</em>.</p>`,
				prevention: `<p>Hindari genangan air di lahan karena kondisi lembab mendukung pertumbuhan jamur. Pastikan sistem drainase baik untuk mengurangi kelembapan berlebih.</p>`,
				treatment: `<p>Kelola sisa-sisa tanaman secara efektif dengan mengolah tanah di bawah puing-puing yang terinfeksi dan melakukan <strong>rotasi tanaman</strong>.</p>`,
				image: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Nothern%20Leaf%20Blight/Corn_Northern%20Leaf%20Blight.jpg',
			}
		],
	};

	for (const key in plantDisease) {
		plantDisease[key].forEach(async (disease) => {
			await prisma.plantDisease.upsert({
				where: { id: disease.id },
				update: {},
				create: disease,
			});
			console.log(`${key} Disease ${disease.name} seeded`);
		});
	}
};

module.exports = seedPlantDiseases;