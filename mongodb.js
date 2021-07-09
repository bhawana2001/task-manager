//CRUD

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID         //create object id

// destructuring the const variables
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()                               //id declared
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

    //INSERT OPERATIONS

    //    db.collection('users').insertOne({
    //        _id:id,      //id declare for user
    //        name:'Himanshu',
    //        age:22
    //    },(error,result)=>{
    //         if(error){
    //             return console.log('unable to insert user');
    //         }
    //         console.log(result.ops);
    //    })

    // db.collection('users').insertMany([
    //     {
    //         name:'A',
    //         age:29
    //     },
    //     {
    //         name:'B',
    //         age:20
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert');
    //     }
    //     console.log(result.ops);
    // })})

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Do the house chores',
    //         completed:true
    //     },
    //     {
    //         description:'Do the homework',
    //         completed:false
    //     },
    //     {
    //         description:'Practice DSA problems',
    //         completed:true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to add tasks');
    //     }
    //     console.log(result.ops);
    // })
})
