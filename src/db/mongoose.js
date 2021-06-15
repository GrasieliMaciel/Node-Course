const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const user = new User({
//     name: ' Grasieli ',
//     password: '123password',
//     email: 'grasi@GMAIL.com'
// })

// user.save().then(() => {
//     console.log(user);
// }).catch((error) => {
//     console.log('Error to save user', error);
// })



// const task = new Task({
//     description: 'SA-6672'
// })

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Unable to save the task', error);
// })