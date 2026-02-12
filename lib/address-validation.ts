// Address Validation for Stacks Blockchain
// Validates and formats Stacks addresses and contract identifiers

export interface AddressValidationResult {
  valid: boolean;
  error?: string;
}

export const STACKS_MAINNET_VERSION = 22;
export const STACKS_TESTNET_VERSION = 26;

export function getAddressVersion(network: 'mainnet' | 'testnet'): number {
  return network === 'mainnet' ? STACKS_MAINNET_VERSION : STACKS_TESTNET_VERSION;
}
