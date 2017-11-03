
const User = require('./user');

//We change the name from Reviews to Review....
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

//We change the name from Reviews to Review....
User.hasMany(Review, {as: 'UserId'});

User.hasMany(Order, {as: 'OrderUserId'});


module.exports = {
  User,
  Review,
  Product,
  Order,
  OrderProduct
}
