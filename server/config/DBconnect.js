const mongoose = require('mongoose')
require("dotenv").config();

const DBconnect = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(response.connection.host)

    } catch (error) {
        console.log(error);
    }
}

module.exports = DBconnect;
