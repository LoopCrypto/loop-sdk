require("dotenv").config();

const loop = {
    verifyWebhook: require("./src/actions/verify-webhook.js"),
    getTransfers: require("./src/actions/get-transfers.js"),
    sendTransfers: require("./src/actions/send-transfers.js"),
    cancelTransfers: require("./src/actions/cancel-transfers.js"),
    signTransfer: require("./src/actions/sign-transfer.js"),
    signSendTransfer: require("./src/actions/sign-send-transfer.js"),
};

module.exports = {
    loop: loop,
};
