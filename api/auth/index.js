const jwk = require('jsonwebtoken')
const Users = require('../models/Users')

// isAuthenticated()
const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.sendStatus(403)
    }
    jwk.verify(token, 'mi_secreto', (err, decoded) => {
        const { _id } = decoded
        Users.findOne({_id}).exec()
            .then(user => {
                req.user = user
                next()
            })
    })
}

const hasRoles = roles => (req, res, next) => {
    if (roles.indexOf(req.user.role) > -1) {
        return next()
    }
    res.sendStatus(403)
}

module.exports = {
    isAuthenticated,
    hasRoles,
}