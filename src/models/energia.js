const { Schema, model } = require('mongoose');

const EnergiaSchema = Schema({

    energia: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Energia', EnergiaSchema);