const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const DBconnect = require('./config/DBconnect')

app.use(cors());
app.use(express.json())

DBconnect();

app.get('/', (req, res) => {
    res.send('working api')
})
app.use('/', userRoutes)

app.listen(5000, () => {
    console.log('running on port number 5000')
})