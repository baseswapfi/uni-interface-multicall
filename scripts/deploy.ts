import { ethers } from 'hardhat';

async function main() {
  try {
    const signer = (await ethers.getSigners())[0];
    const UniswapInterfaceMulticall = await ethers.getContractFactory('UniswapInterfaceMulticall', signer);
    const instance = await UniswapInterfaceMulticall.deploy();
    await instance.deployed();
    console.log(`UniswapInterfaceMulticall deployed to : ${instance.address}`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
