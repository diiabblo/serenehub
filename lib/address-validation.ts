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

export function isValidC32Address(address: string): boolean {
  const c32Regex = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]+$/;
  return c32Regex.test(address);
}

export function validateStacksAddress(address: string, network: 'mainnet' | 'testnet'): AddressValidationResult {
  if (!address || address.length === 0) {
    return { valid: false, error: 'Address cannot be empty' };
  }
  
  if (!isValidC32Address(address)) {
    return { valid: false, error: 'Invalid C32 address format' };
  }
  
  return { valid: true };
}
