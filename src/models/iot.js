const firebase = require("../firestore/index")

const Voltaje = require('./voltaje');
const Corriente = require('./corriente');
const Energia = require('./energia');
const Potencia = require('./potencia');
const Frecuencia = require('./frecuencia');


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
    postVoltaje: async (data) => {
        try {

            const voltaje = new Voltaje({
                voltaje: data
            });

            await voltaje.save();

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.Voltaje': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postCorriente: async (data) => {
        try {

            const corriente = new Corriente({
                corriente: data
            });

            await corriente.save();

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.Corriente': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postPotencia: async (data) => {
        try {

            const potencia = new Potencia({
                potencia: data
            });

            await potencia.save();

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.Potencia': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postFrecuencia: async (data) => {
        try {

            const frecuencia = new Frecuencia({
                frecuencia: data
            });

            await frecuencia.save();

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.Frecuencia': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
    postEnergia: async (data) => {
        try {

            const energia = new Energia({
                energia: data
            });

            await energia.save();

            const response = await firebase.db.collection('AutomatixData')
            .doc("Q4xXhH1YjIwL7AZUzFt2")
            .update({ 'MqttData.IoT.Energia': data}, { merge: true })

            return response
        } catch (error) {
            console.log(error.details)
        }
    },
}

module.exports = {
    IoT
}