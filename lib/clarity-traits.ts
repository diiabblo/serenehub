// Clarity Traits for Stacks blockchain
// Provides interfaces for common Clarity trait patterns

export interface ClarityTrait {
  name: string;
  methods: string[];
}

export interface SIP009Trait extends ClarityTrait {
  name: 'sip009-nft-trait';
  methods: ['get-last-token-id', 'get-token-uri', 'get-owner', 'transfer'];
}

export interface SIP010Trait extends ClarityTrait {
  name: 'sip010-ft-trait';
  methods: ['get-name', 'get-symbol', 'get-decimals', 'get-balance', 'get-total-supply', 'transfer'];
}

export interface SIP013Trait extends ClarityTrait {
  name: 'sip013-semi-fungible-token-trait';
  methods: ['get-balance', 'get-overall-balance', 'get-total-supply', 'transfer'];
}

export const SUPPORTED_TRAITS = ['sip009-nft-trait', 'sip010-ft-trait', 'sip013-semi-fungible-token-trait'] as const;
export type SupportedTrait = typeof SUPPORTED_TRAITS[number];
