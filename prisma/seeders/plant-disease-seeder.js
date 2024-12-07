const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPlantDiseases() {
	const plantDisease = {
		tomatoDisease: [
			{
				id: 1,
				plant_id: 1,
				name: 'Bacterial Spot',
				description: '<p>Penyakit bercak bakteri (bacterial spot) pada daun tanaman tomat disebabkan oleh bakteri Xanthomonas sp., ditandai dengan munculnya bercak-bercak kecil berair pada permukaan daun. Bercak ini lama-kelamaan akan mengering, berubah menjadi cekungan berwarna cokelat keabu-abuan dengan ukuran diameter sekitar 1-5 mm. Akibatnya, daun tomat menjadi kering dan melengkung ke bawah.</p>',
				prevention: `<p>Untuk mencegah penyakit bercak bakteri pada tanaman tomat, disarankan untuk melakukan sanitasi yang baik dengan membersihkan peralatan dan peralatan pertanian sebelum digunakan. Selain itu, hindari menyiram tanaman dari atas dan hindari menyentuh tanaman saat daunnya basah. Jaga kebersihan lingkungan sekitar tanaman dengan membersihkan gulma dan sisa tanaman yang terinfeksi. Pemilihan varietas tomat yang tahan terhadap penyakit bercak bakteri juga sangat dianjurkan. Dengan menerapkan langkah-langkah ini, risiko infeksi bakteri pada tanaman tomat dapat diminimalisir.</p>`,
				treatment: `<p>Untuk mengatasi Bacterial Spot pada daun tomat, gunakan fungisida berbahan tembaga secara berkala untuk menghambat penyebaran bakteri. Pangkas dan buang daun yang terinfeksi, serta pastikan tanaman memiliki jarak yang cukup untuk sirkulasi udara optimal. Lakukan penyiraman di pangkal tanaman dan hindari membasahi daun. Terapkan rotasi tanaman untuk mencegah penumpukan bakteri di tanah dan pilih varietas tomat yang tahan terhadap Bacterial Spot jika tersedia.</p>`,
				image: '',
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
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIHsfBUtCVB_7M8sxfe6d7juHAUwy_ffrzA&s',
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
				image: 'https://th.bing.com/th/id/OIP.RvrJrX60Vr9N2NC_JdsLHAHaF0?rs=1&pid=ImgDetMain',
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
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtAQlNhpGebJgNH01lB3UiKFPCdOr9Db5fw&s',
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
				image: 'https://th.bing.com/th/id/R.a4c244a20e9e5d965a970e0a533a38c6?rik=cbezLGBnrvdr5w',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: 6,
				plant_id: 1,
				name: 'Spider mites (two spotted)',
				description: '<p>Tungau laba-laba berbintik dua (two spotted) (TSSM; Tetranychus urticae) adalah hama arthropoda polifagus yang ada di mana-mana yang memiliki dampak ekonomi besar pada industri tomat (Solanum lycopersicum). Indeks kerusakan yang disebabkan oleh tungau laba-laba berbintik dua (Tetranychus urticae) pada tomat dijelaskan untuk memberikan informasi untuk pengendalian biologis menggunakan tungau predator Phyto- seiulus persimilis. Derajat skala 1-5 untuk kerusakan pada selebaran dan daun, yang ketika diintegrasikan ke tanaman dapat membedakan lima puluh kelas kerusakan (0,0-5,0), ditandai dengan sejumlah tungau dan oleh struktur populasi.</p>',
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 7,
				plant_id: 1,
				name: 'Target Spot',
				description: `<p>Penyakit ini dimulai pada daun yang lebih tua dan menyebar ke atas. Tanda-tanda pertama adalah bintik-bintik berbentuk tidak beraturan (kurang dari 1mm) dengan garis kuning. Beberapa bintik membesar hingga 10 mm dan menunjukkan karakteristik cincin, oleh karena itu dinamakan "titik target(target spot)". Bintik-bintik juga terjadi pada batang. Mereka panjang dan kurus. Bintik-bintik kecil berwarna coklat muda dengan tepi gelap juga dapat terjadi pada buah.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 8,
				plant_id: 1,
				name: 'Tomato Yellow Leaf Curl Virus',
				description: `<p>virus keriting daun kuning tomat atau yang bisa disebut dengan tomato yellow leaf curl virus (TYLCV) adalah virus DNA dari genus Begomovirus dan famili Geminiviridae. TYLCV menyebabkan penyakit tomat yang paling merusak, dan dapat ditemukan di daerah tropis dan subtropis yang menyebabkan kerugian ekonomi yang parah. Virus ini ditularkan oleh vektor serangga dari famili Aleyrodidae dan ordo Hemiptera, kutu kebul Bemisia tabaci, umumnya dikenal sebagai kutu kebul daun perak atau kutu kebul ubi jalar. Inang utama TYLCV adalah tanaman tomat.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 9,
				plant_id: 1,
				name: 'Mosaic Virus',
				description: `<p>Virus mosaik tomat (Mosaic Virus) adalah penyakit serius dan sangat menular. Ini juga sulit untuk diidentifikasi, dengan gejala yang sangat bervariasi tergantung pada varietas dan usia tanaman yang terinfeksi, jenis virus, dan kondisi lingkungan. Gejala virus mosaik tomat dapat ditemukan pada setiap tahap pertumbuhan dan semua bagian tanaman dapat terinfeksi. Mereka sering dilihat sebagai bintik-bintik umum atau penampilan mosaik pada dedaunan. Daun juga bisa menjadi kerdil. Tanaman yang terinfeksi mungkin mengalami penurunan buah yang parah dan tanaman yang mengeras mungkin dihiasi dengan bercak kuning dan bintik-bintik nekrotik sementara bagian dalam buah berwarna coklat.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		strawberryDisease: [
			{
				id: 10,
				plant_id: 2,
				name: 'Leaf Scorch',
				description: `<p>Leaf Scroch atau bisa disebut juga dengan daun hangus disebabkan oleh jamur Diplocarpon earliana. Gejalanya dapat disalahartikan sebagai bercak daun biasa, yang disebabkan oleh M.fragariae. Beberapa bintik-bintik kecil, tidak beraturan, dan keunguan hingga cokelat atau "bercak" (diameter 1-5mm) berkembang di permukaan atas daun. Berbeda dengan bercak daun biasa, bagian tengah bercak tetap ungu atau perlahan-lahan mengembangkan pusat kecil kecoklatan. Ketika bercak banyak dan mulai bergabung, jaringan di antara luka daun (lesi) berubah menjadi merah cerah menjadi coklat. Dalam kasus yang parah, seluruh daun melengkung di tepi, berubah menjadi coklat, dan mendapatkan penampilan yang terbakar (hangus).</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		bellPepperDisease: [
			{
				id: 11,
				plant_id: 3,
				name: 'Bacterial Spot',
				description: `<p>Bakteri Xanthomonas campestris pv. Vesicatoria menyebabkan bintik-bintik bakteri. Infeksi bakteri ini dapat menyebabkan kerusakan pada tanaman dan buah yang dihasilkan.  Gejala yang muncul jika terinfeksi di bintik-bintik dapat ditemukan di hampir semua bagian tanaman, termasuk daun dan buah. Mengenali penyakit ini dapat dilihat secara langsung atau melalui pengujian laboratorium. Penyakit ini mengakibatkan prematur kerontokan daun tanaman yang terinfeksi dan bercak buah, sehingga mengurangi kualitas dan kuantitas buah.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		squashDisease: [
			{
				id: 12,
				plant_id: 4,
				name: 'Powdery Mildew',
				description: `<p>Tanda-tanda tanaman labu yang terserang embun tepung (powdery mildew) adalah pada permukaan daun dan batang terdapat lapisan tipis seperti tepung yang lama kelamaan bercak yang ditimbulkan pada embun tepung ini akan mengalami pengeringan jika tanaman ini cenderung berat, daun muda dan batang akan mati, hal ini akan mengalami penularan ke tanaman lain. Proses pertumbuhannya menempel satu sama lain. Yang disebabkan oleh embun tepung adalah pada tanaman yang sudah berbuah akan mengalami masak yang belum pada waktunya, tanaman menjadi lemah dan pertumbuhan akan terhambat.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		grapeDisease: [
			{
				id: 13,
				plant_id: 5,
				name: 'Black Rot (Bercak Daun)',
				description: `<p>Lesi coklat pada daun yang mengembangkan titik-titik hitam (pycnidia); anggur memiliki bintik-bintik terang yang akhirnya membentuk pycnidia; anggur mengeras dan menghitam namun tetap berada di pohon anggur dan tidak jatuh</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 14,
				plant_id: 5,
				name: 'Black Measles (Esca/Campak Hitam)',
				description: `<p>Disebabkan oleh jamur. Pada daun kita akan melihat garis-garis intervenaial yang terlihat seperti garis-garis macan. Kultivar putih menunjukkan garis-garis klorotik dan nekrotik, sedangkan kultivar merah menunjukkan area merah dan garis-garis nekrotik. Pada buah beri kita akan melihat bintik-bintik yang dangkal dan kemudian dapat menyatu sehingga buah tampak hitam. Batang/lengan/pucuk menunjukkan garis-garis pembuluh darah berwarna coklat tua dan mengeluarkan getah berwarna gelap saat kita memotong batang. Kadang-kadang campak ini berasosiasi dengan banyak jamur pembusuk kayu sekunder yang menghiasi kebun anggur sepenuhnya.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 15,
				plant_id: 5,
				name: 'Isariopsis Leaf Spot (Leaf blight)',
				description: `<p>Disebabkan jamur. Penyakit ini muncul di akhir musim. Cynthiana dan Cabernet Sauvignon rentan terhadap patogen ini. Pada permukaan daun akan terlihat bercak-bercak yang bentuknya tidak beraturan (diameter 2 sampai 25 mm). Awalnya lesi berwarna merah kusam sampai coklat kemudian berubah menjadi hitam. Jika penyakitnya parah, lesi ini dapat menyatu. Pada buah beri kita dapat melihat gejala yang mirip dengan busuk hitam tetapi seluruh tandan akan runtuh.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		appleDisease: [
			{
				id: 16,
				plant_id: 6,
				name: 'Black Rot',
				description: `<p>Bintik-bintik ungu atau lesi melingkar yang berwarna cokelat di bagian tengah dan ungu di pinggirannya; bintik-bintik merah, lesi ungu, dan/atau cincin hitam cokelat pada buah.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 17,
				plant_id: 6,
				name: 'Cedar Apple Rust',
				description: `<p>Disebabkan jamur. Bercak oranye atau kuning cerah di sisi atas daun dikelilingi oleh pita merah dan bintik-bintik hitam kecil di tengahnya; pada pertengahan musim panas, struktur seperti cangkir yang disebut aecia terbentuk di bagian bawah daun; ini menjadi tertutup oleh struktur tubular tempat keluarnya spora.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 18,
				plant_id: 6,
				name: 'Apple Scab',
				description: `<p>Disebabkan jamur. Bercak kuning atau klorotik pada daun; bercak hijau zaitun gelap pada daun dan buah; dapat berupa pertumbuhan seperti beludru pada bercak di bagian bawah daun; daun terpelintir; daun terdistorsi; daun yang terinfeksi parah menguning dan jatuh dari pohon.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		orangeDisease: [
			{
				id: 19,
				plant_id: 7,
				name: 'Huanglongbing',
				description: `<p>Disebabkan oleh bakteri. Gejala daun pada tanaman jeruk antara lain menguning pada satu dahan atau satu area kanopi, urat daun menguning, bercak-bercak bercak dan/atau pulau-pulau hijau yang dikelilingi oleh jaringan daun yang seluruhnya berwarna kuning, ranting dan dahan mulai mati, buah jatuh sebelum waktunya, dan sering kali tidak sempurna serta miring, buah terasa pahit dan asin.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		potatoDisease: [
			{
				id: 20,
				plant_id: 8,
				name: 'Early Blight',
				description: `<p>Penyakit busuk daun(early blight) dapat menyebabkan kerusakan parah pada kentang dan gejalanya dapat terjadi pada salah satu bagian tanaman di atas tanah termasuk daun, batang dan buah. Lesi dimulai dengan bagian kuning kecil pada daun yang mulai berubah menjadi coklat, dan ini terutama terlihat pada daun yang dekat dengan tanah.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 21,
				plant_id: 8,
				name: 'Late Blight',
				description: `<p>Penyakit ini disebabkan oleh jamur Phytophthora infestans dan sering muncul saat kelembapan tinggi. Busuk daun dapat menyebar cepat dan menyebabkan daun, batang, serta buah membusuk. Untuk gejalanya itu muncul bercak coklat atau hitam pada daun dan batang, daun layu dan mati secara bertahap, serta berwarna hitam dan membusuk.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			}
		],
		cornDisease: [
			{
				id: 22,
				plant_id: 9,
				name: 'Cercospora Leaf Spot (Gray Leaf Spot)',
				description: `<p>Bercak daun abu-abu biasanya merupakan penyakit daun jagung yang paling serius di sabuk jagung AS, meskipun penyakit lain dapat lebih penting di daerah dan tahun-tahun di mana kondisi cuaca tidak mendukung bercak daun abu-abu. Bercak daun abu-abu membutuhkan periode kelembaban tinggi dan kondisi hangat yang panjang untuk berkembang. Bercak daun abu-abu dapat menyebabkan kerugian hasil yang signifikan jika tidak dikelola dengan benar.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 23,
				plant_id: 9,
				name: 'Common Rust',
				description: `<p>Penyakit Karat Jagung (Common Rust) menjadi penyakit kedua terpenting setalah penyakit bulai. Penyakit karat pada tanaman jagung disebabkan oleh cendawan Puccinia polysora dan Puccinia sorghi. Penyakit ini sering menjadi penyebab utama menurunnya hasil produksi di beberapa sentra produksi tanaman jagung di Indonesia. Hal ini dikarenakan cendawan yang tumbuh pada bagian tanaman akan mengakibatkan tanaman jagung tidak dapat melakukan proses fotosintesis secara sempurna sehingga pertumbuhannya melambat dan produksi yang dihasilkan rendah.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
			},
			{
				id: 24,
				plant_id: 9,
				name: 'Northern Corn Leaf Blight',
				description: `<p>Penyakit hawar daun jagung utara (NCLB) merupakan penyakit jagung yang disebabkan oleh jamur Exserohilum turcicum. Penyakit ini dapat menyebabkan kerugian yang signifikan pada tanaman jagung, terutama jika kondisi cuaca lembab dan hangat. Gejala penyakit ini biasanya muncul pada daun tanaman jagung, tetapi juga dapat terjadi pada batang dan malai jagung. Penyakit hawar daun jagung utara dapat diidentifikasi berdasarkan gejala yang muncul pada tanaman jagung.</p>`,
				prevention: ``,
				treatment: ``,
				image: '',
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