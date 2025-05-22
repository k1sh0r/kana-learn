import { Category } from "@/types";

const introContent = `
## **Module 1: What Is Crypto Trading?**

![What Is Crypto Trading](/images/content/what-is.jpeg)

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

![Spot, Futures & Options](/images/content/spot-futures-options.jpg)

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

Next up: **Module 2**: Getting Into Crypto
`;

const gettingIntoCryptoContent = `
## **Module 2: Getting Into the Market**

![Getting Into the Market](/images/content/getting-into.jpg)

*How people enter crypto and where trades actually happen*

### **Getting Into Crypto**

Or: Where do you actually get crypto in the first place?

So you’ve made the decision: "I want to try this crypto thing. Maybe trade, maybe just explore." Cool. But now comes the very normal, very necessary question: **How do I even get tokens to start with?**

Let’s break it down without jargon.

There are two main ways people first enter crypto:

**On-Ramps — The regular way**

This is where you use your regular (fiat) money to buy crypto through a service. Think of it like converting yen to dollars at the airport — but digital.

You can use a bank card, Apple Pay, Google Pay, or a bank transfer. Platforms like **MoonPay**, **Transak**, or **Binance Onramp** make this easy.

You enter your details, pass KYC (show your passport or ID), and receive tokens like **APT** or **USDC** right into your wallet.

✅ Simple.  
✅ Great for beginners.  
❌ KYC is required.

**P2P — The informal way**

Peer-to-peer platforms connect people who want to buy or sell crypto directly with each other. You find a seller who accepts your bank transfer, send fiat — and they send you USDT (or another stablecoin).

This is used a lot in countries with tight banking restrictions or limited access to official on-ramps.

✅ Often no KYC.  
✅ More flexible.  
❌ Requires caution — scams do happen.  
❌ Can be slower.

**Bonus: Already have crypto?**

If you already own tokens on another chain (like Ethereum or Solana), you can use a **bridge** to move them to Aptos. Then you’ll probably want to **swap** them for APT or USDC once they arrive.

A bridge is exactly what it sounds like — a connection between blockchains. It lets you move assets from one chain to another.

We’ll explain bridges and swaps more in Module 3, but that’s the basic idea.

**Recap:**

* On-ramp \= fiat to crypto via card and ID check  
* P2P \= direct deal with another person  
* Already in crypto? Bridge \+ swap to Aptos

### **CEX vs. DEX**

Or: Trading in a bank vs. trading in the wild

So now you’ve got crypto. Where do you actually *use* it?

In crypto, there are two main types of platforms where trades happen: **CEXs** (Centralized Exchanges) and **DEXs** (Decentralized Exchanges).

Each one has pros and cons. Think of CEXs like secure, polished airports — clean, but full of rules. DEXs? More like street markets — fast, open, and full of surprises.

**What’s a CEX?**

Centralized Exchanges (like Binance, OKX, or Coinbase) are run by companies. You register, pass KYC, deposit fiat or crypto, and trade through their interface.

✅ Easy to use  
✅ Fiat on-ramps built-in  
✅ Lots of liquidity (fast trades, small spreads)  
❌ You don’t control your funds — the platform does  
❌ Accounts can be frozen, platforms can be hacked

**What’s a DEX?**

Decentralized Exchanges run on smart contracts. You don’t register — you just connect your wallet and trade directly.

Examples include Uniswap, Kana Labs, and PancakeSwap.

✅ You keep full control of your funds  
✅ No KYC, no sign-up  
✅ Runs 24/7, no permission needed  
❌ You sign every transaction manually  
❌ Easier to mess up — scams, wrong tokens, etc.

![CEX vs. DEX](/images/content/cex-vs-dex.jpg)

**So which is better?**

That’s up to you.

CEXs can be a good starting point — especially if you're looking for a familiar interface and want to buy crypto using fiat. DEXs offer more freedom — you trade directly from your wallet, no accounts, no middlemen.

And these days, using a DEX isn’t some advanced hacker move. Platforms like Kana Labs make it smooth enough that even first-time users can navigate with confidence.

So try both if you want. Just know that full control and real ownership — that’s what DEXs are built for.

### **What’s next?**

You’ve got tokens. You’ve got a wallet. You know how to trade. But what *are* these tokens exactly? And what’s the point of stablecoins or swaps?

Next up: **Module 3 — Tools of the Trade**: wallets, token types, and how everything connects in your setup.
`;

