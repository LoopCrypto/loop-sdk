const loopFetch = require("./utils/loop-fetch.js");

/**
 * This function gets all transfers that belongs to your entity and matches the query.
 *
 * @param {object} opts - The query params to filter the transfers. If null, the request will return all transfers under your main entity.
 * @param {string} opts.transferId - The ID of the transfer you are looking for.
 * @param {string} opts.wallet - Will return all transfers with a from address or to address that matches with the wallet.
 * @param {number} opts.networkId - The network Id of the transfers.
 * @param {string} opts.entityId - The entity Id that the transfers are associated with. This can be your env var entity ID or a child entity ID.
 */
async function getTransfers(opts) {
    const response = await loopFetch("/api/v1/transfers", "GET", null, opts);
    return response;
}

module.exports = getTransfers;
