//require mongooose package
const mongoose = require('mongoose')
//require validator
const validator = require('validator')

// // Model for the tasks

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

//exports tha task
module.exports = Tasks