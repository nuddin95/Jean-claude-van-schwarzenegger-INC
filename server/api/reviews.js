const router = require('express').Router();

const { Review, Product } = require('../db/models');
module.exports = router;

//This is tested and works....
router.get('/user/:userId', (req, res, next) => {

  const userId = req.params.userId;
  console.log('User Id :', userId)
  Review.findAll({
    where: {
      userId: userId
    }})
    .then(reviews => res.json(reviews))
    .catch(next);
});

//This is tested and works
router.get('/:productId', (req, res, next) => {

  const productId = req.params.productId;

  Review.findAll({
      where: {
         productId: productId
      }})
    .then(reviews => res.json(reviews))
    .catch(next);
});


//This is tested and works
router.post('/', (req, res, next) => {

  Review.create(req.body)
    .then(reviews => res.json(reviews))
    .catch(next);
});
