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
				where: {
					is_cultivation: false
				},
				select: {
					is_cultivation: false,
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
			cultivation_tips: true,
			plant_media: {
				where: {
					is_cultivation: true
				},
				select: {
					is_cultivation: false,
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

module.exports = {
	getAllPlants,
	getPlantById,
	getCultivationTips
}