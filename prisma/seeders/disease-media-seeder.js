const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDiseaseMedia() {
	const diseaseMedia = [
		{
			disease_id: 1,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Bacterial-spot-on-tomato-leaves.jpg',
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Tomato_Bacterial%20Spot1.jpg',
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Tomato_Bacterial%20Spot2.jpg',
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Tomato_Bacterial%20Spot3.jpg',
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Bacterial%20Spot/Tomato_Bacterial%20Spot4.jpg',
		},

		{
			disease_id: 2,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Early%20Blight/early%20blight%20on%20tomato.jpeg',
		},
		{
			disease_id: 2,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Early%20Blight/hgic_veg_early%20blight%20lesions%20on%20tomato.jpg',
		},
		{
			disease_id: 2,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Early%20Blight/tomato_earlyb.jpeg',
		},
		{
			disease_id: 2,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Early%20Blight/tmt_eb_leaf.JPG',
		},

		{
			disease_id: 3,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/Late-Blight-on-Tomatoes.jpg',
		},
		{
			disease_id: 3,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/Tomato%20LB.jpeg',
		},
		{
			disease_id: 3,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/tmt_LB.jpg',
		},
		{
			disease_id: 3,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/late-blight-tomato.webp',
		},
		{
			disease_id: 3,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Late%20Blight/late%20bligth%20on%20tomato_s%20leaf.JPG',
		},

		{
			disease_id: 4,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Leaf%20Mold/tomato-leaf-mold.jpg',
		},
		{
			disease_id: 4,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Leaf%20Mold/tomatoo_LM.jpeg',
		},
		{
			disease_id: 4,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Leaf%20Mold/tomat_LM.jpeg',
		},
		{
			disease_id: 4,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Leaf%20Mold/tomat_LeafM.JPG',
		},

		{
			disease_id: 5,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Septoria%20Leaf%20Spot/Tomato-Plant-with-Septoria-Leaf-Spot.jpg',
		},
		{
			disease_id: 5,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Septoria%20Leaf%20Spot/septoria-leaf-spot-tomatoes.jpg',
		},
		{
			disease_id: 5,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Septoria%20Leaf%20Spot/tmt_septoria%20leaf.JPG',
		},

		{
			disease_id: 6,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Two%20Spotted%20Spider%20Mites/TMT_TMMS.jpg',
		},
		{
			disease_id: 6,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Two%20Spotted%20Spider%20Mites/Two-spot_spider_mite_damage_to_tomato_plant.jpg',
		},
		{
			disease_id: 6,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Two%20Spotted%20Spider%20Mites/tomatoo_TSSM.jpeg',
		},
		{
			disease_id: 6,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Two%20Spotted%20Spider%20Mites/tomat_TSSM_leaf.JPG',
		},

		{
			disease_id: 7,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Target%20Spot/tmt_TS.jpg',
		},
		{
			disease_id: 7,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Target%20Spot/tmto_TS.jpeg',
		},
		{
			disease_id: 7,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Target%20Spot/tomat_target%20sp.jpg',
		},
		{
			disease_id: 7,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Target%20Spot/tomat%20leaf_target%20spot.JPG',
		},

		{
			disease_id: 8,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Yellow%20Leaf%20Curl%20Virus/TomatoYellowLeafCurl.JPG',
		},
		{
			disease_id: 8,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Yellow%20Leaf%20Curl%20Virus/tmtt_YLCV.jpeg',
		},
		{
			disease_id: 8,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Yellow%20Leaf%20Curl%20Virus/tomat_YLCV.jpg',
		},
		{
			disease_id: 8,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Yellow%20Leaf%20Curl%20Virus/tomato-YLCV.JPG',
		},

		{
			disease_id: 9,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Mosaic%20Virus/mosaic-virus-tomatoo.jpg',
		},
		{
			disease_id: 9,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Mosaic%20Virus/tmt_MV.jpeg',
		},
		{
			disease_id: 9,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Mosaic%20Virus/tomat_MVirus.jpg',
		},
		{
			disease_id: 9,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Tomato_Mosaic%20Virus/Tomato_Mosaic%20Virus%20Leaf.JPG',
		},

		{
			disease_id: 10,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Strawberry_Leaf%20Scorch/Strawberry_Leaf%20Scorch1.jpg',
		},
		{
			disease_id: 10,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Strawberry_Leaf%20Scorch/Strawberry_Leaf%20Scorch2.jpg',
		},
		{
			disease_id: 10,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Strawberry_Leaf%20Scorch/Strawberry_Leaf%20Scorch3.jpg',
		},
		{
			disease_id: 10,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Strawberry_Leaf%20Scorch/Strawberry_Leaf%20Scorch4.jpg',
		},

		{
			disease_id: 11,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Bell%20Pepper_Bacterial%20Spot/5362921-SMPT.jpg',
		},
		{
			disease_id: 11,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Bell%20Pepper_Bacterial%20Spot/Bell%20Pepper_Bacterial%20Spot.jpg',
		},
		{
			disease_id: 11,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Bell%20Pepper_Bacterial%20Spot/IMG_1917-1024x768.jpg',
		},
		{
			disease_id: 11,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Bell%20Pepper_Bacterial%20Spot/0d8421cd-eebc-4018-b591-12352dd970a7___JR_B.Spot%203234.JPG',
		},

		{
			disease_id: 12,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Squash_Powdery%20Mildew/Squash_Powdery%20Mildew1.jpg',
		},
		{
			disease_id: 12,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Squash_Powdery%20Mildew/Squash_Powdery%20Mildew2.jpg',
		},
		{
			disease_id: 12,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Squash_Powdery%20Mildew/Squash_Powdery%20Mildew3.jpg',
		},
		{
			disease_id: 12,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Squash_Powdery%20Mildew/Squash_Powdery%20Mildew4.jpg',
		},

		{
			disease_id: 13,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Rot/Grape_Black%20Rot1.jpg',
		},
		{
			disease_id: 13,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Rot/Grape_Black%20Rot2.jpg',
		},
		{
			disease_id: 13,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Rot/Grape_Black%20Rot3.jpg',
		},
		{
			disease_id: 13,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Rot/Grape_Black%20Rot4.jpg',
		},

		{
			disease_id: 14,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Measles%20(Esca)/1283_Measles.jpg',
		},
		{
			disease_id: 14,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Measles%20(Esca)/D-GR-UNKN-FO.003banner.png',
		},
		{
			disease_id: 14,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Measles%20(Esca)/ESCA_Symptoms.jpg',
		},
		{
			disease_id: 14,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Black%20Measles%20(Esca)/4dc7db46-8e8e-44df-93aa-6789836697a7___FAM_B.Msls%200932.JPG',
		},

		{
			disease_id: 15,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Isariopsis%20Leaf%20Spot/Grape_Isariopsis%20Leaf%20Spot1.jpg',
		},
		{
			disease_id: 15,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Isariopsis%20Leaf%20Spot/Grape_Isariopsis%20Leaf%20Spot2.jpg',
		},
		{
			disease_id: 15,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Isariopsis%20Leaf%20Spot/Grape_Isariopsis%20Leaf%20Spot3.jpg',
		},
		{
			disease_id: 15,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Grape_Isariopsis%20Leaf%20Spot/Grape_Isariopsis%20Leaf%20Spot4.jpg',
		},

		{
			disease_id: 16,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Black%20Rot/Frogeye-spots-Botryosphaeria-obtusa-on-apple-leaves-768x546.jpg',
		},
		{
			disease_id: 16,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Black%20Rot/apples_black-rot_06_zoom.jpg',
		},
		{
			disease_id: 16,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Black%20Rot/blackrot2_600px.jpg',
		},
		{
			disease_id: 16,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Black%20Rot/a2eb846a-da47-4d4d-97db-d954a20bb22a___JR_FrgE.S%202868_90deg.JPG',
		},

		{
			disease_id: 17,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/cedar-apple-rust-disease-leaf-spots.jpg',
		},
		{
			disease_id: 17,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/cedar-apple_fig3.jpg',
		},
		{
			disease_id: 17,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/spots-Orange-cedar-apple-rust-disease-apple-leaf.webp',
		},
		{
			disease_id: 17,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/car-apple9.jpg',
		},
		{
			disease_id: 17,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Cedar%20Apple%20Rust/4134586e-a00a-4c53-8f8d-c275ef0d5f5f___FREC_C.Rust%203676_180deg.JPG',
		},

		{
			disease_id: 18,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Scab/GettyImages-1142266260-918cf65836ae459baa306c7dd2e92a3b.jpg',
		},
		{
			disease_id: 18,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Scab/GettyImages-471452853-16f95d4cf38541ac8e55c60638600302.jpg',
		},
		{
			disease_id: 18,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Scab/how-to-prevent-apple-scab-disease-2048x1536.jpg',
		},
		{
			disease_id: 18,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Apple_Scab/808207df-2000-4050-a720-bd23997710b8___FREC_Scab%203270_90deg.JPG',
		},

		{
			disease_id: 19,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Orange_Huanglongbing/Orange_Huanglongbing1.jpg',
		},
		{
			disease_id: 19,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Orange_Huanglongbing/Orange_Huanglongbing2.jpg',
		},
		{
			disease_id: 19,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Orange_Huanglongbing/Orange_Huanglongbing3.jpg',
		},
		{
			disease_id: 19,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Orange_Huanglongbing/Orange_Huanglongbing4.jpg',
		},

		{
			disease_id: 20,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Early%20Blight/Potato_Early%20Blight1.jpg',
		},
		{
			disease_id: 20,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Early%20Blight/Potato_Early%20Blight2.jpg',
		},
		{
			disease_id: 20,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Early%20Blight/Potato_Early%20Blight3.jpg',
		},
		{
			disease_id: 20,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Early%20Blight/Potato_Early%20Blight4.jpg',
		},

		{
			disease_id: 21,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Late%20Blight/Potato_Late%20Blight1.jpg',
		},
		{
			disease_id: 21,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Late%20Blight/Potato_Late%20Blight2.jpg',
		},
		{
			disease_id: 21,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Late%20Blight/Potato_Late%20Blight3.jpg',
		},
		{
			disease_id: 21,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Potato_Late%20Blight/Potato_Late%20Blight4.jpg',
		},

		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Grey%20Leaf%20Spot/1524200.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Grey%20Leaf%20Spot/23595449681_6be9b4c821_b.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Grey%20Leaf%20Spot/corn_grey_leaf_spot_disease.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Grey%20Leaf%20Spot/2b6bb6a5-3f70-48da-a968-13d840815bbb___RS_GLSp%209277.JPG',
		},

		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Common%20Rust/sweet-corn_common-rust.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Common%20Rust/21895200780_dec912600b_b.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Common%20Rust/5608268.jpg',
		},
		{
			disease_id: 22,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Common%20Rust/RS_Rust%201576.JPG',
		},

		{
			disease_id: 23,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Nothern%20Leaf%20Blight/5261023.jpg',
		},
		{
			disease_id: 23,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Nothern%20Leaf%20Blight/5573797.jpg',
		},
		{
			disease_id: 23,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Nothern%20Leaf%20Blight/nclb4x1200.jpg',
		},
		{
			disease_id: 23,
			type: 'image',
			url: 'https://storage.googleapis.com/plantpal-assets/diseases/Corn_Nothern%20Leaf%20Blight/3f7bc1d3-ac03-4c5b-99e5-3164830cdd7d___RS_NLB%203950.JPG',
		},
	];

	await prisma.diseaseMedia.createMany({
		data: diseaseMedia,
	});
	
	console.log(`Disease Media seeded`);
};

module.exports = seedDiseaseMedia;