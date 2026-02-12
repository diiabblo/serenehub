// Network Configuration for Stacks Blockchain
// Provides network-specific settings and utilities

export interface NetworkConfig {
  name: string;
  url: string;
  chainId: number;
}

export const MAINNET_CONFIG: NetworkConfig = {
  name: 'mainnet',
  url: 'https://api.mainnet.hiro.so',
  chainId: 1,
};
