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

export interface ContractIdentifier {
  address: string;
  contractName: string;
}

export function parseContractIdentifier(contractId: string): ContractIdentifier | null {
  const parts = contractId.split('.');
  if (parts.length !== 2) return null;
  return { address: parts[0], contractName: parts[1] };
}

export function isValidContractName(name: string): boolean {
  const contractNameRegex = /^[a-zA-Z]([a-zA-Z0-9]|[-_])*$/;
  return contractNameRegex.test(name) && name.length <= 128;
}

export function validateContractIdentifier(contractId: string, network: 'mainnet' | 'testnet'): AddressValidationResult {
  const parsed = parseContractIdentifier(contractId);
  
  if (!parsed) {
    return { valid: false, error: 'Invalid contract identifier format' };
  }
  
  const addressValidation = validateStacksAddress(parsed.address, network);
  if (!addressValidation.valid) {
    return addressValidation;
  }
  
  if (!isValidContractName(parsed.contractName)) {
    return { valid: false, error: 'Invalid contract name' };
  }
  
  return { valid: true };
}

export interface PrincipalType {
  type: 'standard' | 'contract';
  network?: 'mainnet' | 'testnet';
}

export function getPrincipalType(principal: string): PrincipalType | null {
  if (principal.includes('.')) {
    return { type: 'contract' };
  }
  return { type: 'standard' };
}

export function formatContractIdentifier(address: string, contractName: string): string {
  return \`\${address}.\${contractName}\`;
}

export class AddressValidator {
  private network: 'mainnet' | 'testnet';
  
  constructor(network: 'mainnet' | 'testnet') {
    this.network = network;
  }
  
  validate(address: string): AddressValidationResult {
    return validateStacksAddress(address, this.network);
  }
  
  validateContract(contractId: string): AddressValidationResult {
    return validateContractIdentifier(contractId, this.network);
  }
}
