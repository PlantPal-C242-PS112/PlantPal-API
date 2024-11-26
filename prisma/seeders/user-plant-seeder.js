const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedUserPlants = async () => {
	await prisma.userPlant.createMany({
		data: [
			{
				user_id: 1,
				plant_id: 1
			},
			{
				user_id: 1,
				plant_id: 2,
				sowing_date: new Date()
			},
			{
				user_id: 1,
				plant_id: 3
			},
			{
				user_id: 2,
				plant_id: 1
			},
			{
				user_id: 2,
				plant_id: 2
			}
		]
	});

	console.log('User Plants Seeded Successfully');
};

module.exports = {
	seedUserPlants
};