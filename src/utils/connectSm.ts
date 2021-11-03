import { ethers } from 'ethers';

import { BSCBridge__factory } from '../types/sm';
import config from '../config';

const {
  smAddress,
  rpc,
} = config;

export const smProvider = new ethers.providers.JsonRpcProvider(rpc);

export default function connectSm() {
  return BSCBridge__factory.connect(smAddress, smProvider);
}

export function connectSigner(signer: ethers.Signer) {
  const smContract = BSCBridge__factory.connect(smAddress, signer);
  return smContract;
}
