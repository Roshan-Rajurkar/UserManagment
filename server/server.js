const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const DBconnect = require('./config/DBconnect')
require("dotenv").config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

DBconnect();

app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log(`running on port number ${PORT}`)
})