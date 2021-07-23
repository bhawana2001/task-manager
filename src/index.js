const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

//bcrypt used for password encryption 

const bcrypt=require('bcryptjs')

const myFunction=async()=>{

    const password='Bhawana2001'
    //bcrypt the password using below method
    const hashedPassword=await bcrypt.hash(password,8)

    console.log(password);
    console.log(hashedPassword)

    // compare method to find if password enterd by user is right or not
    const isMatch= await bcrypt.compare('bhawana2001',hashedPassword)
    console.log(isMatch);
}

myFunction()

