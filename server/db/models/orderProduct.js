const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL,
    defaultValue: null
  }
})

module.exports = OrderProduct


//extra

// when order pending price is null


// on checkout (order completion )