const toolsOfTheTradeContent = `

## **Module 3: Tools of the Trade**

![Tools of the Trade](/images/content/tools-of.jpg)

*Wallets, tokens, stablecoins, and how it all connects*

### **Wallet Essentials**

Or: Not your keys, not your coins

Before you can trade, swap, or even just hold anything in crypto — you need a wallet. And no, it’s not just a place to store your money. In crypto, a wallet is your vault, your login, your signature, and your identity all rolled into one.

Let’s break it down. Let’s also make sure you don’t lose everything with one wrong click.

A **crypto wallet** stores the private keys that prove ownership of your tokens. Without your key — you can’t move your funds. There are two main types:

* **Hot wallets** — browser extensions or apps like Petra and Nightly. Always online, always ready. Ideal for trading.  
* **Cold wallets** — physical devices, like a hardware USB, kept offline for security. Great for long-term storage, but slower for active use.

When you install a wallet, it creates:

* A **public address** — like your crypto email. You share this to receive tokens.  
* A **private key** (or seed phrase) — this gives full access to your wallet. If someone gets this, they own your money. Never share it.

Your wallet also acts like a signature device. Want to swap tokens? Open a trade? Withdraw funds? You’ll sign the action with your wallet.

But here’s where things get tricky — and dangerous.

**❗ Not Every Token Works on Every Chain**

Just because you see USDC on Aptos doesn’t mean it’s the same USDC as on Ethereum or Solana. They might share the same name and logo — but they’re separate tokens on different blockchains.

APT lives on Aptos. ETH lives on Ethereum. USDC can exist on multiple chains — and if you send it to the wrong one, it’s gone.

> Rookie mistake: Copying an Ethereum wallet address and trying to send Aptos tokens there. Doesn’t work. You just sent your funds into the void.

Blockchains don’t come with a support hotline. If you make this kind of mistake, nobody can reverse it for you.

**Always check:**

* Are you using the correct network?  
* Does the platform support this chain?  
* If unsure, test with a small amount.

![Transaction](/images/content/sending-to-address.jpg)

**Security Tips (Seriously, read this one)**

* Store your seed phrase *offline* — write it down on paper, not in screenshots.  
* Never share your private key.  
* Be careful with links and popups — phishing is everywhere.  
* Use a separate wallet for testing and practice.

**Wallets You’ll See in This Course**

| Wallet | Network | Notes |
| ----- | ----- | ----- |
| Petra | Aptos | Official, clean UI |
| Pontem | Aptos | Feature-rich, great UX |
| Nightly | Aptos & Sui | Sleek, multichain |
| OKX | Multi-chain | Integrated with CEX/DEX |

We recommend starting with **Petra** or **Nightly** — both work great with Kana Labs products.

**Summary:** Your wallet is your passport to crypto. Lose your private key, and you'll lose your funds. Pick the right network. Stay alert. Practice safe storage.

### **Token Types**

Or: What are you actually trading?

Crypto is full of tokens, in fact, thousands of them. But some are legit, while others are jokes. You don’t need to be a developer to trade, but you do need to understand what you're looking at. Let’s go over the most common types.

**BTC (Bitcoin)** 

The one that started it all. Think of it as digital gold — limited in supply, independent of governments, and used mostly as a store of value. We don’t trade BTC directly in this course, but its movement sets the tone for the whole market. When Bitcoin sneezes, altcoins catch a cold.

**APT — The Native Token of Aptos** 

If you're using Kana Labs or anything on the Aptos blockchain, this is your main fuel. APT is used to pay gas fees, stake in DeFi apps, and speculate. It’s your “cash” on Aptos.

**USDC / USDT — Stablecoins** 

Stablecoins are tokens pegged to the US dollar. One USDC \= 1 USD (most of the time). They’re great for sitting out market swings, locking in profits, or transferring funds. Think of them like poker chips in a casino. You don’t leave the system but can step away from risk.

The most widely used stablecoins are USDC and USDT. They differ in how their reserves are structured and how transparent their operations are, which often sparks debate in the crypto community. It’s worth taking a closer look at how each one works before using them.

**Meme Coins — Speculation or Culture?** 

These are tokens built mostly on hype. Think DOGE, PEPE, or anything with “Inu420MaxMoon” in the name. They often have no utility, no roadmap, and no reason to exist — except for laughs. Some pump 10x in a day. Others die quietly. They’re part of crypto culture, but also full of risk.

Be careful:

* They move fast and crash faster.  
* Most go to zero.  
* Some are outright scams.

**Summary:**

* APT is your main token on Aptos  
* USDC/USDT \= safe havens during volatility  
* BTC/ETH \= trend leaders  
* Meme coins \= fast, fun, and dangerous

### **Stablecoin Swaps**

Or: How to move between volatility and stability in one click

Swapping tokens is crypto's most common and underrated skill. A **swap** is like changing currencies at an airport. You give one token and receive another instantly. But it’s more than that. It’s how traders lock in profit, exit risk, or prepare for their next move.

Example: You swap APT → USDC after a price pump. Lock in gains. Later, when the dip is over, you swap back and re-enter the market.

You never leave crypto — you just shift between risky and safe positions.

**Why It Matters:**

* You can protect yourself during big swings  
* You can move between assets without going to fiat  
* You can react fast and in crypto, speed matters

Swaps are instant and automatic — no bids, no asks, just the best price your trade can get. On Kana Labs, it’s fast, frictionless, and plugged into deep cross-chain liquidity.

**But Be Careful:**

* Wrong network \= lost funds  
* Fake tokens are everywhere. The name might be right — the contract isn’t. Always verify it via trusted sources like CoinGecko or the project’s official site.  
* Don’t swap your entire portfolio without thinking  
* Slippage happens, especially on low-volume tokens

**Where to Swap:**

Swaps can be done either through a widget — embedded in some wallets and app interfaces — or directly via a decentralized exchange. In this course, we’ll be using Kana Labs Swap: simple, clean, and no login required.

**Walkthrough: Swapping APT → USDC on Kana Labs**

1. Connect wallet (Petra, Nightly, etc.)  
2. Select APT → USDC  
3. Enter amount (e.g., 10 APT)  
4. Review rate \+ gas estimate  
5. Click “Swap,” sign the transaction  
6. Done — tokens arrive in seconds

Want to go back? Just reverse the flow.

**Summary:**

Swaps are the foundation of crypto movement. Learn them early.

They help you protect value (for example, swapping into stablecoins during a market drop), exit a position, or adjust your portfolio (like moving from one token to another you believe will perform better).

Always double-check the network and token — the wrong chain or fake asset can cost real money.

Mastering swaps means you’re no longer just “holding” — you’re managing, reacting, and making real decisions.

### **What’s next?**

You’ve got the wallet. You’ve got the tokens. You know how to swap. But what happens behind the scenes when you actually press “Swap” or “Trade” — and why does it sometimes fail?

In **Module 4**, we’ll get under the hood and explain gas, fees, and what every trader needs to know about how transactions actually work on-chain.
`;

