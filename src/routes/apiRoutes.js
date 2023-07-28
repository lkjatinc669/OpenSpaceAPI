const express = require('express')
const router = express.Router()
const apiController = require('../controller/apiController')

router.get('/', apiController.get)
router.post('/', apiController.post)
router.put('/', apiController.put)
router.delete('/', apiController.delete)

module.exports = router