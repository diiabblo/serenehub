<div align="center">

# 🌊 SereneHub

*A peaceful gateway to Bitcoin DeFi*

[![Frontend CI](https://github.com/diiabblo/serenehub/actions/workflows/frontend.yml/badge.svg)](https://github.com/diiabblo/serenehub/actions/workflows/frontend.yml)
[![Contracts CI](https://github.com/diiabblo/serenehub/actions/workflows/contracts.yml/badge.svg)](https://github.com/diiabblo/serenehub/actions/workflows/contracts.yml)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

</div>

---

## What is SereneHub?

SereneHub brings tranquility to decentralized finance on Bitcoin. Built on the Stacks blockchain, it offers a unified platform where digital assets flow naturally between creators, traders, and developers.

## Core Modules

### 🎨 NFT Marketplace
Mint and trade digital collectibles with transparent pricing and minimal friction. Each transaction is secured by Bitcoin's finality while maintaining low costs.

### 📋 Service Registry  
A decentralized directory where service providers can list their offerings and receive payments directly on-chain. No intermediaries, just direct connections.

### 🔒 Staking Vault
Lock your STX tokens and earn rewards over time. The longer you commit, the more you gain. Simple, secure, and transparent.

### 🚀 Token Launchpad
Deploy your own SIP-010 fungible tokens in minutes. Whether you're building a community currency or launching a protocol token, SereneHub makes it effortless.

## Technology

**Smart Contracts**: Written in Clarity for security and predictability  
**Frontend**: Built with Next.js 14, TypeScript, and Tailwind CSS  
**Blockchain**: Secured by Bitcoin through Stacks  
**Testing**: Comprehensive test coverage with Vitest

## Quick Start

### Prerequisites
- Node.js 18 or higher
- A Stacks wallet (Leather or Xverse recommended)
- Clarinet (for smart contract development)

### Local Development

```bash
# Clone the repository
git clone https://github.com/diiabblo/serenehub.git
cd serenehub

# Install and run the frontend
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to explore SereneHub locally.

### Smart Contract Development

```bash
# Navigate to contracts directory
cd serenehub-contracts

# Install dependencies
npm install

# Run tests
npm test

# Deploy to devnet
clarinet integrate
```

## Architecture

```
serenehub/
│
├── serenehub-contracts/          Clarity smart contracts
│   ├── contracts/                Core contract logic
│   │   ├── serenehub-nft-marketplace.clar
│   │   ├── serenehub-service-registry.clar
│   │   ├── serenehub-staking-vault.clar
│   │   └── serenehub-token-launchpad.clar
│   ├── tests/                    Contract test suites
│   └── docs/                     Technical documentation
│
└── frontend/                     Next.js application
    ├── src/app/                  Application routes
    ├── src/components/           Reusable UI components
    ├── src/lib/                  Contract integration
    └── src/config/               Configuration files
```

## Contributing

We welcome contributions that maintain the calm, focused nature of SereneHub. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Security

Smart contracts have been carefully designed with security in mind. For bug reports or security concerns, please open an issue or contact the maintainers directly.

## License

MIT License - See [LICENSE](./LICENSE) for details.

---

<div align="center">

**Built with care for the Bitcoin ecosystem**

</div>
