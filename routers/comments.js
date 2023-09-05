const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments')


router.get('/', commentController.list);

router.get('/:_id', commentController.show);

router.post('/', commentController.create);



  module.exports = router