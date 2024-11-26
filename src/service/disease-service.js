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
			name: true,
			plant: {
				select: {
					name: true
				}
			},
			description: true,
			prevention: true,
			treatment: true,
			disease_media: {
				select: {
					type: true,
					url: true
				}
			},
			medicines: {
				select: {
					id: true,
					name: true,
					description: true
				}
			}
		}
	});

	if (!disease) {
		throw new ResponseError(404, 'Disease Not Found');
	}

	disease.medicines = await Promise.all(
		disease.medicines.map(async (medicine) => {
			const medicineLinks = await prisma.medicineLink.findMany({
				where: {
					medicine_id: medicine.id
				},
				select: {
					id: true,
					name: true,
					url: true
				},
			});
			return { ...medicine, medicine_links: medicineLinks };
		})
	);

	return disease;
}

module.exports = {
	getById
};