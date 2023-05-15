const ethers = require("ethers")

const rpcURL = "wss://testnet.era.zksync.dev/ws" // Your RPC URL goes here

const provider = new ethers.providers.WebSocketProvider(rpcURL)
const signer = new ethers.Wallet(Buffer.from(process.env.devTestnetPrivateKey, 'hex'), provider);

const contractAddress = '0x1bb6aF5061f4Bf6ad40B48d85C5E6AaD30de1F24'
const contractABI = [{"anonymous":false,"inputs":[],"name":"setEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storedData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const contractDeployed = new ethers.Contract(contractAddress, contractABI, signer);

createAndSendTx()
getStoredData()

async function getStoredData() {  
  const storedData = await contractDeployed.storedData()
  console.log("storedData: "+ storedData)
}

async function createAndSendTx() {

  const connectedNetworkObject = await provider.getNetwork();
  const chainIdConnected = connectedNetworkObject.chainId;
  console.log("chainIdConnected: "+ chainIdConnected)

  const unixTime = Date.now();

  const txSigned = await contractDeployed.set(unixTime); //Simple contract transaction. Will compute the gas limit opcodes automatically and get the oracle gas price per gas unit.

  console.log(txSigned)

}

contractDeployed.on("setEvent", () => {

  console.log("EVENT DETECTED! NEW STATE VALUE: ")

  getStoredData()

});