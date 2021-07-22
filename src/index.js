const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

//USER CREATION END POINT

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    //uses await method to send a promise
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

//READ CREATION ENDPOINT FOR USERS
//find all users data
app.get('/users', async (req, res) => {

    //uses await method to send a promise
    try {
        const users = await User.find({})
        res.send(users)

    } catch (e) {
        res.status(500).send()
    }

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

//find specific user
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    //uses await method to send a promise
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

//TASK CREATION END POINT

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(200).send(task)
    }catch(e){
        res.status(400).send()
    }

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

//READ CREATION ENDPOINT FOT TASKS
//read all the task
app.get('/tasks', async (req, res) => {

    try{
        const tasks=await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(400).send()
    }

    // Task.find({}).then((tasks) => {
    //     res.status(200).send(tasks)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

//read single task
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try{
        const task=await Task.findById(_id)
        res.send(task)

    }catch(e){
        res.status(404).send()
    }

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})


//UPDATE CREATION ENDPOINT



app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
