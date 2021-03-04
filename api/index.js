const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

const app = express()
//use() adds plug ins
app.use(bodyParser.json())
app.use(cors())

//Connects to our Mongo Atlas Data Base Server
//process.env acces to enviroment variables (MONGO_URI) Not created yet
//The object options are necesary to interpretate the url
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})



app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth',auth)

module.exports = app