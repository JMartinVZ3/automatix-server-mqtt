const firebase = require("../firestore/index")

const IoT = {
    postElectricConsumption: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.electricConsumption': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postRpms: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.rpms': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
}

module.exports = {
    IoT
}