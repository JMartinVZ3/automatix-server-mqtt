const firebase = require("../firestore/index")

const Cobot = {
    postGoodProduct: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.Cobot.GoodProducts': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postBadProduct: async (data) => {
        try {
            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'OpcData.Cobot.BadProducts': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
}

module.exports = {
    Cobot
}