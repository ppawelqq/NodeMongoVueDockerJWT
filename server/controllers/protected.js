const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('awesome protected data \n')
})

module.exports = router
