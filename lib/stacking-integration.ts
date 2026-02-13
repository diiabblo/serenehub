// Stacking Integration
// Provides utilities for Stacks PoX stacking

export interface StackingInfo {
  stacker: string;
  amount: bigint;
  lockPeriod: number;
  unlockHeight: number;
}

export interface StackingCycle {
  cycleNumber: number;
  startHeight: number;
  endHeight: number;
}

export interface PoolInfo {
  poolAddress: string;
  poolName: string;
  rewardsAddress: string;
}

export class StackingClient {
  private network: string;
  
  constructor(network: string) {
    this.network = network;
  }
  
  async getStackingInfo(address: string): Promise<StackingInfo | null> {
    return null;
  }
}

export interface StackRequest {
  amount: bigint;
  lockPeriod: number;
  poxAddress: string;
}

export interface DelegateStackRequest {
  stacker: string;
  amount: bigint;
  lockPeriod: number;
}

export function calculateRewards(amount: bigint, cycles: number, rewardRate: number): bigint {
  return (amount * BigInt(cycles) * BigInt(rewardRate)) / 100n;
}

export function getMinimumStackAmount(network: string): bigint {
  return network === 'mainnet' ? 100000000n : 1000000n;
}

export function getMaximumLockPeriod(): number {
  return 12;
}
