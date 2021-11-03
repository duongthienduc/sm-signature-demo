import { ethers, utils } from 'ethers';

import createSignature from '../../src/sm/createSignature';
import { connectSigner, smProvider } from '../../src/utils/connectSm';

describe('BSC Bridge Contract', () => {
  it('get signed message', async () => {
    const amount = 100;
    const signature = await createSignature(
      '0xEe33A178F09C5326141313f9bB7b275298A03705',
      amount,
      '0x23719809662f2879c685a4b3654a94a1ae2906bf',
      'txId',
    );

    expect(signature).toBe('0x9ea836aa7818630c3c1c43fad280a43e9c85e1750220d6b05c2b7c3eca23a95c');

    let walletPath = {
      "standard": "m/44'/60'/0'/0/0",
    };

    let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
    let hdnode = utils.HDNode.fromMnemonic(mnemonic);
    let node = hdnode.derivePath(walletPath.standard);

    let wallet = new ethers.Wallet(node.privateKey, smProvider);

    const smContract = connectSigner(wallet);
    // Need a wallet with sufficient amount of gas to run
    // const res = await smContract.transit('0xEe33A178F09C5326141313f9bB7b275298A03705', amount, 'txId', signature);
  });
});
