const mongoose = require('mongoose')

const schema = mongoose.schema

const Movie = new schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true }
    },
    { timestamp: true }
)

module.exports = mongoose.Model('movies', Movie)