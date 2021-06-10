// CRUD  Create, Read, Update, Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const id = new ObjectID()
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);
console.log(id.getTimestamp());

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to dabatse');
    }

    const db = client.db(dataBaseName)

    // db.collection('users').insertOne({
    //     name: 'Grasieli',
    //     age: 24
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     } 

    //     console.log(result.ops);
    // })


    // db.collection('users').insertMany([
    //     {
    //         name: 'Lucio',
    //         age: 27
    //     },
    //     {
    //         name: 'Mãe',
    //         age: 40
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })



    // db.collection('users').insertMany([
    //     {
    //         name: 'Lucio',
    //         age: 27
    //     },
    //     {
    //         name: 'Mãe',
    //         age: 40
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'SA-6322',
    //         completed: false
    //     },
    //     {
    //         description: 'SA-6416',
    //         completed: true
    //     },
    //     {
    //         description: 'SA-6388',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })


        // db.collection('users').findOne({_id: new ObjectID("609446c5ed41806bc969e51a")}, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch the user!');
    //     }
        
    //     console.log(user);
    // })

    // db.collection('users').find({name: 'Grasieli'}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({name: 'Grasieli'}).count((error, count) => {
    //     console.log(count);
    // })
})
