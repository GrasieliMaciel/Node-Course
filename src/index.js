const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//If we don't call the next the chain won't be finised.
// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     if (req.method === 'GET') {
//         res.send('GET are disabled')
//     }else{
//         next()
//     }
//     next()
// })

// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     res.status(503).send('The site is in Maintenance')
// })

//
// Without middleware: new request -> run route handler
//
// With middleware:    new request -> do somethong -> run route handler
//

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisisnodecourse', {expiresIn: '60 second'})

    const data = jwt.verify(token, 'thisisnodecourse')
    console.log(data);
}

myFunction()