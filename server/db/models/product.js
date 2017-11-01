const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: { // not going to work !!!***
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  photos: {
    type: Sequelize.STRING,
    defaultValue: 'https://dr56wvhu2c8zo.cloudfront.net/kungfury/assets/2173642e-fecd-4226-ad2c-abe9bd4c99d4/kung-fury-time-travel.jpg'
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Product
