const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDiseaseMedia() {
	const tomatoDiseaseMedia = [
		{
			disease_id: 1,
			type: 'image',
			url: 'https://hort.extension.wisc.edu/files/2017/03/Bacterial-spot-tomato-e1721249468183.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://th.bing.com/th/id/OIP.oo53UgKrA5yiphxn8EUIDQHaFj?rs=1&pid=ImgDetMain',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			disease_id: 1,
			type: 'image',
			url: 'https://hort.extension.wisc.edu/files/2017/03/Bacterial-spot-on-tomato-leaves-e1721249493890.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			disease_id: 2,
			type: 'image',
			url: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/06/tomato-early-blight-alternaria.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			disease_id: 3,
			type: 'image',
			url: 'https://www.planetnatural.com/wp-content/uploads/2012/12/late-blight-tomato.jpg',
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			disease_id: 4,
			type: 'image',
			url: 'https://th.bing.com/th/id/OIP.RAykwfZMZgqu2VHWiGEN4QHaFj?rs=1&pid=ImgDetMain',
			created_at: new Date(),
			updated_at: new Date()
		},
	];

	tomatoDiseaseMedia.forEach(async (media) => {
		await prisma.diseaseMedia.create({
			data: media
		});
		console.log(`Tomato Disease Media ${media.url} seeded`);
	});
};

module.exports = seedDiseaseMedia;