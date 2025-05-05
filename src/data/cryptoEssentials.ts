
import { Category } from "@/types";

// Sample markdown content
const whatIsCryptoContent = `
# What is Crypto Trading?

Cryptocurrency trading is the act of speculating on cryptocurrency price movements via a CFD trading account, or buying and selling the underlying coins via an exchange.

## How do cryptocurrencies work?

Cryptocurrencies are digital currencies that use blockchain technology to record and secure every transaction. A blockchain is a distributed ledger that's maintained by a network of computers called "nodes".

This technology creates a record of transactions that is very hard to change or hack once confirmed on the blockchain. The distributed nature of blockchain makes cryptocurrencies fundamentally different from traditional, centralized fiat currencies.

### Key Features of Cryptocurrencies

- **Decentralization**: Not controlled by any central authority like a government or bank
- **Transparency**: All transactions are visible on the public blockchain
- **Security**: Uses advanced cryptography to secure transactions
- **Limited Supply**: Many cryptocurrencies have a fixed maximum supply (like Bitcoin's 21 million)
- **Pseudonymity**: Users can maintain some level of privacy

## Popular Cryptocurrencies

1. **Bitcoin (BTC)** - The first and most well-known cryptocurrency
2. **Ethereum (ETH)** - Features smart contracts and dApps
3. **Binance Coin (BNB)** - Native token of the Binance exchange
4. **Solana (SOL)** - Known for high throughput and fast transactions
5. **Cardano (ADA)** - Focuses on sustainability and scalability

> **Important**: Cryptocurrency trading involves substantial risk and is not suitable for all investors. The value of cryptocurrencies can fluctuate dramatically.

## Getting Started with Trading

Before you begin trading cryptocurrencies, you should:

- Do thorough research
- Start with a small investment
- Use reputable exchanges
- Consider security measures for your digital assets
- Understand tax implications in your jurisdiction
`;

const blockchainBasicsContent = `
# Blockchain Basics

Blockchain is the underlying technology that powers cryptocurrencies and many other decentralized applications.

## What is Blockchain?

A blockchain is a distributed digital ledger that records transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks.

### How Blockchain Works

1. **Transactions are requested** - Someone requests a transaction
2. **Transaction is broadcast** - The requested transaction is broadcast to a P2P network of computers (nodes)
3. **Network validates transaction** - Using known algorithms, the network verifies the transaction
4. **Transaction is added to a block** - Once verified, the transaction is combined with other transactions to create a new block of data
5. **Block is added to the chain** - The new block is added to the existing blockchain permanently
6. **Transaction is complete** - The transaction is now complete and recorded on the blockchain

## Key Elements of Blockchain

### 1. Distributed Ledger
All network participants have access to the distributed ledger and its immutable record of transactions.

### 2. Immutable Records
No participant can change or tamper with a transaction after it's recorded to the shared ledger.

### 3. Smart Contracts
Code stored on a blockchain that automatically execute when predetermined terms and conditions are met.

## Types of Blockchains

### Public Blockchains
- Open to anyone
- Completely decentralized
- Examples: Bitcoin, Ethereum

### Private Blockchains
- Invitation-only networks
- Operated by a single organization
- Examples: Hyperledger Fabric implementations

### Consortium Blockchains
- Semi-private blockchains
- Operated by a group of organizations
- Examples: R3, B3i

## Use Cases Beyond Cryptocurrency

- Supply chain management
- Digital identity verification
- Voting systems
- Healthcare record management
- Intellectual property protection
`;

// Export category data
export const cryptoEssentialsCategory: Category = {
  id: "crypto-essentials",
  label: "Crypto Essentials",
  slug: "crypto-essentials",
  position: 1,
  pages: [
    {
      id: "what-is-crypto",
      title: "What is Crypto Trading",
      slug: "/crypto-essentials/what-is-crypto-trading",
      sidebar_label: "What is Crypto Trading",
      sidebar_position: 1,
      content: whatIsCryptoContent,
    },
    {
      id: "blockchain-basics",
      title: "Blockchain Basics",
      slug: "/crypto-essentials/blockchain-basics",
      sidebar_label: "Blockchain Basics",
      sidebar_position: 2,
      content: blockchainBasicsContent,
    },
  ],
};
