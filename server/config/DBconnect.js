const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://Mind123:Mind123@cluster0.iay2uo3.mongodb.net/?retryWrites=true&w=majority/test';

const DBconnect = async () => {
    const response = await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connected to', response.connection.host)
}

module.exports = DBconnect;