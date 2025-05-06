
import { Category } from "@/types";

const introContent = `
## **Module 1: What Is Crypto Trading?**

*Crypto trading explained simply — without jargon or hype*

### **Introduction**

Why is everyone suddenly playing digital roulette?

Let’s say you’re a regular person. Not a billionaire. Not a Wall Street trader with eight screens, a tailored suit, and coffee flowing straight into your veins. Just you — maybe you’ve heard that someone bought some coin and made a fortune in two days. Intriguing, right?

And then — boom — they lost it all. Also intriguing. Maybe even educational.

That’s trading.

Making bets on whether something goes up or down in price — something you can’t touch but people swear has value. This isn’t horse racing — it’s Bitcoin, altcoins, and all sorts of digital stuff… Who even came up with this?

But is it... real?

Yes. It’s very real — just not in the way your crypto-sceptic neighbour thinks. Trading is part of how markets function. And in crypto, this function is stripped of formalities, running 24/7 on open networks, faster and riskier than traditional finance.

If it’s so chaotic, why do people do it?

Because they’re not just guessing. They’re learning patterns, reading charts, using tools — and, often, failing a few times before finding something that works.

This course ensures you skip the worst parts of that learning curve.

Why start with trading at all?

Because trading teaches you more than just price movements. It teaches discipline. It teaches how to handle risk. And it gives you a real sense of how markets — and people — behave under pressure.

You don’t need a finance background. You don’t need to “love charts.” But if you want to stop guessing and start thinking like a trader — this is a solid place to begin.

### **What Is Trading?**

What does it actually mean to trade crypto — and how is it different from just “buying and holding”?

Let’s start with the core idea.

In the simplest terms, Trading is the act of buying or selling something to profit from price changes.

In crypto, that “something” is usually a token — like APT, BTC, ETH, or USDC. If the price goes up after you buy — you win. If the price drops — you lose.

But not all trading looks the same. In fact, most people who say, “I’m trading crypto” are doing wildly different things.

Let’s break them down.

![][image1]

**Spot Trading**

This is the classic approach — you buy and hold the real token. You own the asset directly. You can move it, store it, or sell it anytime. You only profit when the price goes up.

📍 Example: You buy 10 APT at $8 → total $80. Later, APT hits $12 → now worth $120. You sell → $40 profit.

Simple? Yes. Flexible? Not much — you can’t profit on the way down.

**Perpetual Futures**

You don’t own the asset — you’re trading on price movement. With perpetual futures (or “perps”):

* You can bet up (long) or down (short)  
* You can use leverage to control a bigger position  
* You don’t need to hold the token  
* There’s no expiration — you hold as long as your margin allows

"Perps are like betting on a horse — not owning the horse, just predicting its performance."

📍 Example: APT is at $10. You open a long perp with 5× leverage. If APT moves to $11 (+10%), your gain is \+50%. If APT drops to $9, your loss is also \-50%.

**Options**

Options are contracts that let you make a deal — but only if you want to. You get the *right* (not the obligation) to buy or sell something at a specific price, within a certain time.

There are two basic types:

* Call Option — you bet the price will go up  
* Put Option — you bet it will go down

They’re flexible, powerful, and mostly used by advanced traders. We won’t go deep here — just know they exist and offer strategies beyond simple long or short.

**What about swaps?**

You’ll often see people “swapping” tokens on decentralised exchanges. Let’s be clear: a swap isn’t trading in the strategic sense. It’s more like a currency exchange.

📍 Example: You swap APT to USDC to reduce risk or swap tokens across dex to profit from the price difference.

Swaps are essential for moving between tokens. We’ll cover them in Module 3 when we discuss stablecoins.

**Why trading isn’t just “buy and hope”**

If you simply buy APT and wait — you’re an investor or a holder. A trader, on the other hand, is actively managing positions — watching price, timing entries, reacting to signals.

**The difference?**

* Holding \= long-term belief, little action  
* Trading \= short-term movement, active decisions

Both are valid. But if you want to trade — you’ll need tools, discipline, and a plan.

### **Next:**

Before you trade, you need to know how people actually enter the crypto world — from fiat on-ramps to P2P deals, to swapping and bridging tokens across chains.

Let’s talk about how people get into crypto in the first place.
`;

const whatIsCryptoContent = `
# What is Crypto Trading?

Cryptocurrency trading is the act of speculating on cryptocurrency price movements via a CFD trading account, or buying and selling the underlying coins via an exchange.

## How do cryptocurrencies work?

Cryptocurrencies are digital currencies that use blockchain technology to record and secure every transaction. A blockchain is a distributed ledger that's maintained by a network of computers called "nodes".

This technology creates a record of transactions that is very hard to change or hack once confirmed on the blockchain. The distributed nature of blockchain makes cryptocurrencies fundamentally different from traditional, centralized fiat currencies.

![Cryptocurrency Blockchain](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800)

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

![Blockchain Technology](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800)

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
      id: "intro",
      title: "Introduction",
      slug: "/crypto-essentials/introduction",
      sidebar_label: "Introduction",
      sidebar_position: 1,
      content: introContent,
    },
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
