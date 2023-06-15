const { IoT } = require("../models/iot");
const Voltaje = require("../models/voltaje");
const Corriente = require("../models/corriente");
const Energia = require("../models/energia");
const Frecuencia = require("../models/frecuencia");
const Potencia = require("../models/potencia");


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
    getVoltage: async (req, res) => {
        try {

            const voltajeDB = await Voltaje
                .find()
                .sort ({ createdAt: 'desc' })
                .limit(50)

            const corrienteDB = await Corriente
                .find()
                .sort ({ createdAt: 'desc' })
                .limit(50)

            const energiaDB = await Energia
                .find()
                .sort ({ createdAt: 'desc' })
                .limit(50)

            const frecuenciaDB = await Frecuencia
                .find()
                .sort ({ createdAt: 'desc' })
                .limit(50)

            const potenciaDB = await Potencia
                .find()
                .sort ({ createdAt: 'desc' })
                .limit(50)

            let voltajes = []
            let corrientes = []
            let energias = []
            let frecuencias = []
            let potencias = []

            for (let i = 0; i < voltajeDB.length; i++) {
                voltajes.push(voltajeDB[i].voltaje)
                corrientes.push(corrienteDB[i].corriente)
                energias.push(energiaDB[i].energia)
                frecuencias.push(frecuenciaDB[i].frecuencia)
                potencias.push(potenciaDB[i].potencia)
            }
        
            return res.status(200).json({
                ok: true,
                voltajes,
                corrientes,
                energias,
                frecuencias,
                potencias,
            });

        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                message: "Hable con el administrador"
            })
        }
    }
}

module.exports = {
    IoTController,
}