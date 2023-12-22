const verifyWebhook = require("src/actions/verify-webhook");

describe("Verify webhook", () => {
    const webhook = JSON.stringify({
        event: "TransferProcessed",
        transaction: "0x12345678",
        networkId: 31337,
        networkName: "local",
        contractAddress: "0xSubscriptionContract",
        email: "-",
        company: "Test Company (test-id-123)",
        parent: "-",
        transferId: "1bfeb632-143b-48b6-84aa-54f483849100",
        success: true,
        paymentTokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        paymentTokenSymbol: "USDC",
        endUser: "0xaD7F5CDCCA9494278fA04A7E887a1E9c2187BB15",
        reason: "-",
        invoiceId: "INVCO-1",
        amountPaid: 100,
        agreementId: "9dfb1e0d-d54f-4f80-9685-8b97e732824a",
        refId: "",
        batchId: "92236b79-d7c2-4beb-a582-6d5655ca26b7",
        usdAmount: "1.00",
        metadata: { couponCode: "goodCoupon", trialDays: 7, discount: 10 },
    });

    const signature = "++xzEOE+YyoHqu6Pw+tbC8mpsR68LAYbt4JibWsZ1dA=";

    test("should verify proper webhook", () => {
        expect(verifyWebhook(webhook, signature)).toBe(true);
    });
});
