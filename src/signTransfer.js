const { ethers, BigNumber } = require("ethers");

async function signTransfer(opts) {
    const {
        invoiceId,
        networkId,
        contractAddress,
        fromAddress,
        toAddress,
        tokenAddress,
        amount,
        usd,
    } = opts;
    const domain = {
        name: "LoopVariableRatesContract",
        version: "1",
        chainId: networkId,
        verifyingContract: contractAddress,
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
    return { signature };
}

module.exports = signTransfer;
