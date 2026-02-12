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

export interface ApiEndpoints {
  transactions: string;
  accounts: string;
  contracts: string;
  blocks: string;
}

export function getApiEndpoints(network: NetworkType): ApiEndpoints {
  const baseUrl = getNetworkConfig(network).url;
  return {
    transactions: \`\${baseUrl}/extended/v1/tx\`,
    accounts: \`\${baseUrl}/v2/accounts\`,
    contracts: \`\${baseUrl}/v2/contracts\`,
    blocks: \`\${baseUrl}/extended/v1/block\`,
  };
}

export interface NetworkStatus {
  online: boolean;
  blockHeight?: number;
  lastChecked: Date;
}

export class NetworkMonitor {
  private status: Map<NetworkType, NetworkStatus> = new Map();
  
  async checkNetwork(network: NetworkType): Promise<NetworkStatus> {
    const status: NetworkStatus = {
      online: true,
      blockHeight: 0,
      lastChecked: new Date(),
    };
    this.status.set(network, status);
    return status;
  }
}

export interface NetworkFees {
  low: number;
  medium: number;
  high: number;
}

export async function getNetworkFees(network: NetworkType): Promise<NetworkFees> {
  return {
    low: 1000,
    medium: 2000,
    high: 5000,
  };
}

export interface CustomNetworkConfig extends NetworkConfig {
  customHeaders?: Record<string, string>;
  timeout?: number;
}

export class CustomNetwork implements CustomNetworkConfig {
  name: string;
  url: string;
  chainId: number;
  customHeaders?: Record<string, string>;
  timeout?: number;
  
  constructor(config: CustomNetworkConfig) {
    this.name = config.name;
    this.url = config.url;
    this.chainId = config.chainId;
    this.customHeaders = config.customHeaders;
    this.timeout = config.timeout;
  }
}

export interface NetworkCapabilities {
  supportsNFTs: boolean;
  supportsSIP009: boolean;
  supportsSIP010: boolean;
  supportsStackingV2: boolean;
}

export function getNetworkCapabilities(network: NetworkType): NetworkCapabilities {
  return {
    supportsNFTs: true,
    supportsSIP009: true,
    supportsSIP010: true,
    supportsStackingV2: network === 'mainnet',
  };
}

export const NETWORK_CONSTANTS = {
  BLOCK_TIME: 600000, // 10 minutes in ms
  CONFIRMATIONS_REQUIRED: 6,
  MAX_STRING_LENGTH: 128,
  MAX_CONTRACT_SIZE: 100000,
} as const;

export interface NetworkValidator {
  isValidUrl(url: string): boolean;
  canConnect(url: string): Promise<boolean>;
}

export class BasicNetworkValidator implements NetworkValidator {
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  
  async canConnect(url: string): Promise<boolean> {
    return this.isValidUrl(url);
  }
}

export class NetworkManager {
  private currentNetwork: NetworkType = 'mainnet';
  
  setNetwork(network: NetworkType): void {
    this.currentNetwork = network;
  }
  
  getCurrentNetwork(): NetworkType {
    return this.currentNetwork;
  }
  
  getConfig(): NetworkConfig {
    return getNetworkConfig(this.currentNetwork);
  }
}
