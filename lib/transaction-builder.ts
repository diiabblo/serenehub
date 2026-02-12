// Transaction Builder for Stacks Blockchain
// Provides utilities to construct and sign Stacks transactions

export interface TransactionOptions {
  network: 'mainnet' | 'testnet';
  fee?: number;
  nonce?: number;
}

export interface ContractCallOptions extends TransactionOptions {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs: unknown[];
}

export interface TransferOptions extends TransactionOptions {
  recipient: string;
  amount: number;
  memo?: string;
}

export interface DeployContractOptions extends TransactionOptions {
  contractName: string;
  codeBody: string;
}

export class TransactionBuilder {
  private options: TransactionOptions;
  
  constructor(options: TransactionOptions) {
    this.options = options;
  }
  
  getNetwork(): string {
    return this.options.network;
  }
}
