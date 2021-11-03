import { BigNumber } from 'ethers';

import config from '../config';
import connectSm from '../utils/connectSm';

const { signSecret } = config;

async function createSignature(token: string, amount: number, address: string, txId: string) {
  const smContract = connectSm();
  return smContract._verifyMessage(
    token,
    BigNumber.from(amount),
    address,
    txId,
    signSecret
  );
}

export default createSignature;
