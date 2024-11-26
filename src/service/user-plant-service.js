prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');
const { validate } = require('../validation/validation');
const validation = require('../validation/user-plant-validation');

const get = async (id, username) => {
	const userPlant = await prisma.userPlant.findMany({
		where: {
			user_id: parseInt(id)
		},
		select: {
			plant_id: true,
			sowing_date: true,
			created_at: true,
			updated_at: true,
			plant: {
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
					}
				}
			},
		}
	});
	userPlant.unshift({
		username: username
	});

	return userPlant;
};

const add = async (userId, request) => {
	const { plantId } = validate(validation.userPlantIdValidation, request);

	if (await prisma.userPlant.findUnique({
		where: {
			user_id_plant_id: {
				user_id: userId,
				plant_id: plantId
			}
		}
	})) {
		throw new ResponseError(400, 'Plant Already Added');
	}

	return await prisma.userPlant.create({
		data: {
			user_id: userId,
			plant_id: plantId
		}
	});
};

const remove = async (userId, request) => {
	const { plantId } = validate(validation.userPlantIdValidation, request);

	if (!await prisma.userPlant.findUnique({
		where: {
			user_id_plant_id: {
				user_id: userId,
				plant_id: plantId
			}
		}
	})) {
		throw new ResponseError(400, 'Plant Not Found');
	}

	return await prisma.userPlant.delete({
		where: {
			user_id_plant_id: {
				user_id: userId,
				plant_id: plantId
			}
		}
	});
};

module.exports = {
	get,
	add,
	remove
};