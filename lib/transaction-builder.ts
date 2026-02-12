// Transaction Builder for Stacks Blockchain
// Provides utilities to construct and sign Stacks transactions

export interface TransactionOptions {
  network: 'mainnet' | 'testnet';
  fee?: number;
  nonce?: number;
}
