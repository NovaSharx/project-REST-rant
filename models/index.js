const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    // Optional... removes some warning messages from the terminal
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./places')