const signTransfer = require("./signTransfer.js");
const fetch = require("node-fetch");

async function submitSignedTransfer(opts) {
    const {
        invoiceId,
        networkId,
        entityId,
        itemId,
        fromAddress,
        toAddress,
        tokenAddress,
        amount,
        usd,
    } = opts;
    const { signature } = await signTransfer(opts);

    const transfers = [
        {
            invoiceId: invoiceId,
            amount: amount,
            from: fromAddress,
            to: toAddress,
            token: tokenAddress,
            usd: usd,
            networkId: parseInt(networkId),
            entityId: entityId || process.env.LOOP_API_ID,
            planId: itemId,
            signature: signature,
        },
    ];
    const response = await fetch(
        `${process.env.LOOP_API_URL}/api/v1/transfers`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "entity-id": process.env.LOOP_API_ID,
                "api-key": process.env.LOOP_API_KEY,
            },
            body: JSON.stringify(transfers),
        }
    );
    if (response.ok) {
        return await response.json();
    } else {
        // TODO: should probably define better error codes for the SDK.
        throw new Error((await response.json()).message);
    }
}
module.exports = submitSignedTransfer;
