// Contract Call Utilities
// Provides utilities for calling Clarity smart contracts

export interface ContractCall {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs: unknown[];
}

export interface CallResult {
  success: boolean;
  value?: unknown;
  error?: string;
}
