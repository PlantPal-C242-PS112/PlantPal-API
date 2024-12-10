const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedMedicineLinks = async () => {
	const medicineLinks = [
		{
			medicine_id: 1,
			name: 'Copper Hydroxide COPCIDE 77WP 100gr',
			url: 'https://www.tokopedia.com/netafarm/pestisida-fungisida-copper-hydroxide-copcide-77wp-100gr',
		},
		{
			medicine_id: 1,
			name: 'Dhanucop (Copper Oxychloride 50% WP)',
			url: 'https://www.dhanuka.com/fungicide/dhanucop',
		},
		{
			medicine_id: 2,
			name: 'Fungisida PROTECT Mancozeb 15% + Khlorotalonil 10% + Mgn Silika 60%',
			url: 'https://www.tokopedia.com/abdaustore/fungisida-protect-mancozeb-15-khlorotalonil-10-mgn-silika-60',
		},
		{
			medicine_id: 3,
			name: 'Dithane M-45 (Mancozeb)',
			url: 'https://s.shopee.co.id/3AqjbnXrAT?share_channel_code=1',
		},
		{
			medicine_id: 3,
			name: 'Kocide 3000',
			url: 'https://www.domyown.com/kocide-3000-fungicidebactericide-p-21799.html',
		},
		{
			medicine_id: 3,
			name: 'Copper Oxychloride',
			url: 'https://www.katyayaniorganics.com/product/copper-oxychloride-50-wp-coc50/ ',
		},
		{
			medicine_id: 3,
			name: 'Metalaxyl-M',
			url: 'https://www.engebiotech.com/18-years-factory-metalaxyl-mancozeb-metalaxyl-m-fungicide-35-wp-48-ec-in-agriculture-enge-biotech-product/',
		},
		{
			medicine_id: 4,
			name: 'Kocide 3000',
			url: 'https://www.domyown.com/kocide-3000-fungicidebactericide-p-21799.html',
		},
		{
			medicine_id: 4,
			name: 'Daconil 75WP',
			url: 'https://s.shopee.co.id/2fuT1Ywb8F?share_channel_code=1',
		},
		{
			medicine_id: 5,
			name: 'Daconil 75WP (Chlorolatonil)',
			url: 'https://s.shopee.co.id/2fuT1Ywb8F?share_channel_code=1',
		},
		{
			medicine_id: 5,
			name: 'Dithane M-45 (Mancozeb)',
			url: 'https://s.shopee.co.id/3AqjbnXrAT?share_channel_code=1',
		},
		{
			medicine_id: 6,
			name: 'Abamectin',
			url: 'https://shopee.ph/Abamectin-3EC-insecticide-1000ml-i.291205756.15396473464',
		},
		{
			medicine_id: 6,
			name: 'Spiromesifen 22.9%',
			url: 'https://agrostar.in/product/bayer-oberon-spiromesifen-229-sc-200-ml/AGS-CP-1014?language=en&state=maharashtra',
		},
		{
			medicine_id: 6,
			name: 'Imidacloprid 350 SC',
			url: 'https://tuagricola.mx/producto/imidacloprid-350-sc-1-lt/',
		},
		{
			medicine_id: 6,
			name: 'Minyak Neem',
			url: 'https://shopee.co.id/Minyak-Mimba-(Neem-Oil)-%E2%80%93-Pestisida-Nabati-Organik-%E2%80%93-250ml-i.6678187.947968614',
		},
		{
			medicine_id: 7,
			name: 'Daconil 75WP (Chlorolatonil)',
			url: 'https://s.shopee.co.id/2fuT1Ywb8F?share_channel_code=1',
		},
		{
			medicine_id: 7,
			name: 'Dithane M-45 (Mancozeb)',
			url: 'https://s.shopee.co.id/3AqjbnXrAT?share_channel_code=1',
		},
		{
			medicine_id: 7,
			name: 'Cabrio 25EC (Pyraclostrobin)',
			url: 'https://shopee.ph/Cabrio-Fungicide-500mL-250mL25EC-i.948649956.18872746197',
		},
		{
			medicine_id: 8,
			name: 'Imidacloprid 350 SC',
			url: 'https://tuagricola.mx/producto/imidacloprid-350-sc-1-lt',
		},
		{
			medicine_id: 8,
			name: 'Acetamiprid STK 200 SP',
			url: 'https://villaverdeagro.com.br/produto/acetamiprid-stk-200-sp-inseticida-1kg',
		},
		{
			medicine_id: 9,
			name: 'Imidacloprid 350 SC',
			url: 'https://tuagricola.mx/producto/imidacloprid-350-sc-1-lt/ ',
		},
		{
			medicine_id: 9,
			name: 'Confidor',
			url: 'https://www.indiamart.com/proddetail/bayer-confidor-insecticide-23470180248.html',
		},
		{
			medicine_id: 9,
			name: 'Acetamiprid STK 200 SP',
			url: 'https://villaverdeagro.com.br/produto/acetamiprid-stk-200-sp-inseticida-1kg',
		},
		{
			medicine_id: 9,
			name: 'Mospilan',
			url: 'https://depozituldeseminte.ro/product/mospilan-20-sg',
		},
		{
			medicine_id: 10,
			name: 'Kocide 3000',
			url: 'https://www.domyown.com/kocide-3000-fungicidebactericide-p-21799.html',
		},
		{
			medicine_id: 10,
			name: 'Champ DP',
			url: 'https://www.agroterra.com/p/champ-dp-fungicida-bactericida-nufarm/3122904',
		},
		{
			medicine_id: 10,
			name: 'Daconil 75WP (Chlorolatonil)',
			url: 'https://s.shopee.co.id/2fuT1Ywb8F?share_channel_code=1',
		},
		{
			medicine_id: 10,
			name: 'Bravo 500SC',
			url: 'https://www.petala.ro/produs/fungicid-bravo-500-sc-5-litri',
		},
		{
			medicine_id: 11,
			name: 'Tembaga hidroksida',
			url: 'https://www.tokopedia.com/deki-id/copcide-77-wp-100-gr-fungisida-bakterisida-tembaga-hidroksida-tanaman',
		},
		{
			medicine_id: 11,
			name: 'Tembaga sulfat',
			url: 'https://www.tokopedia.com/chatmart/kuproxat-345-sc-500-ml-fungisida-bakterisida-pelindung-tanaman?extParam=ivf%3Dfalse%26keyword%3Dkuproxat+345+sc%26search_id%3D2024120512161798DE35A3E4CE5A36CU2Z%26src%3Dsearch',
		},
		{
			medicine_id: 12,
			name: 'Bonide Sulfur Fungicide',
			url: 'https://www.planetnatural.com/product/sulfur-plant-fungicide/',
		},
		{
			medicine_id: 12,
			name: 'Banner Maxx',
			url: 'https://www.amazon.com/Propiconazole-14-3-Generic-Banner-Gallon/dp/B0073MVP02',
		},
		{
			medicine_id: 13,
			name: 'Sagri Treat 50 Ml fluzinazole Myclobutanil fungisida sistemik',
			url: 'https://www.tokopedia.com/travelnshops/sagri-treat-50-ml-fluzinazole-myclobutanil-fungisida-sistemik',
		},
		{
			medicine_id: 14,
			name: 'Dithane M-45',
			url: 'https://www.bukalapak.com/p/hobi-koleksi/berkebun/pupuk-nutrisi-tanaman/3wte17a-jual-dithane-200-gram-mankozeb-fungisida?from=list-product&pos=1',
		},
		{
			medicine_id: 15,
			name: 'Fungisida MANZATE 82WP 1kg',
			url: 'https://www.tokopedia.com/karismatani/fungisida-manzate-82wp-1kg?extParam=ivf%3Dfalse%26keyword%3Dmanzate%26search_id%3D20241205130208A80A0983CF8B1F04BWQI%26src%3Dsearch',
		},
		{
			medicine_id: 16,
			name: 'Fungisida “OCTAVE” 50WP FMC',
			url: 'https://shopee.co.id/product/286517417/5862476733?',
		},
		{
			medicine_id: 17,
			name: 'Fungisida YATOZEB Mancozeb + Tembaga Oxide',
			url: 'https://www.tokopedia.com/deleza/fungisida-yatozeb-mancozeb-tembaga-oxide',
		},
		{
			medicine_id: 18,
			name: 'Fungisida Tembaga Kuproxat 345SC',
			url: 'https://www.lazada.co.id/products/fungisida-tembaga-kuproxat-345sc-i7701626720-s14162288043.html?',
		},
		{
			medicine_id: 19,
			name: 'INSEKTISIDA DIMETION 400 EC',
			url: 'https://shopee.co.id/product/70287828/8474269864?',
		},
		{
			medicine_id: 20,
			name: 'DACONIL 75 WP isi 500 GRAM/klorotaronil 75%',
			url: 'https://www.lazada.co.id/products/daconil-75-wp-isi-500-gramklorotaronil-75pestisida-fungisida-kontakuntuk-pengendalian-penyakit-tanaman-busuk-tanaman-free-packing-kardus-i6300770856-s11974090427.html?',
		},
		{
			medicine_id: 21,
			name: 'ORONDIS Opti 500 ml FUNGISIDA',
			url: 'https://www.lazada.co.id/products/orondis-opti-500-ml-fungisida-syngenta-untk-mengendalikan-penyakit-pada-tanaman-fungisida-sistemik-yang-berbentuk-pekatan-suspensi-berwarna-putih-untk-mengendalikan-penyakit-pada-tanaman-timun-dan-tomat-dll-i4973432215-s9221474133.html?from_gmc=1&fl_tag=1',
		},
		{
			medicine_id: 21,
			name: 'Ridomild Gols 500gr',
			url: 'https://www.lazada.co.id/products/ridomil-gold-500-gram-i6339848383-s12028012075.html?',
		},
		{
			medicine_id: 22,
			name: 'Delaro® 325 SC',
			url: 'https://shopee.co.id/Fungisida-Fungitop-325-SC-250-ML-Dan-ZPT-Perlindungan-Dari-Hama-Jamur-i.1023005256.25585889072?sp_atk=6c797f16-bd5c-4c1e-8e1b-04036521e20e&xptdk=6c797f16-bd5c-4c1e-8e1b-04036521e20e',
		},
		{
			medicine_id: 22,
			name: 'Quilt',
			url: 'https://shopee.co.id/%E2%9D%97%EF%B8%8FJAMINAN-ASLI-100-%E2%9D%97%EF%B8%8FFUNGISIDA-QUILT-200SE-KEMASAN-250-ML-PEMBASMI-JAMUR-CERCHOSPORA-PHYTOPTORA-i.706461015.16180330620?',
		},
		{
			medicine_id: 23,
			name: 'Fungisida Pyroxa 250SC 100ml Piraklostrobin',
			url: 'https://shopee.co.id/product/81536855/29607936350?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVzBLS2xuUGZzMlQ5NjlFWklmRkZjVGxwaWI0MVc0azZIdnRrV2ZiaFhSa3JGdVZCS0RMK3RFendWSEtVSjUzUUd6YUxsNm5vU1NvaE1BQjg4ZlFjdUZGM0IxS3RLbG96QWtuUkNRZERISXg',
		},
		{
			medicine_id: 24,
			name: 'Fungisida Target 500SC BAYER',
			url: 'https://tokopedia.link/2kE1dp9M4Ob',
		},
		{
			medicine_id: 24,
			name: 'Fungisida Triazol',
			url: 'https://tokopedia.link/CAi9Aaql5Ob',
		},
	];

	medicineLinks.forEach(async (medicineLink) => {
		await prisma.medicineLink.create({
			data: medicineLink
		});
		console.log(`Medicine Link '${medicineLink.name}' seeded`);
	});
};

module.exports = seedMedicineLinks;