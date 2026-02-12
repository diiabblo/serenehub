// SIP-013 Semi-Fungible Tokens Implementation
// Provides support for semi-fungible token standard

export interface SIP013Token {
  tokenId: bigint;
  balance: bigint;
}

export const SIP013_FEATURE_2 = 'feature_2';
