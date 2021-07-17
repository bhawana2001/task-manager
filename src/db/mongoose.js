//require mongooose package
const mongoose = require('mongoose')
//require validator
const validator = require('validator')

//create mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

