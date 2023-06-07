const { IoT } = require("../models/iot");

const IoTController = {
    postElectricConsumption: async (req, res) => {
        try {
            const response = await IoT.postElectricConsumption(
                req.body.electricConsumption
            )

            res.status(200).json({
                ok: true,
                response,
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({ 
                ok: false,
                message: "Hable con el administrador",
            })
        }
    },
    postRpms: async (req, res) => {
        try {
            const response = await IoT.postRpms(
                req.body.rpms
            )

            res.status(200).json({
                ok: true,
                response,
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({ 
                ok: false,
                message: "Hable con el administrador",
            })
        }
    },
}

module.exports = {
    IoTController,
}