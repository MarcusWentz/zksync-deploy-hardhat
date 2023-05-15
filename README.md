# zkSync Hardhat project

## Install dependencies 

```shell
yarn
```

## Prepare contract for deployment with zksolc compiler to generate artifacts-zk 

```shell
npx hardhat compile
```

## Deploy contract to zkSync Era Goerli Network with artifacts-zk from compilation

```shell
npx hardhat deploy-zksync --script deploy-simple-storage.ts
```

## Verify contract at address on zkSync Era Goerli Network

:warning: It is recommended to lock in Solidity compiler versions to make it simpler to verify contract bytecode. :warning:

```shell
npx hardhat verify <CONTRACT_ADDRESS>
```

## Deployed and verified contract 

Greeter.sol:

https://goerli.explorer.zksync.io/address/0x7755EF17bea2793429cfa1b8AAF535a839612112#contract

bulkerSender.sol:

https://goerli.explorer.zksync.io/address/0x974489D9ae3a5EEC1c3bbaa1D9626A0bb8C40756#contract

SimpleStorage.sol

https://goerli.explorer.zksync.io/address/0x1bb6aF5061f4Bf6ad40B48d85C5E6AaD30de1F24#contract

## Read Write Subscribe To Smart Contract 

:warning: Websocket RPC endpoints are needed to subscribe to smart contract events. :warning:

```shell
node scripts/SimpleStorage/readWriteSubscribe.js
```