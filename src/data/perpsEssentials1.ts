import { Category } from "@/types";

const whatYouWillLearn = `
# **What You Will Learn**

### **Trade without guessing**

Understand how perpetual futures work — and how they don’t. Learn why people use them, when to go long or short, and what separates a smart position from a blind bet.

### **Use leverage without losing your head**

See how margin works, how liquidation happens, and why the 20× button isn’t your friend. Learn how to size positions, manage exposure, and stay in control — even in fast markets.

### **Open and manage real trades**

Walk through market and limit orders, setting stop-loss and take-profit, adjusting margin, and using hedge mode — directly on Kana Perps. Every concept ties back to execution.

### **Protect your capital**

You’ll build a clear risk framework: how much to risk per trade, how to survive drawdowns, and how to stop revenge trading before it starts. Because staying in the game is step one.

### **Read price like a trader**

Get the basics of technical analysis: candlestick charts, chart patterns, key support and resistance levels. Plus how to use indicators without turning your screen into a mess.

### **Handle the mental side**

Learn how to stick to your plan when it’s uncomfortable, take losses without spiraling, and stop overtrading because “it almost hit target.” Trading isn’t just charts — it’s mindset.

Let’s get into it.
`;

const understanding = `
# **Understanding Perpetual Futures** <br>

<img src="/images/content/perpsEss14.png" alt="Understand Perps Futures"/> <br>

*Or: How to bet on price movement without owning the asset*

Let’s start from zero.

Perpetual futures — or simply perps — are contracts that let you trade on the price of a crypto token without actually holding it. You’re not buying an asset. You’re speculating on its direction — up or down.

There’s no expiry. You can go long or short. You use collateral (like USDT), and the rest happens on-chain.

That’s the short version. Now the real one.

### **Why Do Traders Use Perpetual Futures?**

Because they’re flexible, fast, and built for modern trading:
* You can go long or short — profit either way
* You don’t need to hold APT or ETH — just collateral
* You can use leverage — open larger positions with less capital
* No expiry — hold your position as long as you want
* Built for volatility — with tools that help you survive it: stop-losses, TP, hedging

Perpetual futures are the backbone of serious crypto trading. Platforms like Binance, OKX, and now Kana Perps move billions in perp volume every day. It’s not just a niche tool — it’s where most of the action happens.

**Perpetual Futures vs. Spot: What’s the Actual Difference?**

<img src="/images/content/perpsEss12.png" alt="Perps vs. Spot"/> <br>

With spot, you buy the token. With perpetual futures, you trade the price. That’s it.

### **Real Use Cases**

* You expect a breakout → You long APT using perps

* You expect a dump → You short APT using perps

* You hold APT and want to hedge downside → You short APT perps

* You don’t want to move funds between wallets → You open a perp instead

### **Why It’s Powerful — and Risky**

Perpetual futures aren’t just fast — they’re unforgiving.

* Leverage can grow your profit — or your loss

* If the market moves against you too far, you get liquidated

* Funding rates can quietly chip away at your PnL if you’re not paying attention

We’ll break all of that down in this module. But for now, the one-line summary is simple:

You’re not buying crypto. You’re trading the idea of where its price will go next.
`;

const longShort = `
# **Long vs. Short Positions**

*Or: Trading is just picking a side*

Perpetual futures are simple in theory. You’re not trying to be right about everything — just one thing:

Will price go up or down?

That’s the whole game. And that’s why we talk about two basic positions:

**Going Long →** — You bet the price will go up. You lose if it goes down.  
**Going Short →** You bet the price will go down. You lose if it goes up.

Pick a direction. Manage your risk. That’s trading. It sounds simple — but let’s make it real. Let’s break it down with a simple example. Here’s what going long or short actually looks like in a real trade:

### **Long \= You Expect the Price to Go Up**  
You open a long position when you believe the asset will increase in value.

**In practice:**  
 APT is trading at $10. You expect a breakout after strong news.  
 → You open a long position at $10  
 → Price moves to $12  
 → You close the position → you earn $2 profit per token  
 → With 3× leverage → your total profit is $6 per token

This is the ***bullish*** move. You’re betting on growth.

### **Short \= You Expect the Price to Go Down**  
 You open a short position when you believe the asset will drop in price. You’re selling high, buying back lower.

**In practice:**  
 APT is trading at $10. Negative market sentiment is building.  
 → You open a short position at $10  
 → Price drops to $8  
 → You close the trade → you earn $2 profit per token  
 → With 3× leverage → your total profit is $6 per token

This is the ***bearish*** move. You’re betting on a decline.

In practice, good traders use both long and short — depending on what the market is doing. Let’s see a quick example.

***Alex Trades Both Ways***

On Monday, ETH is trading at $3,000. Strong buying volume is coming in — Alex expects a breakout.  
 → He opens a long position on ETH at $3,000  
 → ETH moves up to $3,240  
 → He closes the position and locks in profit.

On Thursday, negative news hits the market — ETH starts dropping fast.  
 → Alex opens a short position on ETH at $3,240  
 → ETH falls to $3,120  
 → He closes the trade and takes profit again.

Alex doesn’t care about direction. He reacts to what the market is doing — going long or short as needed.

**This Isn’t About “Bull or Bear”**

Perps traders don’t need to believe in Bitcoin forever. They just need to know how to play the current move. Long and short are just tools. Use them both.
`;

