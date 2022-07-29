const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')


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


