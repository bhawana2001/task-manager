require('../src/db/mongoose')
const Task = require('../src/models/tasks')

//find and delete task by id

Task.findByIdAndRemove('60f2714385128908fc61ef2c').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})