'use strict'

const express = require('express') // or import in babel
const PORT = 3000
const HOST = '0.0.0.0'
const app = express()
const mongoose = require('mongoose')
const router = require('./server/routes/router')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

app.use(cors())
app.options('*', cors())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

mongoose.connect('mongodb://admin:admin@ds161012.mlab.com:61012/node-test')

app.use(router)

app.listen(PORT, HOST)

console.log(`app is running on http://${HOST}:${PORT}`)
