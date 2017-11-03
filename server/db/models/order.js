const Sequelize = require('sequelize')
const db = require('../db')
const chalk = require('chalk')
// maybe import orderProducts
const OrderProduct = require('./orderProduct')

// userId should be inserted as a foreign key
const Order = db.define('order', {
  status:{
    type: Sequelize.ENUM,
    values: ['pending', 'ordered', 'shipped', 'delivered'] //maybe we could make a defualt pending value for
    }

})

//after update of values change price in orderProduct
Order.hook('afterUpdate', order => {
  if(order.status == 'ordered'){

    OrderProduct.findOne({where: {orderId: 1}})
    .then(orderedProduct => {
      magenta('ordered product')
      console.log(orderedProduct.dataValues)
      return orderedProduct.update({price: 10})
    })
  }
})

// magenta('hello world')

function magenta(str){
  console.log (chalk.magenta(str))
}



module.exports = Order


