//require mongooose package
const mongoose = require('mongoose')
//require validator
const validator = require('validator')
//require bcrypt
const bcrypt = require('bcryptjs')


// create user schema and copy all the model code inside of it

const userSchema = new mongoose.Schema({
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

//pre method because we want to use before doing any thing
//MIDDLEWARE
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// put userSchema ad a second argument in model
const User = mongoose.model('User', userSchema)

//exports the user
module.exports = User;
