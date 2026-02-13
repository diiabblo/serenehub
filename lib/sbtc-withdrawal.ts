// sBTC Withdrawal Functionality
// Provides utilities for withdrawing sBTC from Stacks to Bitcoin

export interface WithdrawalRequest {
  amount: bigint;
  btcAddress: string;
  stxAddress: string;
}

export interface WithdrawalStatus {
  requestId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  btcTxid?: string;
}
