prisma = require('../application/database');
const { ResponseError } = require('../error/response-error');

const getAllDiseases = async () => {
	const diseases = await prisma.plantDisease.findMany({
		select: {
			id: true,
			name: true,
			plant: {
				select: {
					id: true,
					name: true
				}
			},
			image: true
		}
	});

	return diseases;
};

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
			image: true,
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
					name: true,
					url: true
				},
			});
			// return { ...medicine, medicine_links: medicineLinks };
			return {
				name: medicine.name,
				description: medicine.description,
				medicine_links: medicineLinks
			};
		})
	);

	return disease;
}

module.exports = {
	getAllDiseases,
	getById
};