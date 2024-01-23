const express = require('express');
const cors = require('cors');
const port = 8080
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})
