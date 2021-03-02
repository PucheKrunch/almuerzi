const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Model creation
//First argument is name
//Then we create a new Schema with our Model attributes
const Meals = mongoose.model('Meal', new Schema({
    name: String,
    desc: String,
}))
//We need to export our model in order to create it
module.exports = Meals