const loopFetch = require("./utils/loop-fetch.js");

/**
 * This function sends a list of transfers to the Loop API.
 *
 * @param {string[]} transferIds - The list of transfer IDs to be cancelled.
 *
 * @returns {Promise<object[]>} A promise that resolves with the list of transfers that were cancelled.
 *
 * @throws {Error} If the request to the Loop API fails or returns an error.
 */
async function cancelTransfers(transferIds) {
    const response = await loopFetch(
        "/api/v1/transfers",
        "PATCH",
        JSON.stringify({ transfersIds: transferIds })
    );
    return response.transfers;
}

module.exports = cancelTransfers;
