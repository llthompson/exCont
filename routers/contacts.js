const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contacts')


router.get('/', contactController.list);

router.get('/:_id', contactController.show);

router.post('/', contactController.create);



  module.exports = router