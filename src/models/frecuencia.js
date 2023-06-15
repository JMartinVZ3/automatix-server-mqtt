const { Schema, model } = require('mongoose');

const FrecuenciaSchema = Schema({

    frecuencia: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Frecuencia', FrecuenciaSchema);