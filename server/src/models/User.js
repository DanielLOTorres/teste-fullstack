const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    birth: String,
    created: String,
    updated: String
})


module.exports = User