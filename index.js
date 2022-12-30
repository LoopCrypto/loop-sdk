require("dotenv").config();
const signTransfer = require("./src/signTransfer.js");
const sendTransfers = require("./src/sendTransfers.js");
const signSendTransfer = require("./src/signSendTransfer.js");
module.exports = { signTransfer, signSendTransfer, sendTransfers };
