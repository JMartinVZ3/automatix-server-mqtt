const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect("mongodb+srv://jmartinvz:JOSE12m34VZ56@cluster0.q59hctp.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el admin');
    }

}

module.exports = {
    dbConnection
}