require('../src/db/mongoose')

const User = require('../src/models/user')

// find and update property using promise chaining

User.findByIdAndUpdate('60f26d4190b7170208ecff92', { age: 20 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 20 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

// ASYNC AND AWAIT EXAMPLE

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60f26d4190b7170208ecff92',2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})