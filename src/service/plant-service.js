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
		select: {
			id: true,
			name: true,
			description: true,
			plant_media: {
				where: {
					is_cultivation: false
				},
				select: {
					type: true,
					url: true
				}
			}
		}
	});

	if (!plant) {
		throw new ResponseError(404, 'Plant Not Found');
	}

	return plant;
}
// get cultivation tips of a plant and its plant media
const getCultivationTips = async (id) => {
	const plant = await prisma.plant.findUnique({
		where: {
			id: parseInt(id)
		},
		select: {
			id: true,
			name: true,
			cultivation_tips: true,
			plant_media: {
				where: {
					is_cultivation: true
				},
				select: {
					type: true,
					url: true
				}
			}
		},
	});

	if (!plant) {
		throw new ResponseError(404, 'Plant Not Found');
	}

	return plant;
}

const getPlantDiseases = async (id) => {
	const diseases = await prisma.plantDisease.findMany({
		where: {
			plant_id: parseInt(id)
		},
		select: {
			id: true,
			name: true,
			disease_media: {
				select: {
					type: true,
					url: true
				}
			}
		}
	});

	return diseases;
}

module.exports = {
	getAllPlants,
	getPlantById,
	getCultivationTips,
	getPlantDiseases
}