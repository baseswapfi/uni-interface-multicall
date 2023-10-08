import { ethers } from 'hardhat';
import { deployTestToken } from './utils/contract.utils';

async function main() {
  try {
    const signer = (await ethers.getSigners())[0];
    await deployTestToken('V3 Prep', 'V3P', 18, signer);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
