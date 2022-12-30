const signTransfer = require("./signTransfer.js");
const sendTransfers = require("./sendTransfers.js");

/**
 * This function signs and sends a transfer to the Loop API.
 *
 * @param {object} opts - The options object.
 * @param {string} opts.invoiceId - Invoice ID related to the transfer. Can be the stripe ID or an internal ID you have in your system.
 * @param {string} opts.itemId - Loop Item ID that is associated with the transfer.
 * @param {string} opts.fromAddress - Wallet address where funds are pulled from.
 * @param {string} opts.toAddress - Wallet address where funds are going to.
 * @param {string} opts.tokenAddress - Address of the token used to pay.
 * @param {number} opts.amount - Amount to bill. If opts.usd is true, specify the amount in cents (e.g. 2999 for $29.99). If opts.usd is false, specify the native token amount (e.g. 1000000 for 1 USDC).
 * @param {boolean} opts.usd - Whether the amount is denominated in USD.
 * @param {string} opts.billDate - The date the transfer should be executed on, formatted as a UNIX timestamp in seconds.
 * @param {string} opts.entityId - Optional. If not specified, it will use your LOOP ID inferred by the API KEY.
 *
 * @returns {Promise<object[]>} A promise that resolves with the list of transfers that were successfully sent.
 *
 * @throws {Error} If the signing or the request to the Loop API returns an error.
 */
async function signSendTransfer(opts) {
    const {
        invoiceId,
        entityId,
        itemId,
        fromAddress,
        toAddress,
        tokenAddress,
        amount,
        usd,
        billDate,
    } = opts;
    const signature = await signTransfer(opts);
    const transfers = [
        {
            invoiceId: invoiceId,
            amount: amount.toString(),
            from: fromAddress,
            to: toAddress,
            token: tokenAddress,
            usd: usd,
            networkId: parseInt(process.env.LOOP_CONTRACT_NETWORK_ID),
            entityId: entityId || process.env.LOOP_API_ID,
            planId: itemId,
            billDate: billDate,
            signature: signature,
        },
    ];

    return sendTransfers(transfers);
}
module.exports = signSendTransfer;
