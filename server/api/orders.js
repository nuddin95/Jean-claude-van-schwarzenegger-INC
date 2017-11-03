const router = require('express').Router()
const { Order, Product } = require('../db/models')

router.get('/:userId', (req, res, next) => {
	Order.findAll({
		where:{
			id:req.params.userId
		},
		include:[{all:true}]
	})
})

module.exports = router;