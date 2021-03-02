const express = require('express')
const Orders = require('../models/Orders')

const router = express.Router()

//In this case the Orders block will be executed if we enter 
//the route api/Orders with the method get
router.get('/', (req, res) => {
    Orders.find().exec().then(x => res.status(200).send(x))
})

router.get('/:id', (req,res) => {
    Orders.findById(req.params.id).exec().then(x => res.status(200).send(x))
})

//Same thing but with the post method
router.post('/', (req,res) => {
    Orders.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req,res) => {
    Orders.findOneAndUpdate(req.params.id,req.body).then(() => res.sendStatus(204))
})

router.delete('/:id', (req,res) => {
    Orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router