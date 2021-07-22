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

// ASYNC AWAIT FUNCTION EXAMPLE

const deleteAndCount = async (id, completed) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteAndCount('60eadf97b34fee2ce07e54ad',false).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})