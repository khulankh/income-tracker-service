const express = require('express');
const cors = require('cors');
const connectToMongoDb = require('./utils/db');
const router = require('./routes/userRouter.js');
const port = 8080
const app = express();
app.use(cors())
app.use(express.json())

connectToMongoDb()
app.use(router)

app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})
