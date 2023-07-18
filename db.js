// const mongoose = require('mongoose');
// mongoose.set("strictQuery", false);


const mongoURI = "mongodb://localhost:27017/formData?tls=false&readPreference=primary&directConnection=true"


// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, (err, res)=>{
//         if(err){
//             setTimeout( () => connectToMongo() , 3000)
//         }
//         console.log("connected to mongo successfully");
//     })
// }


// connectToMongo();

// module.exports = connectToMongo;


// import MongoStore from 'connect-mongo';

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