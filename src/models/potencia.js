const { Schema, model } = require('mongoose');

const PotenciaSchema = Schema({

    potencia: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Potencia', PotenciaSchema);