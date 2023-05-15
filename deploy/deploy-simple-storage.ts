import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Wallet } from "zksync-web3";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const privateKey = process.env.PRIVATE_KEY || ""
if (!privateKey){
  throw "⛔️ Private key not detected as environmental variable!";
}

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the SimpleStorage contract`);

  const wallet = new Wallet(privateKey);

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("SimpleStorage");
  
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const SimpleStorageContract = await deployer.deploy(artifact);

  const contractAddress = SimpleStorageContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
