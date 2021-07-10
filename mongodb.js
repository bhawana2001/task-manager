//CRUD

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID         //create object id

// destructuring the const variables
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()                               //id declared


//ID OPERATIONS

// console.log(id);
// console.log(id.getTimestamp());                      //time stamp id
// console.log(id.id);                                  //id property of id
// console.log(id.id.length);                           //id length property
//console.log(id.toHexString().length);                   //id hexstring property


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to db');
    }

    const db = client.db(databaseName)


    // //INSERT OPERATIONS ----  CREATE


    // //insertOne operation
    // db.collection('users').insertOne({
    //     _id: id,      //id declare for user
    //     name: 'Himanshu',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // //insertMany operation in users
    // db.collection('users').insertMany([
    //     {
    //         name: 'A',
    //         age: 29
    //     },
    //     {
    //         name: 'B',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert');
    //     }
    //     console.log(result.ops);
    // })

    // //insertMany operation in tasks

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Do the house chores',
    //         completed: true
    //     },
    //     {
    //         description: 'Do the homework',
    //         completed: false
    //     },
    //     {
    //         description: 'Practice DSA problems',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to add tasks');
    //     }
    //     console.log(result.ops);
    // })



    // // FIND operations ---- READ

    // db.collection('users').findOne({ name: 'Himanshu', age: 1 }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch');
    //     }
    //     console.log(user);
    // })

    // //  find method doesn't have  any callback function it has toArray method for getting the data

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('unable to fetch');
    //     }
    //     console.log(users);
    // })

    // // count method to count the total no. of enteries

    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     if (error) {
    //         return console.log('unable to fetch');
    //     }
    //     console.log(count);
    // })

    // // find operation for task app

    // db.collection('tasks').findOne({ _id=new ObjectID("60e7ccd6d3e6ec3d8454789e") }, (error, task) => {
    //     if (error) {
    //         return console.log('unable to fetch');
    //     }
    //     console.log(task);
    // })

    // //find all task that are not completed
    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     if (error) {
    //         return console.log('unable to find');
    //     }
    //     console.log(task);
    // })


    //UPDATE OPERATIONS 

    //update one operation

    // const updatePromise=db.collection('users').updateOne({
    //     _id:new ObjectID("60e5b63aecfda347641596f9")
    // },{
    //     $set:{
    //         name:'New name'
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // //we can also chain above promise like this

    // db.collection('users').updateOne({
    //     _id:new ObjectID("60e5b63aecfda347641596f9")
    // },{
    //     //set operation to set a net value
    //     $set:{
    //         name:'Mike'
    //     }
    //     // increment operation to increase any int value or decrease by assign -sign
    //     //     $inc:{
    //     //     age:5
    //     // }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // //updateMany operation

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //DELETE OPERATIONS

    //delete many
    db.collection('users').deleteMany({
        age: 29
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    })

    //delete one

    db.collection('tasks').deleteOne({
        description: 'Do the homework'
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    })

})