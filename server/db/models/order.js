const Sequelize = require('sequelize')
const db = require('../db')


// userId should be inserted as a foreign key
const Order = db.define('order', {
  status:{
    type: Sequelize.ENUM,
    values: ['pending', 'ordered', 'shipped', 'delivered']
    }

})

module.exports = Order
