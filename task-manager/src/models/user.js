const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error("Password cannot contain 'password'")
            }
        }
    },
    age: {
        type: Number,
        default: true,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User