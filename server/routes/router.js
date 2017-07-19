const express = require('express')
const authCtrl = require('../controllers/auth')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const protected = require('../controllers/protected')
const auth = require('../controllers/auth')

router.use('/home', auth, protected)

// for tests  ->
router.post('/user/create', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then((savedUser) => {
      return res.json(savedUser)
    }, (e) => {
      console.log(e)
    })
})

router.get('/user/all', (req, res) => {
  User.find()
    .then((users) => res.json(users),
      (e) => {
        console.log(e)
      })
})
// <--

router.post('/login', (req, res) => {
  let data = {
    username: req.body.username,
    password: req.body.password
  }
  User.findOne(data).lean().exec(function (err, user) {
    if (err) {
      return res.json({error: true})
    }
    if (!user) {
      return res.status(404).json({'message': 'User not found!'})
    }

    let token = jwt.sign(user, 'awesome_secret_key', {
      expiresIn: 2880 // 2 hour
    })
    res.json({error: false, token: token})
  })
})

router.post('/logout', (req, res) => {
  res.send('login')
})

module.exports = router
