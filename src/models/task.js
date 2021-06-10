const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description : {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        // require: false, - Da na mesma de não ter
        default: 0 //1 - true, 0 - false
    }
})

taskSchema.pre('save', async function (next) {
    const task = this

    console.log('Before save task');
    
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task