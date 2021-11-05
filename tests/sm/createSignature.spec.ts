import Web3 from 'web3';

import config from '../../src/config';
import createSignature from '../../src/sm/createSignature';

const {signSecret} = config;

describe('BSC Bridge Contract', () => {
  it('get signed message', async () => {
    const amount = 100;
    const signature = await createSignature(
      '0xEe33A178F09C5326141313f9bB7b275298A03705',
      amount,
      '0x23719809662f2879c685a4b3654a94a1ae2906bf',
      'name',
    );

    expect(signature).toBe('0xc4ddd5beb09ed090b718ddb91ba8bbd749ddad5f90cf26bc48a1faa611f7ad1e');
    var web3 = new Web3();
    const message = web3.utils.soliditySha3(
      97,
      '0x4aeADe5169473615f6f87cD5F9cd6d38CD8e4602',
      '0xEe33A178F09C5326141313f9bB7b275298A03705',
      amount,
      '0x23719809662f2879c685a4b3654a94a1ae2906bf',
      'name',
      signSecret,
    );

    // NOTE: for SM in Kingdom Raid please use web3.eth.abi.encodeParameters method instead
    // const message = web3.utils.keccak256(
    //   web3.eth.abi.encodeParameters(
    //     ['uint', 'address', 'address', 'uint256', 'address', 'string', 'string'],
    //     [
    //       97,
    //       '0x4aeADe5169473615f6f87cD5F9cd6d38CD8e4602',
    //       '0xEe33A178F09C5326141313f9bB7b275298A03705',
    //       BigNumber.from(amount),
    //       '0x23719809662f2879c685a4b3654a94a1ae2906bf',
    //       'name',
    //       signSecret,
    //     ],
    //   ),
    // );

    expect(message).toBe('0xc4ddd5beb09ed090b718ddb91ba8bbd749ddad5f90cf26bc48a1faa611f7ad1e');
  });
});
