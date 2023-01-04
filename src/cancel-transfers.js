const loopFetch = require("./utils/loop-fetch.js");

/**
 * This function sends a list of transfers to the Loop API.
 *
 * @param {object[]} transfers - The list of transfers to be sent.
 * @param {string} transfers[].invoiceId - The recipient of the transfer.
 * @param {string} transfers[].from - Wallet address where funds are pulled from.
 * @param {string} transfers[].to - Wallet address where funds are going to.
 * @param {string} transfers[].token - Address of the token used to pay.
 * @param {number} transfers[].networkId - Network Id.
 *
 * @returns {Promise<object[]>} A promise that resolves with the list of transfers that were successfully sent.
 *
 * @throws {Error} If the request to the Loop API fails or returns an error.
 */
async function cancelTransfers(transfers) {
    const response = await loopFetch(
        "/api/v1/transfers",
        "PATCH",
        JSON.stringify(transfers)
    );
    return response;
}

module.exports = cancelTransfers;
