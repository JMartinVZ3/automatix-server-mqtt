const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');
const { OPCUAClient } = require("node-opcua-client");

const cron = require('node-cron');

var bodyParser = require("body-parser");

async function main() {

    const connectionStrategy = {
        initialDelay: 1000,
        maxRetry: 1
      };

    try {
        const endpointUrl = "opc.tcp://15.44.0.65:4840";
        console.log("Connecting to client...");
        const client = OPCUAClient.create({
            connectionStrategy: connectionStrategy,
            endpointMustExist: true,
        });
        await client.connect(endpointUrl);
        console.log("connected !");
        const session = await client.createSession();
        console.log("session created !");

        const maxAge = 0;
        const nodeOne = {
            nodeId: "ns=1;i=2",
        };
        const nodeTwo = {
            nodeId: "ns=1;i=3",
        };
        const nodeThree = {
            nodeId: "ns=1;i=4",
        };

        cron.schedule('* * * * * *', async function () {
            const data = await session.read(nodeOne, maxAge);
            const data1 = await session.read(nodeTwo, maxAge);
            const data2 = await session.read(nodeThree, maxAge);
            console.log(data.value.value);
            console.log(data1.value.value);
            console.log(data2.value.value);
        });

    } catch (err) {
        console.log("Ha ocurrido un error :(")
        if (err instanceof Error) {
            console.log(err.message);
        }
        process.exit(0);
    }
}

require('dotenv').config();

const client = mqtt.connect('mqtt://10.25.97.81');

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
    client.subscribe('electricConsumption', function (err) {
        if (!err) {
            console.log("Suscrito");
        }
    });
});

app.use('/api/v1/iot', require('./routes/iot.routes'));
app.use('/api/v1/cobot', require('./routes/cobot.routes'));

server.listen(process.env.PORT, (err) => {

    main();

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});

client.on('message', function (topic, message) {
    const electricConsumption = message.toString()

});
