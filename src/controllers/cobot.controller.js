const { Cobot } = require("../models/cobot");

const CobotController = {
    postGoodProduct: async (req, res) => {
        try {
            const response = await Cobot.postGoodProduct(
                req.body.goodProducts
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
    postBadProduct: async (req, res) => {
        try {
            const response = await Cobot.postBadProduct(
                req.body.badProducts
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
    CobotController,
}