const margin = `
# **Margin, Leverage & Liquidation**

*Or: How to trade big with small money (and why that’s dangerous)*

**What Is Margin?**

Margin is the amount you put up to open a leveraged trade. It’s your money on the line. If things go wrong, that’s what disappears.

Let’s say you want to open a $1,000 position using 5× leverage: you only need $200 margin. The other $800 is synthetic — borrowed via the contract. That $200 is what you risk. If the trade goes south — that’s what disappears.

**Margin \= your capital buffer.** Lose it, and the trade is done.

**How Leverage Works**

Leverage means you can control a larger position than the money you put in. It multiplies both your gains and your losses.

When you use leverage, you say: “Let me trade like I have more money than I actually do.”

If you’re right — you make more. If you’re wrong — you lose more.

On Kana Perps and similar platforms, you choose the position size first — say, $500. Then you choose the leverage — let’s say 5×. That means your required margin is $100 ($500 ÷ 5).

Now what happens when price moves?

* Price goes up 10% → You earn $50 profit (10% of $500)

* Price drops 10% → You lose $50

* If price drops 20% → Your $100 margin is gone. You’re liquidated.

**The takeaway?**  
Leverage doesn’t give you more capital. It reduces the amount you need to control a bigger position. But the risk scales with the full position, not just your margin.

**What Is Liquidation?**

Liquidation happens when your margin balance drops below the **maintenance margin** — the minimum amount required to keep the position open.

If the price moves too far against your trade, your margin starts shrinking.

You can add more to keep it alive — but if you don’t, and it falls below the threshold, the platform will close your position automatically.

You don’t go into debt, but you do lose your margin.

The platform steps in and says: “You don’t have enough left to keep this trade open. We’re closing it.”


<img src="/images/content/perpsEss13.png" alt="Leverage & Liquidation"/> <br>

High leverage \= high stress. Low leverage \= breathing room.

A 5% move against you at 20× → Game over.

**Isolated Margin on Kana Perps**

On Kana Perps, every position uses an **isolated margin**.

That means:

* Each trade has its own margin

* If one gets liquidated — your other trades are safe

* You won’t lose your whole balance from one mistake

This is different from **cross margin**, where all positions share the same collateral pool (used on some other platforms).

**How to Use Leverage Like a Trader, Not a Gambler**

* Start with 2× or 3×. That’s already strong

* Always use stop-losses — even if wide

* Don’t choose max leverage just because the slider goes that high

* More leverage \= less room for error

* Treat it like a scalpel, not a slingshot

Managing your margin and leverage gives you more room to survive normal market moves. But many traders forget that — and pay the price.

Here’s what can happen if you skip the stop-loss and trade too aggressively.

***Emma Skips the Stop***  
Emma opens a 10× long on ETH at $3,000 using $100 margin. She expects a quick breakout and plans to watch the trade — but she forgets to set a stop-loss.

ETH drops 9%. Emma hesitates, hoping for a bounce. The price does recover a little — but too late. Her margin is gone. Liquidated.

If she had added $30 more margin, or used 5× leverage instead, she would have had more room to survive the drawdown — and possibly stay in the trade.

**How to Stay Out of Trouble**

Leverage and margin are powerful tools — but they can also wipe you out fast if you use them wrong. So how do you avoid blowing up your account? It’s simpler than it looks — just follow these basic rules.

* **Use lower leverage** to widen your liquidation buffer. High leverage leaves no room for error.

* **Watch your margin ratio** — most platforms show it clearly. Don’t ignore it.

* **Add margin** if the price drifts against you. It can give you more time to manage the trade.

* **Never trade your full account balance** — always leave some breathing room.

* **Always use stop-losses** — yes, again. They protect you when things move too fast.
`;

