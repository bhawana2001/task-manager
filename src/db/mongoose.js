//require mongooose package
const mongoose=require('mongoose')

//create mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

//define basic model for user

const User=mongoose.model('User',{
    name:{
        type:String         //define what should be the type of name in db
    },
    age:{
        type: Number        //define type of age
    }
})

//create instances of model

const me=new User({
    name:'Bhawana Gaur',
    age:20
})

//to save instance to the database

me.save().then((me)=>{
    console.log(me);
}).catch((error)=>{
    console.log('Error ',error);
})
