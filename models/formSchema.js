const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    state: String,
    city: String,
    gender: String,
    dateOfBirth: Date,
    age:Number
  });

const formData = mongoose.model('CustomerRequest', formDataSchema);

module.exports = formData;
