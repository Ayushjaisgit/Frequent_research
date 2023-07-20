const queryController = require('../query')
const { Form } = queryController;


const insertFormController = async (req, res) => {
	let data = req.body;

	if (!data.firstName || !data.lastName || !data.email || !data.dateOfBirth) {
		return res.send("Missing Parrams")
	}
	if (
		typeof data.firstName !== 'string' ||
		typeof data.lastName !== 'string' ||
		typeof data.email !== 'string' ||
		typeof data.country !== 'string' ||
		typeof data.state !== 'string' ||
		typeof data.city !== 'string' ||
		typeof data.gender !== 'string'
	) {
		return res.status(400).send('Please Enter Data in correct format')
	}
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailRegex.test(data.email)) {
		return res.status(400).send('Invalid email format.')
	}
	// Calculate age based on date of birth
	const currentDate = new Date()
	const birthDate = new Date(data.dateOfBirth)
	const ageInMilliseconds = currentDate - birthDate
	const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))

	if (ageInYears < 14) {
		return res.status(400).send('Age must be older than 14 years')
	}

	data.age = ageInYears

	let projectRes = await Form.insertform(data)

	if (!projectRes) {
		return res.status(500).send('Error in inserting data')
	}

	return res.status(200).send(projectRes)
}
exports.insertFormController = insertFormController

const getAllFormController = async (req, res) => {

	let payload = {}

	let projectRes = await Form.getAllForms(payload)

	if (projectRes.error) {
		return res.status(500).send('Error in inserting data')
	}
	return res.status(200).send(projectRes)
}
exports.getAllFormController = getAllFormController
