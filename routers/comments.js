const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments')


router.get('/', commentController.list);

  module.exports = router