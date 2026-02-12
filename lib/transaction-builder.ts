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

export class ContractCallBuilder extends TransactionBuilder {
  private callOptions: ContractCallOptions;
  
  constructor(options: ContractCallOptions) {
    super(options);
    this.callOptions = options;
  }
  
  getContractId(): string {
    return \`\${this.callOptions.contractAddress}.\${this.callOptions.contractName}\`;
  }
}

export interface PostCondition {
  type: 'stx' | 'ft' | 'nft';
  condition: 'eq' | 'gt' | 'gte' | 'lt' | 'lte';
  amount?: number;
}

export class PostConditionBuilder {
  private conditions: PostCondition[] = [];
  
  addSTXCondition(condition: PostCondition['condition'], amount: number): this {
    this.conditions.push({ type: 'stx', condition, amount });
    return this;
  }
  
  build(): PostCondition[] {
    return this.conditions;
  }
}

export interface TransactionSigner {
  sign(transaction: unknown): Promise<string>;
  getPublicKey(): string;
}

export interface BroadcastResult {
  txid: string;
  success: boolean;
  error?: string;
}

export class TransactionBroadcaster {
  private network: string;
  
  constructor(network: 'mainnet' | 'testnet') {
    this.network = network;
  }
  
  async broadcast(signedTx: string): Promise<BroadcastResult> {
    return { txid: 'mock-txid', success: true };
  }
}

export interface ClarityValue {
  type: string;
  value: unknown;
}

export function uint(value: number): ClarityValue {
  return { type: 'uint', value };
}

export function principal(value: string): ClarityValue {
  return { type: 'principal', value };
}
