require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('60b57f34dd9af12aee8ef42b', ).then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((tasks) => {
//     console.log(tasks);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskCount = async (id, completed) => {
    const deleted = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    
    return count
}

deleteTaskCount('60b57f832ec6d02b38c7d880', false).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
