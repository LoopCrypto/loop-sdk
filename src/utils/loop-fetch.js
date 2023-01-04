const fetch = require("node-fetch");

async function loopFetch(path, method, body = null, entityId = null) {
    let headers = new Headers();
    headers.append("entity-id", entityId || process.env.LOOP_API_ID);
    headers.append("api-key", process.env.LOOP_API_KEY);
    if (body) {
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
    }

    const response = await fetch(`${process.env.LOOP_API_URL}${path}`, {
        method: method,
        headers: headers,
        body: body,
    });
    if (response.ok) {
        return await response.json();
    } else {
        // TODO: should probably define better error codes for the SDK.
        throw new Error((await response.json()).message);
    }
}

module.exports = loopFetch;
