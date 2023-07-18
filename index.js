const connectDB = require('./db')
const express = require('express')
const router = express.Router();
const cors = require('cors')
connectDB()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
// app.use(connectToMongo)

// available Routes

app.use('/api', require('./routes/form')) 


app.listen(port, () => {
  console.log(`Frequent Research app listening on port ${port}`)
})

module.exports = router ;