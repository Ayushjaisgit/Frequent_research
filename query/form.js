const formData = require('../models/formSchema');

exports.insertform = function (payload) {
    return formData.create(payload)
}
exports.getAllForms = function (payload) {
    return formData.find(payload)
}