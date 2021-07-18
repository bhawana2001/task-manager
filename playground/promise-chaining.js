require('../src/db/mongoose')

const User = require('../src/models/user')

//find and update property using promise chaining

User.findByIdAndUpdate('60f26d4190b7170208ecff92', { age: 20 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 20 })
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})