require("dotenv").config();

const loop = {
    verifyWebhook: require("./src/verify-webhook.js"),
    getTransfers: require("./src/get-transfers.js"),
    sendTransfers: require("./src/send-transfers.js"),
    cancelTransfers: require("./src/cancel-transfers.js"),
    signTransfer: require("./src/sign-transfer.js"),
    signSendTransfer: require("./src/sign-send-transfer.js"),
};

module.exports = {
    loop: loop,
};
