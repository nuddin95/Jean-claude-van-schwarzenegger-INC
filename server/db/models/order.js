const Sequelize = require('sequelize')
const db = require('../db')
const chalk = require('chalk')
// maybe import orderProducts

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
    console.log(magenta('ORDERED!!!!'))
  }
})

// magenta('hello world')

function magenta(str){
  return (chalk.magenta(str))
}



module.exports = Order


