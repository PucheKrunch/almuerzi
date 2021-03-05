const express = require('express')
const Orders = require('../models/Orders')
const { isAuthenticated, hasRoles } = require('../auth')

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
router.post('/', isAuthenticated, (req,res) => {
    const { _id } = req.user
    Orders.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))
})

//  hasRole('user') -> Verify if the user has the role to do certain things
router.put('/:id', isAuthenticated, hasRoles(['admin','user']), (req,res) => {
    Orders.findOneAndUpdate(req.params.id,req.body).then(() => res.sendStatus(204))
})

router.delete('/:id', isAuthenticated, (req,res) => {
    Orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router