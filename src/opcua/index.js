const {
    OPCUAClient,
    ClientSubscription,
    TimestampsToReturn,
    ClientMonitoredItem,
} = require("node-opcua-client");

const { ManufacturingCell } = require('../models/manufacturingCell');

const { Cobot } = require('../models/cobot');

const connectionStrategy = {
    initialDelay: 1000,
    maxRetry: 1
};

let session; // Declare the session variable outside the function scope

const opcuaConnection = async() => {

    try {
        const endpointUrl = "opc.tcp://RAZER:4334";
        console.log("Connecting to client...");
        const client = OPCUAClient.create({
            connectionStrategy: connectionStrategy,
            endpointMustExist: true,
        });
        await client.connect(endpointUrl);
        console.log("connected !");
        session = await client.createSession();
        console.log("session created !");

        const subscription = ClientSubscription.create(session, {
            requestedPublishingInterval: 1000,
            requestedLifetimeCount: 100,
            requestedMaxKeepAliveCount: 10,
            maxNotificationsPerPublish: 100,
            publishingEnabled: true,
            priority: 10
        });
          
        subscription
          .on("started", function() {
            console.log(
              "subscription started for 2 seconds - subscriptionId=",
              subscription.subscriptionId
            );
          })
          .on("keepalive", function() {
            console.log("keepalive");
          })
          .on("terminated", function() {
            console.log("terminated");
          });
          
          
        const itemToMonitor1 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor2 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor3 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor4 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor5 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor6 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor7 = {
          nodeId: "ns=4;i=1"
        };

        const itemToMonitor8 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor9 = {
          nodeId: "ns=4;i=1"
        };
        const itemToMonitor10 = {
          nodeId: "ns=4;i=1"
        };

        const parameters = {
          samplingInterval: 100,
          discardOldest: true,
          queueSize: 10
        };
        
        const monitoredItem1 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor1,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem2 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor2,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem3 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor3,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem4 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor4,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem5 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor5,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem6 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor6,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem7 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor7,
          parameters,
          TimestampsToReturn.Both
        );

        const monitoredItem8 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor8,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem9 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor9,
          parameters,
          TimestampsToReturn.Both
        );
        const monitoredItem10 = ClientMonitoredItem.create(
          subscription,
          itemToMonitor10,
          parameters,
          TimestampsToReturn.Both
        );
        
        monitoredItem1.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postMachiningCycleTime(dataValue.value.value)
        });
        monitoredItem2.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postPneumaticCycleTime(dataValue.value.value)
        });
        monitoredItem3.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postTotalCycleTime(dataValue.value.value)
        });
        monitoredItem4.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postDrilling(dataValue.value.value)
        });
        monitoredItem5.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postMilling(dataValue.value.value)
        });
        monitoredItem6.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postEstampado(dataValue.value.value)
        });
        monitoredItem7.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await ManufacturingCell.postProcessedPieces(dataValue.value.value)
        });

        monitoredItem8.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await Cobot.postGoodProduct(dataValue.value.value)
        });
        monitoredItem9.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await Cobot.postBadProduct(dataValue.value.value)
        });
        monitoredItem10.on("changed", async (dataValue) => {    
          console.log("El valor ha cambiado: ", dataValue.value.value.toString());
          await Cobot.postTimePerBox(dataValue.value.value)
        });
        

    } catch (err) {
        console.log("Ha ocurrido un error :(")
        console.log(err)
        if (err instanceof Error) {
            console.log(err.message);
        }
        process.exit(0);
    }
}

const getSession = () => {
    return session;
};

module.exports = {
    opcuaConnection,
    getSession,
}