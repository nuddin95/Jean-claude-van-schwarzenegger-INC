const Sequelize = require('sequelize')
const db = require('../db')
const chalk = require('chalk')
// maybe import orderProducts
const OrderProduct = require('./orderProduct')

// userId should be inserted as a foreign key
const Order = db.define('order', {
  status:{
    type: Sequelize.ENUM,
    values: ['pending', 'ordered', 'shipped', 'delivered']
    }

})

//after update of values change price in orderProduct
Order.hook('afterUpdate', order => {
  if(order.status == 'ordered'){

    OrderProduct.findOne({where: {orderId: 1}})
    .then(orderedProduct => {
      console.log(chalk.magenta(orderedProduct.dataValues))
          // orderedProduct.update({price: 10})
    })
  }
})

// magenta('hello world')

function magenta(str){
  return (chalk.magenta(str))
}



module.exports = Order


