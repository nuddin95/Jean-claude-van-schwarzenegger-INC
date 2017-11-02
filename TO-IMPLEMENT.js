  .then(() => {
    OrderProduct.findAll({where: {
      orderId: 1,
      productId: 1
    }})
    .then(order => {
      console.log('ORDER!!!!', order[0].quantity)
      order[0].update({quantity: 1})
    })
  })


  .then(() => Product.findById(1))  // important to return ***
  .then(product => {
    return product.addOrder(1)
  })
  .then(console.log)


  .then(() => Product.findById(1))  // important to return ***
  .then(product => {
    return product.addOrder(1)
  })
  .then(console.log)





  // .then(() => Product.findById(1))  // important to return ***
// .then(product => {
//   return product.addOrder(1)
// })
// // .then(console.log)
// .then(()=>{
//  return Order.findById(1) })
//  .then(order => {
//   // console.log(order.dataValues)
//   return order.update({status:'ordered'})
//  })
