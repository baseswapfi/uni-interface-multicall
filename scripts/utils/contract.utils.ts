import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';

export async function deployTestToken(name: string, symbol: string, decimals: number, signer: SignerWithAddress) {
  const fact = await ethers.getContractFactory('V3PrepToken', signer);
  const instance = await fact.deploy(name, symbol, decimals);
  await instance.deployed();
  console.log(`${name} deployed to : ${instance.address}`);

  return instance;
}
