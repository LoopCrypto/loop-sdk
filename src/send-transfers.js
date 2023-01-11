const loopFetch = require("./utils/loop-fetch.js");

/**
 * This function sends a list of transfers to the Loop API.
 *
 * @param {object[]} transfers - The list of transfers to be sent.
 * @param {string} transfers[].invoiceId - The recipient of the transfer.
 * @param {string} transfers[].entityId - Your Loop Entity ID.
 * @param {number} transfers[].networkId - The network ID.
 * @param {string} transfers[].planId - Loop Item ID that is associated with the transfer. // TODO: needs to be renamed to item ID once the backend it renamed
 * @param {string} transfers[].from - Wallet address where funds are pulled from.
 * @param {string} transfers[].to - Wallet address where funds are going to.
 * @param {string} transfers[].token - Address of the token used to pay.
 * @param {string} transfers[].amount - Amount to bill. If transfers[].usd is true, specify the amount in cents (e.g. "2999" for $29.99). If transfers[].usd is false, specify the native token amount (e.g. "1000000" for 1 USDC).
 * @param {boolean} transfers[].usd - Whether the amount is denominated in USD.
 * @param {string} transfers[].signature - The signed transfer message.
 * @param {number} transfers[].billDate - The date the transfer should be executed on, formatted as a UNIX timestamp in seconds. Use the value 0 to indicate immediate processing.

 *
 * @returns {Promise<object[]>} A promise that resolves with the list of transfers that were successfully sent.
 *
 * @throws {Error} If the request to the Loop API fails or returns an error.
 */
async function sendTransfers(transfers) {
    const response = await loopFetch(
        "/api/v1/transfers",
        "POST",
        JSON.stringify(transfers)
    );
    return response.transfers;
}

module.exports = sendTransfers;
