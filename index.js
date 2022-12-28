require("dotenv").config();
const signTransfer = require("./src/signTransfer.js");
const submitSignedTransfer = require("./src/submitSignedTransfer.js");
module.exports = { signTransfer, submitSignedTransfer };
