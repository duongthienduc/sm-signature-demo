export type ConfigInterface = {
  signSecret: string;
  smAddress: string;
  rpc: string;
};

const config: ConfigInterface = {
  signSecret: '0x94ad068efd25865f9a7323dba64444a08171d0d51a7d2cd41ef17cea877cb19a',
  smAddress: '0x4aeADe5169473615f6f87cD5F9cd6d38CD8e4602',
  rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export default config;
