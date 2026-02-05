# SereneHub

![Frontend CI](https://github.com/serenehub/serenehub/actions/workflows/frontend.yml/badge.svg)
![Contracts CI](https://github.com/serenehub/serenehub/actions/workflows/contracts.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)

## Overview

SereneHub is a comprehensive Stacks-based decentralized application (dApp) designed to empower the Bitcoin economy. It integrates a suite of DeFi and utility services into a single platform.

## Key Features

- **NFT Marketplace**: Mint, list, and trade NFTs with low platform fees.
- **Service Registry**: Decentralized registry for service providers to list offerings and receive payments on-chain.
- **Staking Vault**: Secure STX staking mechanism with time-locked rewards.
- **Token Launchpad**: One-click deployment of SIP-010 fungible tokens.

## Getting Started

### Prerequisites

- Node.js v18+
- Clarinet (for contract development)
- Stacks Wallet (Leather, Xverse)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/serenehub/serenehub.git
   cd serenehub
   ```

2. Install Frontend Dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Run the Development Server:
   ```bash
   npm run dev
   ```

## Project Structure

```
serenehub/
├── serenehub-contracts/    # Smart contracts (Clarinet project)
│   ├── contracts/         # Clarity source code
│   └── tests/             # TypeScript unit tests
├── frontend/              # Next.js web application
│   ├── src/app/           # App Router pages
│   └── src/lib/           # Contract integration logic
└── README.md              # Project documentation
```

## License

This project is licensed under the MIT License.
