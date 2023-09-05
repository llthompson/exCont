const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')


router.get('/', productController.list);

router.get('/:_id', productController.show);

router.post('/', productController.create);



  module.exports = router