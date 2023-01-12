const HmacSHA256 = require("crypto-js/hmac-sha256");
const Base64 = require("crypto-js/enc-base64");

function verifyWebhook(body, signature) {
    const expectedSignature = HmacSHA256(
        body,
        process.env.LOOP_WEBHOOK_SECRET
    ).toString(Base64);
    return expectedSignature === signature;
}

module.exports = verifyWebhook;
