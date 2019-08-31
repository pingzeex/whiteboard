

/* This program is for basic testing  of pingzee-x node.js client */

var Pingzee = require("pingzee-gateway");
var gateway = new Pingzee();
var testNode = gateway.connectNode({
    /* Insert your node's  access key here */
    key: " ",
    /*  Define the flow type of data - fullflow , inflow , outflow  */
    type: "fullflow",
    /* Name of your node , syntax for  -  username/node/name    */
    name: " ",
    /*  Define the channels you want to listen on -
         it can be any random string  */
    channels: ["yo"]
});
/*  Initalize the node connection */
testNode.init(function (err, status) {
    if (err) {

        console.log("[--Error found while connecting--]")
        // console.log(err)
    } else {
        console.log("[--- Connected ---]");
        // console.log(status);
    }
});

/*  Handshake status  */
testNode.on("handshake", function (data) {

    console.log("Handshake data ", data);
    if (data.success) {

        console.log("[--App is now connected]");

        /*  Send something after handshake */

        /* Object.send(data,"channel") */

        testNode.send("Pingzee-x Hello world ! in channel yo", "yo");

    } else {
        console.log("[--Error handshake--]");

        console.log(data);

    }
});

/*  For getting the yo data */
testNode.on("yo", function (data) {

    console.log("[yo data --] ", data);
});

/*  Error handling */
testNode.on("error", function (data) {

    console.log("[--Pingzee errror---]");
    console.log(data);

});
