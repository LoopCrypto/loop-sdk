const { ethers, BigNumber } = require("ethers");

/**
 * This function takes an options object as input and returns a signed message with your loop contract signer key.
 *
 * @param {object} opts - The options object.
 * @param {string} opts.invoiceId - Invoice ID related to the transfer. Can be the stripe ID or an internal ID you have in your system.
 * @param {string} opts.fromAddress - Wallet address where funds are pulled from.
 * @param {string} opts.toAddress - Wallet address where funds are going to.
 * @param {string} opts.tokenAddress - Address of the token used to pay.
 * @param {number} opts.amount - Amount to bill. If opts.usd is true, specify the amount in cents (e.g. 2999 for $29.99). If opts.usd is false, specify the native token amount (e.g. 1000000 for 1 USDC).
 * @param {boolean} opts.usd - Whether the amount is denominated in USD.
 *
 * @returns {string} - The signed message of the transfer
 */
async function signTransfer(opts) {
    const { invoiceId, fromAddress, toAddress, tokenAddress, amount, usd } =
        opts;
    const domain = {
        name: "LoopVariableRatesContract",
        version: "1",
        chainId: process.env.LOOP_CONTRACT_NETWORK_ID,
        verifyingContract: process.env.LOOP_CONTRACT_ADDRESS,
    };
    const types = {
        Transfer: [
            { name: "invoiceId", type: "string" },
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "token", type: "address" },
            { name: "amount", type: "uint256" },
            { name: "usd", type: "bool" },
        ],
    };
    const transfer = {
        invoiceId: invoiceId,
        from: fromAddress,
        to: toAddress,
        token: tokenAddress,
        amount: BigNumber.from(amount),
        usd: usd,
    };
    const signer = new ethers.Wallet(
        process.env.LOOP_SIGNER_KEY,
        ethers.provider
    );

    const signature = await signer._signTypedData(domain, types, transfer);
    return signature;
}

module.exports = signTransfer;
