const { Router } = require('express');
const { ScadaController } = require('../controllers/scada.controller')

const router = Router()

router.post('/update', ScadaController.updateVariable)

module.exports = router
