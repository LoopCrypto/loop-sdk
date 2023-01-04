const loopFetch = require("./utils/loop-fetch.js");

/**
 * This function gets all transfers that belongs to the entity ID.
 *
 * @param {string} entityId - [Optional] The entity ID that you are querying for. Uses the entity ID in the header if not specified here.
 *
 */
async function getTransfers(entityId = null) {
    const response = await loopFetch(
        "/api/v1/transfers",
        "GET",
        null,
        entityId
    );
    return response;
}

module.exports = getTransfers;
