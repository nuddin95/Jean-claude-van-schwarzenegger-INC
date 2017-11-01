const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  photos: {
    type: Sequelize.STRING
  },
  stock: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Product
