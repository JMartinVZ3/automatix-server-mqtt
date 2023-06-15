const { Schema, model } = require('mongoose');

const CorrienteSchema = Schema({

    corriente: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Corriente', CorrienteSchema);