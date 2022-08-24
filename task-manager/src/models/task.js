const mongoose = require('mongoose')
const validator = require('validator')



const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        trim: true,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task