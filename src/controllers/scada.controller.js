const { getSession } = require("../opcua/index");

const {
    AttributeIds,
} = require("node-opcua-client");

const ScadaController = {
    updateVariable: async (req, res) => {
        try {

            const session = getSession()

            const response = await session.write({
                nodeId: "ns=1;s=MyVariable1",
                attributeId: AttributeIds.Value,
                value: /*new DataValue(*/{
                    value: {/* Variant */
                        dataType: "Double",
                        value: req.body.newVariable,
                    }
                }
            })

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
    ScadaController,
}