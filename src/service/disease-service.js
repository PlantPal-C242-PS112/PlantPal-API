// prisma = require('../application/database');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const { ResponseError } = require('../error/response-error');

const getById = async (id) => {
	const disease = await prisma.plantDisease.findUnique({
		where: {
			id: parseInt(id)
		},
		select: {
			id: true,
			name: true,
			plant: {
				select: {
					id: true,
					name: true
				}
			},
			description: true,
			care_tips: true,
			disease_media: {
				select: {
					type: true,
					url: true
				}
			}
		}
	});

	if (!disease) {
		throw new ResponseError(404, 'Disease Not Found');
	}

	return disease;
}

module.exports = {
	getById
};