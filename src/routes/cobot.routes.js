const { Router } = require('express');
const { CobotController } = require('../controllers/cobot.controller')

const router = Router()

router.post('/product/good', CobotController.postBadProduct)

router.post('/product/bad', CobotController.postBadProduct)

module.exports = router
