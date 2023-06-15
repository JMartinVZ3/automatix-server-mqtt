const firebase = require("../firestore/index")

const ManufacturingCell = {
    postMachiningCycleTime: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.MachiningCycleTime': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postPneumaticCycleTime: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.PneumaticCycleTime': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postTotalCycleTime: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.TotalCycleTime': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postDrilling: async (data) => {
        try {

            if (data == true) {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Taladrado"}, { merge: true })
            } else {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Ninguno"}, { merge: true })
            }

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.Drilling': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postMilling: async (data) => {
        try {

            if (data == true) {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Fresado"}, { merge: true })
            } else {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Ninguno"}, { merge: true })
            }

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.Milling': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postEstampado: async (data) => {
        try {

            if (data == true) {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Estampado"}, { merge: true })
            } else {
                await firebase.db.collection('AutomatixData')
                    .doc("Q4xXhH1YjIwL7AZUzFt2")
                    .update({ 'OpcData.ManufacturingCell.CurrentProcess': "Ninguno"}, { merge: true })
            }

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.Estampado': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postProcessedPieces: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.ManufacturingCell.ProcessedPieces': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
}

module.exports = {
    ManufacturingCell
}