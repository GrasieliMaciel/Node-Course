const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
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

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age']

    const isValidOperation = updates.every((update) => allowUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid fields'})
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        
        res.send(req.user)
    } catch (e) {
        return res.status(400).send(e)
    }
})

router.delete('/user/me', auth,async (req, res) => {

    try {
        //const user = await User.findByIdAndDelete(req.user._id)
        req.user.remove()
        res.send(req.user)
    } catch (e) {
        return res.status(500).send(e)
    }
})

const upload = multer({
    //dest: 'avatars', the function will pass the image ahead to do something with it.
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image!'))
        }
        cb(undefined, true)
    }
})

router.post('/user/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
    
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

router.delete('/user/me/avatar', auth, async (req, res) => {
    try {
        req.user.avatar = undefined
        await req.user.save()
        res.send() 
    } catch (e) {
        return res.status(500).send(e)
    }
})

router.get('/user/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
    } catch (e) {
        return res.status(404).send(e) 
    }
})


module.exports = router