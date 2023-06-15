const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');

const { IoT } = require("./models/iot");

var bodyParser = require("body-parser");

// DB Config
require('./database/config').dbConnection();

// Inicializamos OPCUA
//require('./opcua/index').opcuaConnection();

require('dotenv').config();

const client = mqtt.connect('mqtt://10.25.66.229');

// App de Express
const app = express();

// Lectura y parseo del Body
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Node Server
const server = require('http').createServer(app);

client.on('connect', function () {
    console.log("Conectado");
    client.subscribe('voltaje', function (err) {
        if (!err) {
            console.log("Suscrito a Voltaje");
        }
    });
    client.subscribe('corriente', function (err) {
        if (!err) {
            console.log("Suscrito a Corriente");
        }
    });
    client.subscribe('potencia', function (err) {
        if (!err) {
            console.log("Suscrito a Potencia");
        }
    });
    client.subscribe('frecuencia', function (err) {
        if (!err) {
            console.log("Suscrito a Frecuencia");
        }
    });
    client.subscribe('energia', function (err) {
        if (!err) {
            console.log("Suscrito a Energía");
        }
    });
});

app.use('/api/v1/iot', require('./routes/iot.routes'));
app.use('/api/v1/cobot', require('./routes/cobot.routes'));
app.use('/api/v1/scada', require('./routes/scada.routes'));

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});

client.on('message', async function (topic, message) {

    const topico = topic.toString()
    const mensaje = message.toString()

    console.log(topico)
    console.log(mensaje)

    switch (topico) {
        case 'voltaje':
            await IoT.postVoltaje(mensaje)
            break;
        case 'corriente':
            await IoT.postCorriente(mensaje)
            break;
        case 'frecuencia':
            await IoT.postFrecuencia(mensaje)
            break;
        case 'energia':
            await IoT.postEnergia(mensaje)
            break;
        case 'potencia':
            await IoT.postPotencia(mensaje)
            break;
        default:
            break;
    }

});
