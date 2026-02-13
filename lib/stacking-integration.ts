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