const gasFeesContent = `
## **Module 4: Gas, Fees & Transactions**

![Gas, Fees & Transactions](/images/content/gas-fees.jpg)

*Why some trades fail, how gas works, and what it means for you*

### **What Is Gas?**

If you’ve spent more than five minutes using a blockchain, you’ve probably heard the word **gas**. But what is it, really? No, it’s not fuel in a literal sense — you’re not filling up your MetaMask with diesel. But it *is* what powers every action on-chain.

Let’s make it simple:

Whenever you do something on a blockchain — send tokens, open a trade, mint an NFT — that action needs to be validated by the network. That work isn’t free. Validators (or miners) run the machines that keep the blockchain alive, and they expect to be paid for their work. That payment is **gas**.

Different chains use different tokens for gas. On Ethereum, it’s ETH. On Aptos, it’s APT.

The more complex your action (like using a DeFi protocol), the more gas it costs. If the network is congested, gas prices go up — because users are competing to get their transactions processed.

So yes — **gas is like a toll.** Want your transaction to go through quickly? You might have to pay more.

Want to save money? You might have to wait longer.

**How Gas Impacts Users**

Gas isn’t just some technical detail buried in the background. It affects real users, every single day. Especially beginners. 

Ever tried to swap a token and the transaction just… didn’t go through? You probably didn’t set the gas high enough. Or the price changed mid-swap. Or the blockchain hiccupped. And then what happens? You’re left wondering: Did I just lose money? Will it go through eventually? Should I click again?

Let’s break down what’s actually going on:

**Every on-chain transaction costs gas.** If you don’t have enough in your wallet to cover the fee — it won’t work. If the price of gas spikes suddenly, your transaction might stall or fail. If you’re using a busy chain (like Ethereum during an NFT mint), gas wars are real — and brutal.

Some wallets let you adjust the gas settings. Others just give you the average. But in either case, **you pay for every click**. And if you spam transactions or cancel too many? You’re just wasting more gas.

For new users, this is one of the biggest frustrations:

“Why do I need to pay just to move my own money?”

Fair question. The answer is: Because blockchains are global, public systems. You’re paying for your transaction to be added to a permanent, decentralized ledger — forever. That has a cost.

![Transaction](/images/content/gas-fees-network.jpg)

### **Gasless Trades on Kana Perps**

This is where things get interesting — and way more user-friendly. On **Kana Perps**, we’ve eliminated the need for gas fees on market orders. Yes, really. You can open and close positions without worrying about gas.

Here’s how it works: We sponsor the gas fees for certain actions — specifically **market orders** — so users can focus on trading, not topping up their APT balance.

Limit orders still require APT (since they live on-chain and need to be placed into the order book), but for most basic trading activity, you can go gasless.

This is a big deal — especially for beginners.

Because here’s what it means:

* You don’t need to constantly refill APT  
* You can test trades without burning fees  
* You avoid transaction fails from gas issues

Gasless trading lowers the barrier to entry. It removes one of the key frictions that push users away from DeFi. It’s smoother. Cleaner. More forgiving.

You focus on price and risk. We take care of the backend.

\[Visual: Kana Perps UI showing market order placed with “0 APT” gas cost\]

**Final Thought:**

Gas is part of the blockchain’s DNA — it’s what keeps the system fair and functional. But for most users, especially new ones, it’s also confusing, unpredictable, and annoying.

Platforms like Kana are finding ways to simplify that. You’ll still need to understand gas to survive in crypto — but you shouldn’t have to fear it.

You trade. We’ll handle the gas.
`;

