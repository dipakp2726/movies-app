const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
    .catch(err => console.log('Connection error' + err.message))

const db = mongoose.connection

module.exports = db

