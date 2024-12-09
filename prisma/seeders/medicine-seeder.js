const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedMedicines = async () => {
	const medicines = [
		{
			id: 1,
			disease_id: 1, // Tomato Bacterial Spot
			name: 'Pestisida seperti Copper Hydroxide 50% WP atau Copper Oxychloride 50% WP',
			description: `<p>Pestisida adalah bahan kimia yang digunakan untuk mengendalikan hama, penyakit, atau gulma yang merugikan tanaman.</p><ul><li>Copper Hydroxide 50% WP adalah fungisida berbahan aktif tembaga hidroksida dengan kandungan 50%, berbentuk bubuk yang dapat disuspensikan (WP). Copper Hydroxide efektif mengendalikan penyakit seperti bercak daun, antraknosa, busuk buah, dan hawar bakteri pada tanaman seperti tomat, cabai, kentang, dan hortikultura lainnya.</li><li>Copper Oxychloride 50% WP adalah fungisida berbahan aktif tembaga oksiklorida dengan kandungan 50%, juga berbentuk bubuk yang dapat disuspensikan. Copper Oxychloride lebih stabil di permukaan daun dan cenderung lebih terjangkau secara harga dibandingkan Copper Hydroxide, meskipun penyerapannya lebih lambat.Copper Oxychloride lebih stabil di permukaan daun dan cenderung lebih terjangkau secara harga dibandingkan Copper Hydroxide, meskipun penyerapannya lebih lambat.</li></ul>`,
			usage_tips: `<ul><li>Takaran: Ikuti petunjuk pada kemasan produk, biasanya sekitar 20-30 gram per liter air.</li><li>Frekuensi penyemprotan: Lakukan penyemprotan setiap 7-14 hari sekali, tergantung pada kondisi cuaca dan tingkat infeksi. Jika hujan sering turun, penyemprotan perlu lebih sering dilakukan.</li><li>Waktu penyemprotan: Lakukan pada pagi atau sore hari, ketika kelembaban tinggi tetapi suhu tidak terlalu panas.</li></ul>`,
		},
		{
			id: 2,
			disease_id: 2, // Tomato Early Blight
			name: 'Fungisida seperti Chlorothalonil atau Mancozeb',
			description: `<p>Fungisida adalah bahan kimia yang digunakan untuk mengendalikan infeksi jamur pada tanaman. Fungisida ini membantu mencegah atau mengobati penyakit yang disebabkan oleh jamur, seperti bercak daun, embun tepung, dan busuk akar.</p><p>Contoh produk:</p><p>- Chlorothalonil merupakan fungisida berspektrum luas yang efektif mengendalikan berbagai jenis jamur patogen pada tanaman.</p><p>- Mancozeb merupakan fungisida berbahan dasar dithiocarbamate yang efektif untuk mencegah dan mengendalikan penyakit jamur pada tanaman pangan dan hortikultura.</p>`,
			usage_tips: `<ul><li>Campurkan fungisida sesuai dengan dosis yang tertera pada kemasan (biasanya antara 2-3 gram per liter air).</li><li>Semprotkan secara merata pada daun, batang, dan area sekitar pangkal tanaman. Fokuskan pada daun yang menunjukkan gejala awal.</li><li>Lakukan penyemprotan secara berkala, setiap 7-10 hari sekali selama cuaca lembab atau pada musim hujan, karena jamur ini cenderung tumbuh pada kondisi basah.</li></ul>`,
		},
		{
			id: 3,
			disease_id: 3, // Tomato Late Blight
			name: 'Fungisida berbasis tembaga atau Fosetil-Aluminium',
			description: `<p>Fungisida berbasis tembaga atau fosetil-aluminium adalah jenis fungisida yang efektif untuk mencegah dan mengendalikan berbagai penyakit jamur pada tanaman.</p><p>Fungisida berbasis tembaga bekerja dengan menghambat aktivitas enzim jamur, sedangkan fosetil-aluminium meningkatkan pertahanan alami tanaman terhadap infeksi.</p><p>Contoh produk:</p><ul><li><strong>Dithane M-45 (Mancozeb)</strong> merupakan fungisida protektif untuk berbagai penyakit daun.</li><li><strong>Kocide 3000</strong> merupakan fungisida berbahan aktif tembaga untuk pengendalian penyakit bakteri dan jamur.</li><li><strong>Copper Oxychloride</strong> merupakan fungisida tembaga yang cocok untuk penyakit bercak daun dan busuk buah.</li><li><strong>Metalaxyl-M dan Mancozeb</strong> merupakan kombinasi untuk pengendalian penyakit yang menyerang akar dan daun.</li></ul>`,
			usage_tips: `<ul><li>Semprotkan pada daun dan batang tanaman, terutama pada bagian yang sudah terinfeksi. Ikuti dosis yang tertera pada kemasan (biasanya sekitar 3-4 gram per liter air).</li><li>Lakukan penyemprotan setiap 7-10 hari sekali, atau lebih sering jika cuaca sangat lembab.</li></ul>`,
		},
		{
			id: 4,
			disease_id: 4, // Tomato Leaf Mold
			name: 'Fungisida berbasis tembaga atau berbahan aktif Chlorothalonil',
			description: `<p>Fungisida adalah bahan kimia yang digunakan untuk mengendalikan infeksi jamur pada tanaman. Fungisida ini membantu mencegah atau mengobati penyakit yang disebabkan oleh jamur, seperti bercak daun, embun tepung, dan busuk akar.</p><p>Berikut adalah deskripsi detail untuk masing-masing produk fungisida:</p><ol><li><strong>Fungisida berbasis tembaga</strong><p>Fungisida berbasis tembaga efektif untuk mengendalikan berbagai penyakit jamur dan bakteri pada tanaman. Tembaga bekerja dengan mengganggu enzim dalam sel jamur, mencegah jamur berkembang biak. Fungisida tembaga banyak digunakan untuk pengendalian penyakit seperti bercak daun, busuk buah, dan penyakit lain yang disebabkan oleh jamur dan bakteri.</p><p>Contoh produk:</p><ul><li><strong>Kocide 3000</strong> merupakan fungisida berbahan aktif tembaga hidroksida yang bekerja efektif terhadap penyakit jamur dan bakteri pada tanaman seperti tomat, kentang, dan sayuran lainnya.</li><li><strong>Copper Oxychloride</strong> merupakan fungisida tembaga yang sering digunakan untuk mengendalikan penyakit jamur dan bakteri pada tanaman hortikultura. Produk ini bekerja dengan menghambat perkembangan patogen di permukaan tanaman.</li></ul></li><li><strong>Chlorothalonil</strong><p>Chlorothalonil adalah fungisida kontak yang efektif melawan berbagai penyakit jamur pada tanaman. Fungisida ini memiliki spektrum luas dan digunakan untuk melindungi tanaman dari infeksi jamur yang menyebabkan penyakit seperti bercak daun, embun tepung, dan <em>Leaf Mold</em>. Chlorothalonil bekerja dengan mencegah spora jamur menempel dan berkembang di tanaman.</p><p>Contoh produk:</p><ul><li><strong>Daconil</strong> merupakan fungisida berbahan aktif chlorothalonil yang digunakan untuk melindungi tanaman dari berbagai penyakit jamur, termasuk <em>Leaf Mold</em> pada tomat. Daconil efektif untuk penggunaan preventif dan pengendalian penyakit yang sudah terinfeksi.</li><li><strong>Bravo</strong> merupakan fungisida berbahan aktif chlorothalonil yang juga digunakan untuk mengendalikan berbagai penyakit jamur pada tanaman. Bravo sangat efektif dalam mencegah infeksi jamur pada tanaman pangan dan hortikultura.</li></ul></li></ol>`,
			usage_tips: `<ul><li>Campurkan fungisida sesuai dosis yang tertera pada label (biasanya sekitar 2-3 gram atau ml per liter air).</li><li>Semprotkan larutan pada bagian atas dan bawah daun secara merata, terutama di bagian daun yang sudah terinfeksi.</li><li>Ulangi aplikasi setiap 7-10 hari selama kondisi cuaca lembap.</li></ul>`,
		},
		{
			id: 5,
			disease_id: 5, // Tomato Septoria Leaf Spot
			name: 'Fungisida berbahan aktif Chlorothalonil, Mancozeb, atau Tebuconazole.',
			description: `<p>Fungisida berbahan aktif chlorothalonil, mancozeb, atau tebuconazole adalah pilihan efektif untuk mengendalikan berbagai penyakit jamur pada tanaman.</p><ul><li><strong>Chlorothalonil</strong> digunakan sebagai fungisida protektif berspektrum luas untuk melindungi daun dan batang dari infeksi.</li><li><strong>Mancozeb</strong> berbasis sulfur, cocok untuk mencegah bercak daun dan hawar.</li><li><strong>Tebuconazole</strong> merupakan fungisida sistemik yang bekerja dengan menghentikan pertumbuhan jamur dari dalam tanaman.</li></ul><p>Produk ini sering digunakan secara bergantian untuk mencegah resistensi jamur.</p>`,
			usage_tips: `<ul><li>Semprotkan fungisida pada daun dan batang tanaman, terutama bagian yang terinfeksi. Ikuti dosis yang tertera pada kemasan (umumnya sekitar 2-3 gram per liter air).</li><li>Lakukan penyemprotan setiap 7-10 hari, terutama setelah hujan atau saat kelembapan tinggi.</li></ul>`,
		},
		{
			id: 6,
			disease_id: 6, // Spider Mites (Two Spotted)
			name: 'Insektisida yang mengandung Abamectin, Spiromesifen, atau Imidacloprid. Selain itu, produk berbasis minyak neem juga efektif.',
			description: `<p>Insektisida yang mengandung bahan aktif seperti abamectin, spiromesifen, imidacloprid, serta produk berbasis minyak neem efektif untuk mengendalikan berbagai jenis hama pada tanaman. Berikut adalah deskripsi detail untuk masing-masing bahan aktif dan produk:</p><ol><li><strong>Abamectin</strong><br /> Abamectin adalah insektisida yang termasuk dalam golongan avermektin, yang bekerja dengan cara menghambat sistem saraf hama. Abamectin sangat efektif untuk mengendalikan berbagai jenis hama penghisap dan penggigit seperti kutu daun, tungau, dan thrips. Insektisida ini bekerja dengan merusak fungsi saraf hama, mengakibatkan kelumpuhan dan kematian.<br /> <strong>Contoh produk:</strong><br /> Produk berbahan abamectin digunakan dalam pengendalian hama pada tanaman seperti sayuran, buah-buahan, dan tanaman hias.</li><li><strong>Spiromesifen</strong><br /> Spiromesifen adalah insektisida sistemik yang bekerja dengan menghambat sintesis lipid dalam tubuh hama, mengganggu perkembangan dan reproduksi mereka. Insektisida ini efektif untuk mengendalikan hama seperti kutu kebul, kutu daun, dan whiteflies pada berbagai tanaman.<br /> <strong>Contoh produk:</strong><br /> Produk berbahan spiromesifen sering digunakan pada tanaman seperti tomat, cabai, dan buah-buahan tropis untuk mengatasi masalah hama penghisap.</li><li><strong>Imidacloprid</strong><br /> Imidacloprid adalah insektisida yang termasuk dalam golongan neonicotinoid, bekerja dengan cara menghambat transmisi sinyal saraf hama. Insektisida ini efektif melawan berbagai hama penghisap dan penggigit seperti kutu daun, kutu kebul, dan berbagai jenis serangga lainnya. Imidacloprid bekerja dengan sistemik, artinya dapat diserap oleh tanaman dan melindungi tanaman secara menyeluruh.<br /> <strong>Contoh produk:</strong><br /> Produk berbahan imidacloprid banyak digunakan pada tanaman sayuran, buah-buahan, dan tanaman hias untuk melawan hama penghisap dan penggigit.</li><li><strong>Minyak Neem</strong><br /> Minyak neem adalah insektisida alami yang terbuat dari biji pohon neem. Minyak neem mengandung senyawa aktif seperti azadirachtin yang mengganggu sistem hormon serangga, menghambat pertumbuhannya, dan mengurangi kemampuan reproduksi mereka. Selain itu, minyak neem juga memiliki efek repelen, mencegah serangga mendekati tanaman. Minyak neem efektif untuk mengendalikan berbagai hama seperti kutu daun, tungau, dan ulat.<br /> <strong>Contoh produk:</strong><br /> Produk berbasis minyak neem sering digunakan dalam pertanian organik dan dapat digunakan pada berbagai jenis tanaman, termasuk sayuran dan buah-buahan.</li></ol><p>Insektisida yang mengandung abamectin, spiromesifen, imidacloprid, dan minyak neem sangat berguna untuk mengendalikan hama dengan cara yang efektif, dengan pilihan bahan aktif yang beragam tergantung pada jenis hama yang dihadapi.</p>`,
			usage_tips: `<ul><li>Semprotkan insektisida pada daun atas dan bawah, serta batang tanaman. Ikuti dosis yang tertera pada kemasan (umumnya sekitar 1-2 ml per liter air).</li><li>Lakukan penyemprotan setiap 7-10 hari, atau lebih sering jika infestasi tinggi.</li><li>Sebaiknya semprotkan pada pagi hari atau sore hari untuk menghindari penguapan yang cepat.</li></ul>`,
		},
		{
			id: 7,
			disease_id: 7, // Target Spot
			name: 'Fungisida berbahan aktif seperti Chlorothalonil, Mancozeb, atau Pyraclostrobin.',
			description: `<p>Fungisida dengan bahan aktif seperti chlorothalonil, mancozeb, atau pyraclostrobin digunakan untuk mengendalikan berbagai penyakit jamur pada tanaman. Berikut adalah penjelasan detail tentang masing-masing bahan aktif:</p><h3>1. Chlorothalonil</h3><p>Chlorothalonil adalah fungisida kontak yang efektif untuk mengendalikan berbagai jenis penyakit jamur pada tanaman. Fungisida ini bekerja dengan cara menghambat spora jamur untuk berkembang biak, sehingga mencegah infeksi. Chlorothalonil digunakan untuk melindungi tanaman dari penyakit seperti bercak daun, embun tepung, dan Leaf Mold pada tomat.</p><p><strong>Contoh produk:</strong></p><ul><li>Daconil</li><li>Bravo</li></ul><h3>2. Mancozeb</h3><p>Mancozeb adalah fungisida berbasis dithiocarbamate yang memiliki spektrum luas dalam mengendalikan berbagai jenis penyakit jamur pada tanaman. Fungisida ini efektif dalam mencegah penyakit seperti bercak daun, hawar daun, dan busuk akar. Mancozeb bekerja dengan cara mengganggu proses metabolisme jamur dan mencegah pembentukan spora.</p><p><strong>Contoh produk:</strong></p><ul><li>Dithane M-45</li><li>Manzate</li></ul><h3>3. Pyraclostrobin</h3><p>Pyraclostrobin adalah fungisida sistemik yang termasuk dalam golongan strobilurin. Fungisida ini bekerja dengan menghambat respirasi sel jamur, yang mengarah pada kematian jamur tersebut. Pyraclostrobin digunakan untuk mengendalikan berbagai penyakit jamur pada tanaman dan memiliki daya protektif yang baik terhadap infeksi jamur.</p><p><strong>Contoh produk:</strong></p><ul><li>Cabrio</li><li>Headline</li></ul><p>Ketiga bahan aktif ini memiliki sifat yang berbeda, tetapi semuanya efektif untuk mencegah dan mengendalikan penyakit jamur pada tanaman, dengan penggunaan yang bergantung pada jenis penyakit yang dihadapi. Fungisida ini sering digunakan dalam pertanian untuk menjaga kesehatan tanaman dan mencegah kerusakan akibat infeksi jamur.</p>`,
			usage_tips: `<p>- Semprotkan fungisida pada daun dan batang tanaman, terutama pada bagian yang terinfeksi. Ikuti dosis yang tertera pada kemasan (umumnya sekitar 2-3 gram per liter air).</p><p>- Lakukan penyemprotan setiap 7-10 hari, terutama setelah hujan atau saat kelembapan tinggi, untuk mencegah infeksi lebih lanjut.</p>`,
		},
		{
			id: 8,
			disease_id: 8, // Tomato Yellow Leaf Curl Virus
			name: 'Insektisida Sistemik atau Kontak untuk mengendalikan kutu daun dan thrips yang dapat menyebarkan virus. Produk berbahan aktif seperti Imidacloprid atau Acetamiprid bisa efektif.',
			description: `<p>Insektisida sistemik dan kontak digunakan untuk mengendalikan serangga penghisap seperti kutu daun dan thrips, yang dapat menjadi vektor penyebaran virus pada tanaman. Insektisida dengan bahan aktif seperti imidacloprid dan acetamiprid efektif dalam menanggulangi serangga ini.</p><h3>1. Imidacloprid</h3><p>Imidacloprid adalah insektisida sistemik yang bekerja dengan cara diserap oleh tanaman dan mengalir melalui jaringan tanaman, sehingga dapat mengendalikan serangga yang memakan bagian tanaman tersebut. Ia menghambat sistem saraf serangga, menyebabkan kelumpuhan dan kematian.</p><h3>2. Acetamiprid</h3><p>Acetamiprid juga termasuk dalam kelompok neonicotinoid yang berfungsi serupa dengan imidacloprid, yaitu mengganggu fungsi sistem saraf serangga. Acetamiprid cenderung lebih selektif terhadap serangga sasaran dan memiliki efek residual yang lebih lama.</p><p>Kedua bahan aktif ini efektif dalam mengendalikan kutu daun dan thrips, serta membantu mencegah penyebaran virus tanaman.</p>`,
			usage_tips: `<ul><li>Semprotkan insektisida pada tanaman, terutama pada bagian yang terlihat terinfeksi. Ikuti dosis yang tertera pada kemasan.</li><li>Lakukan penyemprotan secara berkala, terutama saat populasi hama tinggi.</li></ul>`,
		},
		{
			id: 9,
			disease_id: 9, // Mosaic Virus
			name: 'Insektisida berbahan aktif seperti Imidacloprid, Acetamiprid, atau Spinosad dapat digunakan untuk mengendalikan serangga ini.',
			description: `<p>Insektisida sistemik atau kontak yang digunakan untuk mengendalikan kutu daun dan thrips, yang dapat menyebarkan virus pada tanaman, dapat mengandung bahan aktif seperti imidacloprid atau acetamiprid. Berikut adalah penjelasan detail tentang masing-masing bahan aktif:</p><h3>1. Imidacloprid</h3><p>Imidacloprid adalah insektisida sistemik yang termasuk dalam golongan neonicotinoid. Insektisida ini bekerja dengan cara menghambat transmisi sinyal saraf pada hama, yang mengarah pada kelumpuhan dan kematian hama. Imidacloprid sangat efektif dalam mengendalikan kutu daun, thrips, dan berbagai serangga penghisap lainnya. Sebagai insektisida sistemik, imidacloprid diserap oleh tanaman dan menyebar ke seluruh bagian tanaman, memberikan perlindungan yang berkelanjutan terhadap hama.</p><p><strong>Contoh produk:</strong></p><ul><li>Confidor</li><li>Admire</li></ul><p>Imidacloprid juga sangat efektif dalam mengendalikan hama yang dapat menyebarkan virus tanaman, seperti kutu daun yang dapat mentransmisikan virus mosaik.</p><h3>2. Acetamiprid</h3><p>Acetamiprid adalah insektisida sistemik dan juga termasuk dalam golongan neonicotinoid. Seperti imidacloprid, acetamiprid bekerja dengan mengganggu sistem saraf hama, namun dengan cara yang sedikit berbeda. Acetamiprid efektif untuk mengendalikan kutu daun, thrips, dan hama penghisap lainnya. Produk ini memiliki daya tahan yang lebih lama dan perlindungan yang lebih kuat terhadap hama, memberikan perlindungan jangka panjang untuk tanaman.</p><p><strong>Contoh produk:</strong></p><ul><li>Mospilan</li><li>Assail</li></ul><p>Acetamiprid memiliki efektivitas yang tinggi terhadap kutu daun dan thrips yang menjadi vektor penyebar virus seperti virus kunir dan virus mosaik.</p>`,
			usage_tips: `<p><strong>Catatan:</strong> Pastikan untuk mengikuti instruksi penggunaan pada label produk.</p>`,
		},
		{
			id: 10,
			disease_id: 10, // Leaf Scorch
			name: 'Jika Leaf Scorch disebabkan oleh infeksi jamur, gunakan fungisida yang sesuai, seperti fungisida berbahan aktif Copper Hydroxide atau Chlorothalonil.',
			description: `<h2>Pengendalian Leaf Scorch dengan Fungisida</h2><p>Leaf Scorch, ketika disebabkan oleh infeksi jamur, dapat diatasi dengan penggunaan fungisida yang sesuai. Beberapa bahan aktif fungisida yang efektif dalam mengendalikan penyakit ini adalah copper hydroxide dan chlorothalonil. Berikut penjelasan lebih lanjut tentang kedua bahan aktif tersebut:</p><h3>1. Copper Hydroxide</h3><p>Copper hydroxide adalah fungisida berbasis tembaga yang efektif untuk mengendalikan berbagai penyakit jamur dan bakteri pada tanaman. Fungisida ini bekerja dengan mengganggu proses metabolisme patogen dan mencegah penyebaran spora jamur. Copper hydroxide digunakan untuk mengatasi infeksi jamur yang menyebabkan Leaf Scorch, serta penyakit lain seperti bercak daun dan busuk buah.</p><p><strong>Contoh produk:</strong></p><ul><li>Kocide 3000</li><li>Champ DP</li></ul><p>Copper hydroxide juga memiliki efek sebagai pengendali bakteri, membuatnya sangat efektif untuk melawan infeksi jamur dan bakteri pada tanaman.</p><h3>2. Chlorothalonil</h3><p>Chlorothalonil adalah fungisida kontak yang efektif untuk mengendalikan berbagai jenis penyakit jamur pada tanaman, termasuk yang menyebabkan Leaf Scorch. Fungisida ini bekerja dengan membentuk lapisan pelindung pada permukaan tanaman, mencegah spora jamur menempel dan berkembang biak. Chlorothalonil memiliki spektrum luas dan digunakan untuk melindungi tanaman dari infeksi jamur seperti bercak daun, embun tepung, dan Leaf Mold.</p><p><strong>Contoh produk:</strong></p><ul><li>Daconil</li><li>Bravo</li></ul><p>Kedua jenis fungisida ini sangat berguna dalam mengatasi Leaf Scorch yang disebabkan oleh infeksi jamur, dengan cara menghentikan perkembangan jamur dan mencegah penyebaran lebih lanjut. Fungisida berbahan aktif copper hydroxide dan chlorothalonil sangat efektif untuk digunakan pada berbagai tanaman yang terinfeksi.</p>`,
			usage_tips: `<ul><li><strong>Semprotkan fungisida pada daun dan batang tanaman:</strong> Semprotkan terutama pada bagian yang terlihat terinfeksi. Ikuti dosis yang tertera pada kemasan (umumnya sekitar 2-3 gram per liter air).</li><li><strong>Lakukan penyemprotan secara berkala:</strong> Penyemprotan perlu dilakukan secara rutin, terutama setelah hujan.</li></ul>`,
		},
		{
			id: 11,
			disease_id: 11, // Bacterial Spot
			name: 'Bakterisida yang mengandung tembaga, seperti copper hydroxide atau copper sulfate, untuk mengendalikan infeksi.',
			description: `<p><strong>Tembaga Hidroksida (Cu(OH)₂):</strong> Tembaga hidroksida berfungsi sebagai fungisida dan bakterisida dengan cara merusak proses metabolisme patogen. Senyawa ini bekerja secara kontak dan memiliki spektrum luas, sehingga aman digunakan dalam pertanian berkelanjutan.</p><p><strong>Contoh produk:</strong> Copcide 77 WP</p><p><strong>Tembaga Sulfat (CuSO₄):</strong> Tembaga sulfat juga berfungsi sebagai bakterisida dan fungisida, mengikat protein dalam sel patogen, sehingga menghentikan pertumbuhannya.</p><p><strong>Contoh produk:</strong> Kuproxat 345 SC</p>`,
			usage_tips: `<ul><li>Semprotkan fungisida pada daun dan batang tanaman, terutama pada bagian yang terinfeksi. Ikuti dosis yang tertera pada kemasan (biasanya sekitar 2-3 gram per liter air).</li><li>Lakukan penyemprotan setiap 7-10 hari sekali, terutama setelah hujan atau saat kelembapan tinggi.</li></ul>`,
		},
		{
			id: 12,
			disease_id: 12, // Powdery Mildew
			name: 'Fungisida Berbasis Sulfur Bonide Sulfur Fungicide,Safer Brand Garden Fungicide;Fungisida Berbasis Propiconazole: Banner Maxx, Propiconazole 14.3%; Fungisida Berbasis Myclobutanil: Eagle 20EW',
			description: `<p>Powdery Mildew bisa dikendalikan menggunakan fungisida berbasis sulfur, propiconazole, dan myclobutanil. Berikut di antaranya.</p><h3>1. Fungisida Berbasis Sulfur</h3><ul><li><strong>Bonide Sulfur Fungicide</strong>: Fungisida ini efektif dalam mengendalikan penyakit seperti rust, leaf spot, dan powdery mildew. Dapat digunakan pada berbagai tanaman termasuk buah-buahan dan sayuran, serta aman untuk digunakan hingga hari panen. Tersedia dalam bentuk debu atau larutan.</li></ul><ul><li><strong>Safer Brand Garden Fungicide</strong>: Fungisida ini dirancang untuk mengendalikan berbagai penyakit tanaman dengan cara yang aman dan ramah lingkungan. Cocok untuk penggunaan di kebun rumah.</li></ul><h3>2. Fungisida Berbasis Propiconazole</h3><ul><li><strong>Banner Maxx</strong>: Fungisida sistemik yang efektif melawan berbagai penyakit jamur pada tanaman. Dikenal karena kemampuannya dalam memberikan perlindungan jangka panjang.</li></ul><ul><li><strong>Propiconazole 14.3%</strong>: Fungisida ini memberikan kontrol preventif dan kuratif terhadap banyak penyakit. Menghambat biosintesis sterol dalam membran sel jamur, sehingga menghentikan pertumbuhan jamur.</li></ul><h3>3. Fungisida Berbasis Myclobutanil</h3><ul><li><strong>Eagle 20EW</strong>: Fungisida berbasis myclobutanil yang efektif dalam mengendalikan penyakit jamur seperti powdery mildew, rust, dan brown patch.</li></ul>`,
			usage_tips: `<ul><li><strong>Semprotkan fungisida pada seluruh bagian tanaman:</strong> Semprotkan terutama pada area yang terinfeksi. Ikuti dosis yang tertera pada kemasan (umumnya 2-4 gram per liter air).</li><li><strong>Lakukan penyemprotan rutin:</strong> Penyemprotan setiap 7-14 hari sekali, tergantung pada tingkat infeksi dan kondisi cuaca.</li></ul>`,
		},
		{
			id: 13,
			disease_id: 13, // Black Rot (Bercak Daun)
			name: 'Fungisida Mycobutanil',
			description: `<p><strong>Myclobutanil</strong> adalah <em>fungisida sistemik</em> yang efektif dalam mengendalikan berbagai penyakit jamur, termasuk <strong>Black Rot</strong>. Ia bekerja dengan menghambat biosintesis ergosterol, yang penting untuk pertumbuhan jamur.</p>`,
			usage_tips: `<p><strong>Semprotkan</strong> di awal musim. Aplikasikan <strong>fungisida</strong> setiap <strong>10-14 hari</strong>, dimulai saat tunas memiliki panjang 3-5 inci, dan terus berlanjut hingga 4-6 minggu setelah mekar. Selama periode hujan yang panjang, persingkat interval menjadi <strong>7 hingga 10 hari</strong> di antara penyemprotan.</p>`,
		},
		{
			id: 14,
			disease_id: 14, // Black Measles (Esca/Campak Hitam)
			name: 'Wound sealant (5% boric acid in acrylic paint) atau fungisida berbahan aktif mankozeb (Dithane M-45) atau karbendazim.',
			description: `<p><strong>Wound Sealant:</strong> Mengandung 5% asam borat dalam cat akrilik, dirancang untuk melindungi luka pada tanaman setelah pemangkasan. Produk ini membentuk penghalang fisik yang mencegah infeksi jamur dan bakteri, serta mempercepat proses penyembuhan alami tanaman.</p><p><strong>Fungisida Mancozeb:</strong> Fungisida kontak yang digunakan untuk mengendalikan berbagai penyakit jamur pada tanaman. Ia bekerja dengan menghambat pertumbuhan jamur dan sangat efektif pada berbagai jenis tanaman.</p><ul><li><strong>Contoh produk:</strong> Dithane M-45</li></ul><p><strong>Fungisida Karbendazim:</strong> Fungisida sistemik yang efektif melawan berbagai penyakit jamur pada tanaman. Ini menghambat sintesis mikrotubulus dalam sel jamur, sehingga menghentikan pertumbuhannya. Cocok untuk digunakan pada sayuran, buah-buahan, dan tanaman hias.</p>`,
			usage_tips: `<ul><li>Larutkan fungisida dengan air sesuai dosis yang dianjurkan (biasanya 0,2% dari total volume air).</li><li>Semprotkan ke seluruh bagian tanaman yang terinfeksi, terutama pada daun dan batang, pada pagi atau sore hari untuk menghindari penguapan yang cepat.</li></ul>`,
		},
		{
			id: 15,
			disease_id: 15, // Isariopsis Leaf Spot (Leaf blight)
			name: 'Fungisida Mancozeb',
			description: `<p><strong>Mancozeb</strong> adalah fungisida kontak yang berspektrum luas, efektif dalam mengendalikan berbagai penyakit jamur pada tanaman, termasuk hawar daun. Obat ini bekerja dengan mengganggu beberapa proses biokimia dalam sel jamur, sehingga mencegah pertumbuhan dan penyebarannya. Mancozeb juga memiliki risiko rendah terhadap pengembangan resistensi karena mekanisme kerjanya yang multi-situs.</p><p><strong>Contoh produk</strong>: Manzate 82WP</p>`,
			usage_tips: `<p><strong>Larutkan fungisida</strong> dengan air <strong>sesuai dosis</strong> dan <strong>semprotkan</strong> ke bagian tanaman yang terinfeksi.</p>`,
		},
		{
			id: 16,
			disease_id: 16, // Black Rot
			name: 'Fungisida',
			description: `<p><strong>Fungisida &ldquo;OCTAVE&rdquo; 50WP</strong> dari FMC adalah produk yang mengandung bahan aktif <em>azoxystrobin</em> dan <em>difenoconazole</em>, dirancang untuk mengendalikan berbagai penyakit jamur pada tanaman, termasuk bercak daun, busuk buah, dan penyakit jamur lainnya.</p>`,
			usage_tips: `<p>Untuk penggunaan <strong>Fungisida OCTAVE</strong>, larutkan dosis yang dianjurkan, biasanya sekitar 1-2 g per liter air, dan aplikasikan melalui penyemprotan pada bagian tanaman yang terinfeksi atau sebagai tindakan pencegahan. Penyemprotan sebaiknya dilakukan pada pagi atau sore hari untuk menghindari penguapan yang cepat dan memastikan penetrasi yang baik ke dalam jaringan tanaman.</p>`,
		},
		{
			id: 17,
			disease_id: 17, // Cedar Apple Rust
			name: 'Fungicide Include Mancozeb',
			description: `<p><strong>Fungisida Yatozeb</strong> adalah produk yang mengandung kombinasi bahan aktif <em>Mancozeb</em> dan <em>Tembaga Oksida</em>, dirancang untuk mengendalikan berbagai penyakit jamur pada tanaman. <em>Mancozeb</em> berfungsi sebagai fungisida pelindung yang efektif terhadap penyakit seperti busuk daun, bercak daun, dan busuk buah, sementara <em>Tembaga Oksida</em> memberikan tambahan perlindungan dengan sifat bakterisidanya.</p>`,
			usage_tips: `<p>Larutkan dosis yang dianjurkan (biasanya antara 1500-2000 g/ha) dalam air sesuai petunjuk pada kemasan dan aplikasikan melalui penyemprotan pada bagian daun tanaman yang terinfeksi atau sebagai perlakuan benih.</p>`,
		},
		{
			id: 18,
			disease_id: 18, // Apple Scab
			name: 'Fungisida seperti sabun tembaga dan campuran Bordeaux, nitrogen berbasis Amonium, Mancozeb',
			description: `<p>Fungisida <strong>Tembaga Kuproxat 345 SC</strong> adalah produk yang mengandung bahan aktif tembaga oksi sulfat dengan konsentrasi 345 g/l, dirancang untuk mengendalikan penyakit kudis apel (<em>apple scab</em>) yang disebabkan oleh jamur <em>Venturia inaequalis</em>.</p>`,
			usage_tips: `<p>Untuk menggunakan Fungisida <strong>Tembaga Kuproxat 345 SC</strong>, larutkan dosis yang dianjurkan, biasanya antara 2-4 ml per liter air, tergantung pada jenis tanaman dan penyakit yang ingin dikendalikan. Aplikasikan larutan melalui penyemprotan pada bagian tanaman yang terinfeksi, seperti daun dan batang, atau sebagai tindakan pencegahan sebelum gejala muncul.</p>`,
		},
		{
			id: 19,
			disease_id: 19, // Huanglongbing
			name: 'insecticide',
			description: `<p><strong>Insektisida Dimetion 400 EC</strong> adalah produk yang mengandung bahan aktif <em>dimethoate</em> dengan konsentrasi 400 g/l, dirancang untuk mengendalikan berbagai hama pada tanaman. Insektisida ini efektif terhadap hama penghisap dan penggigit, seperti kutu, thrips, dan lalat buah, melalui aksi kontak dan sistemik.</p>`,
			usage_tips: `<p>Larutkan 2,0 ml produk dalam 1 liter air dan aplikasikan dengan cara penyemprotan pada bagian tanaman yang terinfeksi, seperti jeruk, cabai, dan kentang, memastikan semua bagian tanaman terkena larutan secara merata.</p>`,
		},
		{
			id: 20,
			disease_id: 20, // Early Blight
			name: 'Chlorothalonil (e.g., Daconil)',
			description: `<p><strong>Daconil 75 WP</strong> adalah fungisida berbahan aktif <em>klorotalonil</em> 75% bersifat kontak, berbentuk tepung berwarna putih yang dapat disuspensikan untuk mengendalikan penyakit pada tanaman bawang merah, cabai, kentang, tomat, kacang tanah, kelapa, teh, pisang, dan semangka.</p>`,
			usage_tips: `<p>Aplikasikan fungisida pada saat gejala awal penyakit atau secara preventif setiap 7-14 hari, tergantung kondisi cuaca. Sebagai contoh, gunakan <strong>Chlorothalonil</strong> dengan takaran 1,5-2,5 L/ha.</p>`,
		},
		{
			id: 21,
			disease_id: 21, // Late Blight
			name: 'Orondis Ultra, Revus, dan Ridomil Gold',
			description: `<p><strong>Fungisida Orondis Ultra</strong> adalah produk dari Syngenta yang efektif untuk mengendalikan penyakit late blight pada kentang, yang disebabkan oleh jamur <em>Phytophthora infestans</em>. Mengandung dua bahan aktif, yaitu <em>mandipropamid</em> dan <em>oxathiapiprolin</em>, Orondis Ultra bekerja secara sistemik dengan memberikan perlindungan yang kuat terhadap infeksi jamur.</p><p><strong>Ridomil Gold MZ 4/64 WG</strong> adalah fungisida berbahan aktif <em>mefenoksam</em> 4% dan <em>mankozeb</em> 64%, bersifat sistemik dan kontak, bekerja dengan cara mencegah dan menghentikan penyebaran penyakit. Fungisida ini berbentuk butiran, yang dapat didispersikan, berwarna kuning kecoklat-coklatan, dan digunakan untuk mengendalikan penyakit blendok <em>Phytophthora citrophthora</em> pada jeruk, penyakit busuk daun <em>Phytophthora infestans</em> pada kentang dan tomat, penyakit busuk buah <em>Phytophthora palmivora</em> pada kakao, serta penyakit embun bulu <em>Pseudoperonospora cubensis</em> pada melon.</p><p>Orondis Ultra: Memberikan perlindungan ganda terhadap penyakit busuk daun.</p><p>Revus: Efektif untuk aplikasi pada daun.</p><p>Ridomil Gold: Untuk aplikasi tanah dan perawatan daun.</p>`,
			usage_tips: `<p>Untuk <strong>Orondis Ultra</strong>, aplikasikan dengan takaran 200 mL/ha setiap 7-10 hari selama periode berisiko tinggi.</p><p><strong>Ridomil Gold</strong> dapat diaplikasikan dengan takaran 700 g/hektar pada situasi risiko penyakit yang tinggi.</p>`,
		},
		{
			id: 22,
			disease_id: 22, // Cercospora Leaf Spot (Gray Leaf Spot)
			name: 'Delaro® 325 SC (mengandung strobilurin dan triazol), Quilt (kombinasi dua bahan aktif)',
			description: `<p><strong>Delaro&reg; 325 SC</strong> adalah fungisida yang mengandung kombinasi bahan aktif dari kelompok <em>strobilurin</em> dan <em>triazol</em>, dirancang untuk memberikan perlindungan efektif terhadap berbagai penyakit jamur, termasuk bercak daun cercospora pada jagung.</p><p><strong>Quilt</strong> adalah fungisida yang merupakan kombinasi dari dua bahan aktif, yaitu <em>azoksistrobin</em> (<em>strobilurin</em>) dan <em>propikonazol</em> (<em>triazol</em>). Kombinasi ini memberikan perlindungan yang luas terhadap berbagai penyakit jamur, termasuk bercak daun cercospora.</p>`,
			usage_tips: `<p><strong>Delaro&reg; 325 SC</strong> adalah fungisida yang mengandung kombinasi bahan aktif dari kelompok <em>strobilurin</em> dan <em>triazol</em>, dirancang untuk memberikan perlindungan efektif terhadap berbagai penyakit jamur, termasuk bercak daun cercospora pada jagung.</p><p><strong>Quilt</strong> adalah fungisida yang merupakan kombinasi dari dua bahan aktif, yaitu <em>azoksistrobin</em> (<em>strobilurin</em>) dan <em>propikonazol</em> (<em>triazol</em>). Kombinasi ini memberikan perlindungan yang luas terhadap berbagai penyakit jamur, termasuk bercak daun cercospora.</p>`,
		},
		{
			id: 23,
			disease_id: 23, // Common Rust
			name: 'Priaxor (contains Fluxapyroxad and Pyraclostrobin)',
			description: `<p><strong>Fungisida Pyroxa 250 SC</strong> yang mengandung bahan aktif <em>pyraclostrobin</em> adalah produk yang efektif untuk mengendalikan penyakit karat jagung (<em>common rust</em>) yang disebabkan oleh jamur. <em>Pyraclostrobin</em> memiliki mekanisme kerja <strong>sistemik</strong> dan <strong>translaminar</strong>, yang memungkinkan penyerapan dan distribusi merata di dalam jaringan tanaman.</p>`,
			usage_tips: `<p>Aplikasikan <strong>Priaxor</strong> dengan takaran 0,5-1,0 L/ha saat gejala karat pertama kali terlihat atau secara preventif selama tahap pertumbuhan <strong>VT</strong> hingga <strong>R1</strong>.</p>`,
		},
		{
			id: 24,
			disease_id: 24, // Northern Corn Leaf Blight
			name: 'Stratego YLD (kombinasi Triazol dan Strobilurin), Prolin (Fungisida Triazol)',
			description: `<p><strong>Fungisida Target 500 SC</strong> dari Bayer adalah produk sistemik yang mengandung bahan aktif <em>fenamidon</em> 504,1 g/l, dirancang untuk mencegah dan mengatasi penyakit bulai pada jagung serta berbagai tanaman sayuran. Fungisida ini memiliki sifat <strong>translaminar</strong>, <strong>protektif</strong>, dan <strong>kuratif</strong>, sehingga efektif dalam mengendalikan infeksi jamur seperti busuk daun dan hawar daun.</p><p><strong>Fungisida Triazol</strong> merupakan kelompok fungisida yang bekerja dengan cara menghambat sintesis <em>ergosterol</em> dalam membran sel jamur, sehingga efektif dalam mengendalikan berbagai penyakit jamur pada tanaman.</p>`,
			usage_tips: `<p>Untuk menggunakan <strong>Fungisida Target 500 SC</strong> dari Bayer, larutkan 0,25 hingga 1 ml dalam 1 liter air untuk penyemprotan atau gunakan 4-6 ml per kg benih sebelum tanam; semprotkan pada daun yang terinfeksi atau campurkan dengan benih untuk perlindungan awal.</p><p>Penggunaan <strong>Fungisida Triazol</strong>, dosis umumnya berkisar antara 0,5 hingga 2 ml per liter air, semprotkan pada bagian tanaman yang terinfeksi atau sebagai pencegahan saat kondisi cuaca mendukung perkembangan penyakit. Pastikan untuk selalu membaca dan mengikuti petunjuk penggunaan yang tertera pada label kemasan masing-masing produk.</p>`,
		},

	];

	medicines.forEach(async (medicine) => {
		await prisma.medicine.upsert({
			where: { id: medicine.id },
			update: {},
			create: medicine,
		});
		console.log(`Medicine '${medicine.name}' seeded`);
	});
};

module.exports = seedMedicines;