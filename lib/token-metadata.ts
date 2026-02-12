// Token Metadata Support for Stacks Tokens
// Handles metadata for NFTs, FTs, and SFTs

export interface TokenMetadata {
  name: string;
  description?: string;
  image?: string;
}

export interface NFTMetadata extends TokenMetadata {
  tokenId: number;
  attributes?: Array<{ trait_type: string; value: string | number }>;
  external_url?: string;
}
