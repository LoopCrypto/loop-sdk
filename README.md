# loop-sdk

npm module to help your nodejs application perform basic interactions with Loop Crypto.

## Install

In your project folder, do the following:

```
npm i @loop-crypto/loop-sdk -save
```

## Setup

- copy .env.example and rename it to .env in your project folder; or if you already have an .env file, copy the environment variables into your existing .env file, and fill out the values:

```
LOOP_SIGNER_KEY=<YOUR SIGNER WALLET PRIVATE KEY>
LOOP_CONTRACT_ADDRESS=<YOUR LOOP PAYMENT CONTRACT ADDRESS>
LOOP_CONTRACT_NETWORK_ID=<YOUR LOOP CONTRACT NETWORK ID>
LOOP_API_URL=<LOOP INSTANCE URL>
LOOP_API_ID=<LOOP ENTITY ID FOR THE API KEY>
LOOP_API_KEY=<YOUR LOOP API KEY>
LOOP_WEBHOOK_SECRET=<YOUR LOOP WEBHOOK SECRET>
```
For security purposes, *DO NOT* commit your.env file into your github repo so that your keys are not exposed.

## Usage

- CJS:
```
const { loop } = require("@loop-crypto/loop-sdk");
const result = await loop.getTransfers({
    networkId: 5,
});
```

- ESM:
```
import { loop } from "@loop-crypto/loop-sdk";

const result = loop.signSendTransfer({
    invoiceId: `${email}-${plan}-${addOnPlans}-0`,
    itemId: planId,
    fromAddress: subscriber,
    toAddress: toAddress,
    tokenAddress: paymentTokenAddress,
    amount: totalFirstBillingAmountCents,
    usd: true,
});
```

## Integration

See https://github.com/LoopCrypto/loop-demo-app for an example of how to integrate with our webhook and perform actions using the SDK.
