const router = require('express').Router()
const { Order, Product, OrderProduct} = require('../db/models')

router.get('/:userId', (req, res, next) => {
	Order.findAll({
		where:{
			id:req.params.userId
		},
		include:[{model:Product}]
	})
	.then(order => res.json(order))
})



router.get('/:orderId', (req, res, next)=>{
	Order.findById(req.params.orderId, {include:[{all:true}]})
})

router.put('/:userId/add/:productId', (req, res, next) => {
	let price;
	let updatedOrder;
	Product.findById(req.params.productId)
	.then(product => price = product.price)
	.then(()=>{
		return Order.findOrCreate({
			where:{
				userId:req.params.userId,
				status:"pending"
				}
			}
			)
	})
	.then(order => {
		console.log(order);
		updatedOrder = (order[0]).id;
		if(order[order.length-1]){
			return (order[0]).addProduct(req.params.productId)	
		}
	})
	.then(()=>{
		console.log(updatedOrder, Number(req.params.productId));
		return OrderProduct.findOne({
			where:{
				productId:Number(req.params.productId),
				orderId:updatedOrder
			}
		})	
	})
	.then((currOrder)=>{
		console.log("CURRENT ORDER", currOrder)
		currOrder.update({
			price,
			quantity:currOrder.quantity+1 || 1
		})
	})
	.then(() => res.send("ORDER UPDATED"))
	.catch(next)
})

// router.post('/', (req, res, next) => {
// 	Order.create(req.body)
// 	.then(order => res.json(order))
// 	.catch(next)
// })

router.delete('/:orderListId', (req, res, next)=>{
	//FINDING ORDERS ITEMS
	OrderProduct.findAll({ 
		where:{
			orderId: req.params.orderListId
		}
	})
	//DELETE ALL ORDER ITEMS
	.then(listOfProducts => Promise.all(listOfProducts.map(product => product.destroy())))
	//FIND ACTUAL ORDER
	.then(()=> Order.findById(req.params.orderListId))
	//DESTROYS ORDER
	.then(order => order.destroy())
	//CONFIRMATION MESSAGE
	.then(()=>res.send("Cart Destroyed!"))
	.catch(next)
})


module.exports = router;