require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('60b56f91b1d17425c6057fb6', {age: 27}).then((user) => {
//     console.log(user);
    
//     return User.countDocuments({age: 27})
// }).then((users) => {
//     console.log(users);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    //The age represents {age: age}, when we have the same name I can put just {age}
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('60b56f91b1d17425c6057fb6', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})