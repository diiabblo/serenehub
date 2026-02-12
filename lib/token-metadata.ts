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

export interface FTMetadata extends TokenMetadata {
  symbol: string;
  decimals: number;
  totalSupply?: string;
}

export interface SFTMetadata extends TokenMetadata {
  tokenId: number;
  decimals?: number;
  supply?: string;
}

export type AnyTokenMetadata = NFTMetadata | FTMetadata | SFTMetadata;

export function isNFTMetadata(metadata: AnyTokenMetadata): metadata is NFTMetadata {
  return 'tokenId' in metadata && 'attributes' in metadata;
}

export interface MetadataURI {
  uri: string;
  mutable: boolean;
  cached?: boolean;
}

export class MetadataFetcher {
  private cache: Map<string, AnyTokenMetadata> = new Map();
  
  async fetch(uri: string): Promise<AnyTokenMetadata> {
    if (this.cache.has(uri)) {
      return this.cache.get(uri)!;
    }
    const response = await fetch(uri);
    const data = await response.json();
    this.cache.set(uri, data);
    return data;
  }
}

export interface MetadataValidator {
  validate(metadata: unknown): metadata is AnyTokenMetadata;
  validateNFT(metadata: unknown): metadata is NFTMetadata;
  validateFT(metadata: unknown): metadata is FTMetadata;
}

export class BasicMetadataValidator implements MetadataValidator {
  validate(metadata: unknown): metadata is AnyTokenMetadata {
    return typeof metadata === 'object' && metadata !== null && 'name' in metadata;
  }
  
  validateNFT(metadata: unknown): metadata is NFTMetadata {
    return this.validate(metadata) && 'tokenId' in (metadata as object);
  }
  
  validateFT(metadata: unknown): metadata is FTMetadata {
    return this.validate(metadata) && 'symbol' in (metadata as object);
  }
}

export interface MetadataStorage {
  store(key: string, metadata: AnyTokenMetadata): Promise<void>;
  retrieve(key: string): Promise<AnyTokenMetadata | null>;
  delete(key: string): Promise<void>;
}

export class InMemoryMetadataStorage implements MetadataStorage {
  private storage = new Map<string, AnyTokenMetadata>();
  
  async store(key: string, metadata: AnyTokenMetadata): Promise<void> {
    this.storage.set(key, metadata);
  }
  
  async retrieve(key: string): Promise<AnyTokenMetadata | null> {
    return this.storage.get(key) || null;
  }
  
  async delete(key: string): Promise<void> {
    this.storage.delete(key);
  }
}
