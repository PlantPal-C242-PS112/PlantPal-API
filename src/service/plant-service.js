prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const getAllPlants = async () => {
	const plants = await prisma.plant.findMany({
		select: {
			id: true,
			name: true,
			description: true,
			cultivation_tips: false,
			created_at: true,
			updated_at: true
		}
	});

	return plants;
}

const getPlantById = async (id) => {
	const plant = await prisma.plant.findUnique({
		where: {
			id: parseInt(id)
		},
		include: {
			plant_media: {
				select: {
					cultivation: true,
					type: true,
					url: true
				}
			}
		}
	});

	if (!plant) {
		throw new ResponseError(404, 'Plant not found');
	}

	return plant;
}

module.exports = {
	getAllPlants,
	getPlantById
}