const funding = `
# **Funding Rates**

*Or: Why holding a position isn't free*

Perpetual futures don’t expire. That’s great for flexibility — but it also means perp prices can drift away from the real market (spot).

To fix that, we have funding rates. They’re not fees from the exchange. They’re small payments traders make to each other — to keep perp prices aligned with reality.

**Who Pays Whom?**

It depends on market imbalance:

* If most traders are long → funding rate is positive → longs pay shorts

* If most traders are short → funding rate is negative → shorts pay longs

This creates a soft nudge that keeps perp prices from drifting too far from spot.

**Why It Matters**

If you hold a position across a funding interval, this payment impacts your PnL — even if the price doesn’t move at all.

That’s why experienced traders check funding before holding overnight.

**So what does this look like in practice?** 

Let’s see how funding can quietly eat into your PnL if you’re not paying attention.

***You Pay to Hold***  
You go long ETH with $5,000 at a \+0.01% funding rate. You hold the position for 24 hours — that’s 3 intervals.

You pay:  
 0.01% × 3 × $5,000 \= $1.50

Not a big number. But with size or time, it stacks up.

Of course, funding works both ways. If you’re on the unpopular side of the trade — you can actually earn from it. Here’s how.

***Lisa Earns by Doing Nothing***  
Lisa shorts a meme coin during peak hype. Everyone else is long. Funding rate \= \+0.05% every 8 hours.

She holds her short for 12 hours → two intervals.

Even if price stays flat, she earns from the long traders — just by being on the unpopular side.

**How It Works on Kana Perps**

Kana shows you the current funding rate directly in the trade panel — no guesswork.

* You don’t pay or earn if you open and close within the same funding window

* Market orders opened and closed quickly often avoid funding impact entirely

* Funding farming (e.g. shorting during high positive funding) is a real strategy — but comes with risk

**If you remember just one thing about funding, make it this:**

* Funding is a payment between traders — not to the platform  
* It’s based on perp vs. spot imbalance  
* Positive \= longs pay, Negative \= shorts pay  
* It can quietly erode (or boost) your PnL — especially in sideways markets

Use it wisely — or at least know when it’s working against you.
`;

// Export category data
export const perpsEssentialsCategory: Category = {
  id: "perps1",
  label: "Perpetual Futures Essentials Module 1",
  slug: "perps1",
  position: 3,
  description: `## **Overview**

Let’s be real — most people don’t start trading perpetual futures because they love finance. They start because they heard you can turn $100 into $1,000 in five minutes. Or because someone on Twitter bragged about a 200% trade on some coin they’d never heard of.

And then they try it.

They open a position with 50x leverage, skip the stop-loss, and wake up to an empty account. That’s how it usually starts — and ends — for most beginners.

This course is here to change that.

It’s not about predicting the market. It’s about understanding the tools — and how not to blow up your account while learning to use them.

You’ll walk through the basics of perpetual futures: what they are, how they differ from spot trading, and why traders use them. You’ll learn how to take long and short positions, manage leverage and margin, set stop-losses and take-profits, and understand liquidation before it happens. We’ll explain funding rates, execution quality, and what really matters when you’re placing trades — not after.

And it’s all tied to real usage on **Kana Perps** — so you’re not just reading theory. You’re learning to trade in practice, with real buttons and real decisions.

No promises. No screenshots of 400% wins. Just a clear framework to help you trade smarter, last longer, and avoid the traps that take most people out early.
`,
  isNew: true,
  pages: [
    {
      id: "what-you-will-learn",
      title: "What You Will Learn",
      slug: "/perps1/what-you-will-learn", 
      sidebar_label: "Learning Objectives",
      sidebar_position: 1,
      content: whatYouWillLearn,
    },
    {
      id: "understanding-perps",
      title: "Understanding Perpetual Futures",
      slug: "/perps1/understanding-perps",
      sidebar_label: "Understanding Perps",
      sidebar_position: 2,
      content: understanding,
    },
    {
      id: "long-short", 
      title: "Long vs. Short Positions",
      slug: "/perps1/long-short",
      sidebar_label: "Long vs. Short",
      sidebar_position: 3,
      content: longShort,
    },
    {
      id: "margin-liquidation",
      title: "Margin, Leverage & Liquidation",
      slug: "/perps1/margin-liquidation",
      sidebar_label: "Margin & Leverage",
      sidebar_position: 4,
      content: margin,
    },
    {
      id: "funding",
      title: "Funding Rates",
      slug: "/perps1/funding",
      sidebar_label: "Funding Rates",
      sidebar_position: 5,
      content: funding,
    },
    
  ],
};
