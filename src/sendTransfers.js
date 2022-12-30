const fetch = require("node-fetch");

/**
 * This function sends a list of transfers to the Loop API.
 *
 * @param {object[]} transfers - The list of transfers to be sent.
 * @param {string} transfers[].invoiceId - The recipient of the transfer.
 * @param {string} transfers[].entityId - Your Loop Entity ID. // TODO: This is not optional when calling the API, which seems to be different from gitbook docs.
 * @param {number} transfers[].networkId - The network ID.
 * @param {string} transfers[].planId - Loop Item ID that is associated with the transfer. // TODO: needs to be renamed to item ID once the backend it renamed
 * @param {string} transfers[].from - Wallet address where funds are pulled from.
 * @param {string} transfers[].to - Wallet address where funds are going to.
 * @param {string} transfers[].token - Address of the token used to pay.
 * @param {string} transfers[].amount - Amount to bill. If transfers[].usd is true, specify the amount in cents (e.g. "2999" for $29.99). If transfers[].usd is false, specify the native token amount (e.g. "1000000" for 1 USDC).
 * @param {boolean} transfers[].usd - Whether the amount is denominated in USD.
 * @param {number} transfers[].billDate - The date the transfer should be executed on, formatted as a UNIX timestamp in seconds.
 * @param {string} transfers[].signature - The signed transfer message.
 *
 * @returns {Promise<object[]>} A promise that resolves with the list of transfers that were successfully sent.
 *
 * @throws {Error} If the request to the Loop API fails or returns an error.
 */
async function sendTransfers(transfers) {
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
        return (await response.json()).transfers;
    } else {
        // TODO: should probably define better error codes for the SDK.
        throw new Error((await response.json()).message);
    }
}

module.exports = sendTransfers;
