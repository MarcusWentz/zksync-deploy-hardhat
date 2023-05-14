# zkSync Hardhat project

## Prepare contract for deployment with zksolc compiler to generate artifacts-zk 

```shell
npx hardhat compile
```

## Deploy contract to zkSync Era Goerli Network with artifacts-zk from compilation

```shell
npx hardhat deploy-zksync --script deploy-greeter.ts
```

## Verify contract at address on zkSync Era Goerli Network

:warning: It is recommended to lock in Solidity compiler versions to make it simpler to verify contract bytecode. :warning:

```shell
yarn hardhat verify <CONTRACT_ADDRESS>
```

## Deployed and verified contract 

https://goerli.explorer.zksync.io/address/0x738A9C553912e1f2204cEf5b749327Ec55CE8f36#contract