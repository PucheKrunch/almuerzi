const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Orders = mongoose.model('Order', new Schema({
    //Here we indicate that one attribute will be an object id of an Meal object
    meal_id: { type: Schema.Types.ObjectId, ref: 'Meal' },
    user_id: String,
}))

module.exports = Orders