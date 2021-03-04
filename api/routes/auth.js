const express = require('express')
const Users = require('../models/Users')

const router = express.Router()

router.post('/register', (req,res) => {
    res.send('soy registro')
})

router.post('/login', (req,res) => {
    res.send('soy login')
})

module.exports = router