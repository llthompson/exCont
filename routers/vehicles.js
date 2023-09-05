const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicles')


router.get('/', vehicleController.list);

router.get('/:_id', vehicleController.show);

router.post('/', vehicleController.create);



  module.exports = router