const ConclusionContent = `
**You’ve made it through the foundations.** 

**![Transaction](/images/content/foundation-complete.png)**

That means:

* You understand what trading actually is  
* You know how to get crypto — and where to use it  
* You’ve set up a wallet, learned about token types, and figured out how swaps and gas fees work

In short — you’re not guessing anymore.

You’ve got the map. Now it’s time to **pick a direction**.
`;

// Export category data
export const cryptoEssentialsCategory: Category = {
  id: "crypto-essentials",
  label: "Crypto Essentials",
  slug: "crypto-essentials",
  position: 1,
  description: `## **Overview**

**Crypto Onboarding Essentials** is a course for those who want to understand how crypto works in real life. Not in theory, not in hype, but in practice — how people get their first tokens, what wallets actually do, how swaps work, and why even simple transactions can go wrong.

We won’t tell you that a blockchain is “a chain of blocks.” Instead, we’ll focus on the tools and mechanics you actually use: setting up a wallet, understanding token types, moving assets between chains, avoiding fake tokens, and navigating between centralized and decentralized exchanges.

You’ll learn what stablecoins are really for, why gas fees matter, and how to use crypto without constantly worrying you’ve missed something critical. We’ll explain the common pitfalls — from sending tokens to the wrong chain to signing risky transactions — and how to avoid them before they happen.

This isn’t a course about trading strategies or chasing the next big coin. It’s about getting your foundation right — so that wherever you go next in crypto, you’ll do it with clarity, control, and confidence.

Whether you’re planning to explore DeFi, try out perpetuals, or just manage your assets safely, this is where it starts — with the basics that actually matter.

## **What You Will Learn**

### **Set up and use a crypto wallet**

What a wallet really is, why it matters, and how to use it without losing your funds. You’ll learn to choose between hot and cold wallets, keep your keys safe, and avoid common mistakes.

### **Understand token types and stablecoins**

Get to know what you're actually holding — from APT and ETH to meme coins and USDC. Learn why stablecoins are essential tools, not just “dollar copies,” and how to use them to reduce risk.

### **Swap tokens safely and confidently**

Swapping is how crypto moves. You’ll learn how it works, when to use it, and how to avoid traps like fake tokens, wrong chains, and excessive slippage — so your swaps go where they should.

### **Navigate CEXs and DEXs**

Explore the real difference between centralized and decentralized platforms. Find out where beginners usually start, how DEXs work with your wallet directly, and when to use each.

### **Handle gas fees and failed transactions**

Gas fees aren’t just technical details — they affect every action on-chain. You’ll learn what they are, why transactions sometimes fail, and how platforms like Kana Perps are making it easier to trade without worrying about gas.

`,
  pages: [
    {
      id: "intro",
      title: "What Is Crypto Trading?",
      slug: "/crypto-essentials/what-is-crypto-trading",
      sidebar_label: "1. What Is Crypto Trading?",
      sidebar_position: 1,
      content: introContent,
    },
    {
      id: "getting-into-market",
      title: "Getting Into the Market",
      slug: "/crypto-essentials/getting-into-the-market",
      sidebar_label: "2. Getting Into the Market",
      sidebar_position: 2,
      content: gettingIntoCryptoContent,
    },
    {
      id: "tools-of-the-trade",
      title: "Tools of the Trade",
      slug: "/crypto-essentials/tools-of-the-trade",
      sidebar_label: "3. Tools of the Trade",
      sidebar_position: 3,
      content: toolsOfTheTradeContent,
    },
    {
      id: "gas-fees-transactions",
      title: "Gas, Fees & Transactions",
      slug: "/crypto-essentials/gas-fees-transactions",
      sidebar_label: "4. Gas, Fees & Transactions",
      sidebar_position: 4,
      content: gasFeesContent,
    },
    {
      id: "conclusion",
      title: "Conclusion",
      slug: "/crypto-essentials/conclusion",
      sidebar_label: "5. Conclusion",
      sidebar_position: 5,
      content: ConclusionContent,
    },
  ],
};
