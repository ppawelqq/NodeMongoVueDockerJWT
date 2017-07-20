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
    username: req.body.data.username,
    password: req.body.data.password
  }
  User.findOne(data).lean().exec(function (err, user) {
    if (err) {
      return res.json({
        error: true
      })
    }
    if (!user) {
      return res.status(404).json({
        'message': 'User not found!'
      })
    }

    let token = jwt.sign(user, 'awesome_secret_key', {
      expiresIn: 2880 // 2 hour
    })
    res.json({
      error: false,
      token: token
    })
  })
})

router.post('/logout', (req, res) => {
  res.send('login')
})

router.post('/auth', (req, res) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  var error = null

  if (token) {
    jwt.verify(token, 'awesome_secret_key', function (err, decoded) {
      if (err) {
        error = err
      }
    })
    if (!error) {
      return res.status(200).send({
        'error': false
      })
    }
  } else {
    return res.status(401).send({
      'error': true
    })
  }
})

module.exports = router