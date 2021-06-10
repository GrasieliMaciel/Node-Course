// CRUD  Create, Read, Update, Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const {MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID()
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const dataBaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to dabatse');
//     }

//     const db = client.db(dataBaseName)


    // db.collection('tasks').findOne({_id: new ObjectID("609441801ad69b68d8882df2")},(error, task) => {
    //     console.log(task);
    // })

    // db.collection('tasks').find({"completed" : false}).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60943d1a1b271a66bf945710")
    // },
    // {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    // {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // })

//     db.collection('tasks').deleteOne({
//         description: "SA-6322"
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error);
//     })

// })
