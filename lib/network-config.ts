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

export const TESTNET_CONFIG: NetworkConfig = {
  name: 'testnet',
  url: 'https://api.testnet.hiro.so',
  chainId: 2147483648,
};

export const DEVNET_CONFIG: NetworkConfig = {
  name: 'devnet',
  url: 'http://localhost:3999',
  chainId: 2147483648,
};

export type NetworkType = 'mainnet' | 'testnet' | 'devnet';

export function getNetworkConfig(network: NetworkType): NetworkConfig {
  switch (network) {
    case 'mainnet':
      return MAINNET_CONFIG;
    case 'testnet':
      return TESTNET_CONFIG;
    case 'devnet':
      return DEVNET_CONFIG;
  }
}
