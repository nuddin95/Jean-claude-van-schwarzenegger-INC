const router = require('express').Router()
const {User, Order, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'firstName', 'lastName', 'status']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/allOrders/:userId', (req, res, next) => {
	Order.findAll({
		where:{
			userId:req.params.userId
		},
		include:[{model:Product}]
	})
	.then(order => res.json(order))
	.catch(next)
})

router.put('/:userId', (req, res, next)=>{
	User.findById(req.params.userId)
	.then(user => user.update(req.body))
	.then(newUser => res.json(newUser.email))
	.catch(next)
})

router.post('/', (req, res, next) => {
	User.create(req.body)
	.then(user => res.json(user.email))
	.catch(next)
})

router.delete('/:userId', (req, res, next)=>{
	User.findById(req.params.userId)
	.then(user=> user.destroy())
	.then(()=> res.send("User Destroyed!!!"))
	.catch(next)
})
