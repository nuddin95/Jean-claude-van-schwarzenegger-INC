const User = require('./user')
const Reviews = require('./review')
const Product = require('./product')
const Order = require('./order')
const OrderProduct = require('./orderProduct')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Product.belongsToMany(Order,{through: OrderProduct })
Order.belongsToMany(Product, {through: OrderProduct })

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
User.hasMany(Order, {as: 'OrderUserId'});
User.hasMany(Reviews, {as: 'UserId'});

module.exports = {
  User,
  Reviews,
  Product,
  Order,
  OrderProduct
}
