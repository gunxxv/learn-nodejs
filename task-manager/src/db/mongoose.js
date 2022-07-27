const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')


const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Mike',
    email: 'mike@'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})


// const Task = mongoose.model('Tasks', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const me = new Task({
//     description: 'Pot tree',
//     completed: true
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((erroe) => {
//     console.log('Error', console.error())
// })