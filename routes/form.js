// const FormData = mongoose.model('FormData', formData);
const express = require('express')
const router = express.Router();
const controller = require('../controller/fromdata')

// Handle form data submission
router.post('/submit', controller.insertFormController);

router.get('/all/forms', controller.getAllFormController);

module.exports = router;