const mongoURI = "mongodb://localhost:27017/formData?tls=false&readPreference=primary&directConnection=true"

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log('not connected')
        process.exit()
    }
}

module.exports = connectDB