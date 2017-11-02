const User = require('./user')
const Review = require('./review')
const Product = require('./product')
const Order = require('./order')
const OrderProduct = require('./orderProduct');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Product.belongsToMany(Order,{through: OrderProduct });
Order.belongsToMany(Product, {through: OrderProduct });

Product.hasMany(Review);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Review, {as: 'UserId'});

module.exports = {
  User,
  Review,
  Product,
  Order,
  OrderProduct
}
