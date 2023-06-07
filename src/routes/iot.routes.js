const { Router } = require('express');
const { IoTController } = require('../controllers/iot.controller')

const router = Router()

router.post('/electric', IoTController.postElectricConsumption)

router.post('/rpms', IoTController.postRpms)

module.exports = router
