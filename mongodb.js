//CRUD

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error){
       return console.log('Unable to connect to db');
    }

   const db= client.db(databaseName)

   db.collection('users').insertOne({
       name:'Bhawana',
       age:20
   },(error,result)=>{
        if(error){
            return console.log('unable to insert user');
        }
        console.log(result.ops);
   })

db.collection('users').insertMany([
    {
        name:'A',
        age:29
    },
    {
        name:'B',
        age:20
    }
],(error,result)=>{
    if(error){
        return console.log('Unable to insert');
    }
    console.log(result.ops);
})})

db.collection('tasks').insertMany([
    {
        description:'Do the house chores',
        completed:true
    },
    {
        description:'Do the homework',
        completed:false
    },
    {
        description:'Practice DSA problems',
        completed:true
    }
],(error,result)=>{
    if(error){
        return console.log('unable to add tasks');
    }
    console.log(result.ops);
})
})
