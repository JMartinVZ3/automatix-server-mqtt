const { Schema, model } = require('mongoose');

const VoltajeSchema = Schema({

    voltaje: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Voltaje', VoltajeSchema);