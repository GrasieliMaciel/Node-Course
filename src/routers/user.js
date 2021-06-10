const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/test', (req, res) => {
    res.send('User routers')
})

router.post('/users', async (req, res) => {
    console.log(req)

    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
        //res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/users", auth, async (req, res) => {
    
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e) 
    }
})

router.get("/users/:id", async (req, res) => {
    const _id = req.params.id 

    try {
        const user = await User.findById(_id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age']

    // const isValidOperation = updates.every((update) => {//If I have 9 trues and 1 false, the every will return false
    //     return allowUpdates.includes(updates)
    // })

    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid fields'})
    }

    try {
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        const user = await User.findById(req.params.id)
        
        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        if (!user) {
            return res.status(404).send()
        } 
        
        res.send(user)
    } catch (e) {
        return res.status(400).send(e)
    }
})

router.delete('/user/:id', async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        return res.status(500).send(e)
    }
})

module.exports = router