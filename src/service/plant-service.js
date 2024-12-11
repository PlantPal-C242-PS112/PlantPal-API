prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const getAllPlants = async () => {
	const plants = await prisma.plant.findMany({
		select: {
			id: true,
			name: true,
			description: false,
			cultivation_tips: false,
			icon: true,
			created_at: false,
			updated_at: false,
		}
	});

	return plants;
};

const getPlantById = async (id, query) => {
	const plant = await prisma.plant.findUnique({
		where: {
			id: parseInt(id)
		},
		select: {
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
			},
			// retrieve read links if query is true
			read_links: query.read_links ? {
				select: {
					title: true,
					url: true
				}
			} : false
		}
	});

	if (!plant) {
		throw new ResponseError(404, 'Plant Not Found');
	}

	return plant;
};
// get cultivation tips of a plant and its plant media
const getCultivationTips = async (id) => {
	const plant = await prisma.plant.findUnique({
		where: {
			id: parseInt(id)
		},
		select: {
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
};

const getPlantDiseases = async (id) => {
	const diseases = await prisma.plantDisease.findMany({
		where: {
			plant_id: parseInt(id)
		},
		select: {
			id: true,
			name: true,
			image: true
		}
	});

	return diseases;
};

module.exports = {
	getAllPlants,
	getPlantById,
	getCultivationTips,
	getPlantDiseases
};