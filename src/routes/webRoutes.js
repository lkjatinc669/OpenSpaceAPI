const express = require('express')
const router = express.Router()
const webController = require('../controller/webController')

router.get('/', webController.loadHome)
router.get('/home', webController.loadHome)

module.exports = router