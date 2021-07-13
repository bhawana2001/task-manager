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

//define basic model for user

const User = mongoose.model('User', {
    name: {
        type: String,        //define what should be the type of name in db
        required: true,       //this make it important to give this property else got an error
        trim: true           //trim the string and remove extra spaces
    },
    age: {
        type: Number,        //define type of age
        default: 0,              //give default value 
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,         //change into lowercase
        // validator for email is valid or not
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,            //setb length should be 7 og greater than this
        validate(value) {            //password should not contain word password
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }

    }
})

//create instances of model

const me = new User({
    name: '   Himanshu Gaur    ',
    email: 'himanshugaur5553@gmail.com',
    age: 22,
    password: '       password123        '
})

//to save instance to the database

me.save().then((me) => {
    console.log(me);
}).catch((error) => {
    console.log('Error ', error);
})

// Model for the tasks

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

//create instance of task
const task = new Tasks({
    description: 'Do the work                    ',

})

//save the task
task.save().then((task) => {
    console.log(task);
}).catch((error) => {
    console.log(error)
})