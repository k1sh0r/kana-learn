import { Category } from "@/types";

// Module 1: Perpetual Futures Essentials
const module1Content = `
### **📘 Module 1: Perpetual Futures Essentials**

**— What Are Perpetual Futures?**

**— Long vs. Short Positions**

**— Margin, Leverage & Liquidation**

**— Funding Rates**

# **Module 1: Perpetual Futures Essentials**

***What they are, how they work, and why people trade them***

## **What Are Perpetual Futures?**

**Or: How to bet on price movement without owning the asset**

Let’s start from zero.

Perpetual futures — or just perps — are contracts that let you trade on the price of a crypto token without actually holding it. You’re not buying an asset. You’re speculating on its direction — up or down.

There’s no expiry. You can go long or short. You use collateral (like USDT), and the rest happens on-chain.

That’s the short version. Now the real one.

### **Why Do Traders Use Perps?**

Because they’re flexible, fast, and built for modern trading:

* You can go long or short — profit either way  
* You don’t need to hold APT or ETH — just collateral  
* You can use leverage — open larger positions with less capital  
* No expiry — hold your position as long as you want  
* Built for volatility — with tools like stop-loss, TP, and hedging

Perps are the backbone of serious crypto trading. Platforms like Binance, OKX, and now Kana Perps move billions in perp volume every day. It’s not just a niche tool — it’s where most of the action happens.

### **Perps vs. Spot: What’s the Actual Difference?**

| Action | Spot Trade | Perps Trade |
| ----- | ----- | ----- |
| Buy APT at $10 | You own APT | You open a contract tracking APT’s price |
| APT goes to $12 | \+$2 profit | \+$2 profit |
| APT drops to $8 | −$2 loss | −$2 loss (amplified if leveraged) |
| Go short? | Not possible | Yes |
| Need the token? | Yes | No |

With spot, you buy the token. With perps, you trade the price. That’s it.

### **Real Use Cases**

* You expect a breakout → Long APT  
* You expect a dump → Short APT  
* You hold APT and want to hedge downside → Short perp  
* You don’t want to move funds between wallets → Just open a perp

### **Why It’s Powerful — and Risky**

Perps aren’t just fast — they’re unforgiving.

* Leverage can grow your profit — or your loss  
* If the market moves against you too far, you get liquidated  
* Funding rates quietly chip away at your PnL if you’re not paying attention

We’ll break all of that down in this module. But for now, the one-line summary is simple:

You’re not buying crypto. You’re trading the idea of where its price will go next.

## **Long vs. Short Positions**

**Or: Trading is just picking a side**

Perpetual futures are simple in theory. You’re not trying to be right about everything — just one thing:

Will price go up or down?

That’s the whole game. And that’s why we talk about two basic positions:

* **Go Long** — you bet the price will rise  
* **Go Short** — you bet the price will fall

Pick a direction. Manage your risk. That’s trading.

### **Long \= You Expect the Price to Go Up**

You open a long position when you believe the asset will increase in value.

**Example:**  
 You long APT at $10  
 Price goes to $12  
 You close the position → you earn $2 per token  
 With 3× leverage → you earn 3× that

This is the bullish move. You’re betting on growth.

### **Short \= You Expect the Price to Go Down**

You open a short position when you believe the asset will drop in price. You’re essentially selling high, buying back lower.

**Example:**  
You short APT at $10. Price drops to $8. You close the trade → you earn $2 per token

You never needed to own APT. That’s what makes perps powerful.

### **Summary Table**

| Position | You profit if... | You lose if... |
| ----- | ----- | ----- |
| Long | Price goes up | Price goes down |
| Short | Price goes down | Price goes up |

### **Real Example: Alex Trades Both Ways**

* On Monday, APT looks strong → Alex goes long at $9  
   APT hits $10.20 → he closes. Profit.

* On Thursday, bad news drops → Alex goes short at $10.20  
   APT dumps to $9.60 → he closes. Another profit.

**Takeaway:** Alex doesn’t care about direction. He reacts to it.

### **This Isn’t About “Bull or Bear”**

Perps traders don’t need to believe in Bitcoin forever. They just need to know how to play the current move. Long and short are just tools. Use them both.

### **Margin, Leverage & Liquidation**

*Or: How to trade big with small money (and why that’s dangerous)*

**What Is Margin?**  
Margin is the amount you put up to open a leveraged trade. It’s your money on the line. If things go wrong, that’s what disappears.

Let’s say you want to open a $1,000 position using 5× leverage: you only need $200 margin. The other $800 is synthetic — borrowed via the contract. That $200 is what you risk. If the trade goes south — that’s what disappears.

**Margin \= your capital buffer.** Lose it, and the trade is done.

**How Leverage Works**  
Leverage means you can control a larger position than the money you put in. It multiplies both your gains and your losses. That’s the deal. When you use leverage, you say, *“Let me trade like I have more money than I actually do.”*

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

The platform steps in and says: *“You don’t have enough left to keep this trade open. We're closing it.”*

**How Close Is Too Close?**

| Leverage | Price Move to Liquidation |
| ----- | ----- |
| 2× | \~50% |
| 5× | \~20% |
| 10× | \~10% |
| 20× | \~5% |

Exact numbers depend on the platform and margin model.  
 High leverage \= high stress. Low leverage \= breathing room.

A 5% move against you at 20× → Game over.

**Isolated Margin on Kana Perps**  
 On Kana Perps, every position uses **isolated margin**.  
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

**Example: Emma Skips the Stop**  
 Emma opens a 10× long on APT at $10 using $100 margin.  
 She’s controlling a $1,000 position. APT drops 9%.  
 She hesitates. It bounces slightly, but too late. The margin is gone. Liquidated.

If she had added $30 more margin or used 5× instead, she might’ve stayed in.

**How to Stay Out of Trouble**

* Use lower leverage to widen your liquidation buffer  
* Watch your margin ratio — most platforms show it clearly  
* Add margin if price drifts against you  
* Never trade your full account balance — leave breathing room  
* Use stop-losses — yes, again

Margin is your first and last defense.

**Next: Part 4 — Funding Rates**  
 The hidden PnL leak most traders ignore. Let’s fix that.

## **Funding Rates**

**Or: Why holding a position isn’t free**

Perpetual futures don’t expire. That’s great for flexibility — but it also means perp prices can drift away from the real market (spot).

To fix that, we have funding rates. They’re not fees from the exchange. They’re small payments traders make to each other.

### **Who Pays Whom?**

It depends on market imbalance:

* If most traders are long → funding rate is **positive** → **longs pay shorts**  
* If most traders are short → funding rate is **negative** → **shorts pay longs**

It’s a soft nudge to keep things balanced — and aligned with reality.

### **Why It Matters**

If you hold a position across a funding interval, this payment impacts your PnL — even if the price doesn’t move at all.

That’s why experienced traders check funding before holding overnight.

### **Example: You Pay to Hold**

You go long APT with $5,000 at a \+0.01% funding rate. You hold the position for 24 hours — that’s 3 intervals.

You pay:  
 0.01% × 3 × $5,000 \= **$1.50**

Not a big number. But with size or time, it stacks up.

### **Example: Lisa Earns by Doing Nothing**

Lisa shorts a meme coin during peak hype. Everyone else is long. Funding rate \= \+0.05% every 8 hours.

She holds her short for 12 hours → two intervals. Even if price stays flat, she **earns** from the long traders. Just by being on the unpopular side.

### **How It Works on Kana Perps**

Kana shows you the current funding rate directly in the trade panel — no guesswork.

* You **don’t pay or earn** if you open and close within the same funding window  
* **Market orders** opened and closed quickly often avoid funding impact entirely  
* **Funding farming** (e.g. shorting during high positive funding) is a real strategy — but comes with risk

### **Bottom Line**

* Funding is a payment between traders — not to the platform  
* It’s based on perp vs. spot imbalance  
* **Positive** \= longs pay, **Negative** \= shorts pay  
* It can quietly erode (or boost) your PnL — especially in sideways markets

Use it wisely — or at least know when it’s working against you.

## **You’ve Made It Through Module 1**

You now understand:

* What perpetual futures are  
* The difference between spot and perps  
* How to take long and short positions  
* What leverage really means — and how fast it can bite  
* How margin and liquidation actually work  
* And how funding rates affect your PnL even if price doesn’t move

**Next: Module 2 — Executing Trades on Kana Perps**  
 We’ll walk through placing trades, setting stop-loss/take-profit, adjusting margin, and more — directly on the platform.

Let’s get practical.
`;

// Module 2: Executing Trades on Kana Perps
const module2Content = `
### **📘 Module 2: Executing Trades on Kana Perps**

**— Market vs. Limit Orders**

**— Opening a Position**

**— Closing a Trade**

**— Setting TP & SL**

**— Hedge Mode & Dual Positions**

# **Module 2: Executing Trades on Kana Perps**

**How to enter, manage, and close trades like a pro**

## **Market vs. Limit Orders**

***Or: Do you want it now — or at your price?***

Before you can manage trades properly, you need to understand the basics: market and limit orders.

### **Market Orders — Speed First**

A market order says: **"I want it right now — give me the best available price."**

Use it when:

* You're reacting to news or a breakout  
* You're trading highly liquid assets (BTC, ETH)  
* Speed matters more than exact pricing

**The downside:** slippage.  
 If the asset has low liquidity or you're using high leverage, your entry may be worse than expected.

**Example (APT around $10):**

* 4 APT filled @ $10.01  
* 3 APT @ $10.03  
* 3 APT @ $10.05  
   Average \= $10.03 instead of $10. On 10× leverage, you’re already down 3% before the trade even moves.

### **Limit Orders — Control First**

A limit order says: **"Only fill my order at this price or better."**

Use it when:

* You know your ideal entry  
* You want to avoid slippage  
* You’re okay waiting for the market to come to you

**The downside:**  
 If the price doesn’t reach your limit, the trade never happens.

### **Slippage — The Hidden Cost**

Slippage is the difference between your expected price and the actual fill. On Kana Perps, always preview slippage before confirming your trade — especially with leverage. It matters.

### **Comparison: Market vs. Limit**

| Order Type | Speed | Price Control | Risk |
| ----- | ----- | ----- | ----- |
| Market | Instant | Low | Slippage |
| Limit | Delayed | High | May not fill |

## **Structuring Your Trades (Entries & Exits)**

***Or: Trading isn’t just about clicking “Buy”***

Beginners obsess over entries. Experienced traders know exits matter just as much.

### **Planning Your Entry**

Before you hit “Buy”, define:

* **Entry price** – your ideal start  
* **Stop-loss (SL)** – where your idea fails  
* **Take-profit (TP)** – where you exit with gains  
* **Invalidation** – when the setup no longer makes sense

“Let’s see what happens” is not a strategy. “Entry $10.05, SL $9.85, TP $10.50” — that’s a plan.

### **Planning Your Exit**

You exit when:

* TP hits (target achieved)  
* SL hits (risk managed)  
* Setup is invalidated (news, structure)  
* Trade stalls too long (time-based exit)

### **Example: Structured Execution**

* Entry: Limit order at $9.80  
* Stop-loss: $9.60  
* Take-profit: $10.40

This gives you a clean 1:3 risk/reward. Price dips, fills, hits TP — no improvisation required.

### **Common Mistake: Chasing Missed Entries**

If the price jumps past your planned entry, don’t chase. Stay disciplined, reanalyze, and wait for a new opportunity.

## **Execution Quality & Liquidity**

**Or: Why “I clicked buy” ≠ “I got the price I wanted”**

Execution quality is the gap between your intended price and what actually gets filled.

Liquidity is how easily your order gets filled without distortion. Low liquidity means:

* More slippage  
* Worse fills  
* Unpredictable execution

### **Real Example (Leverage Multiplies Impact)**

You buy at $10.00, but get filled at $10.07.  
That’s 0.7% slippage. With 10× leverage, you’re instantly down 7%.

### **Execution Tips**

* Use **market orders** only for liquid pairs  
* Use **limit orders** for volatile or low-liquidity assets  
* Always check slippage preview on Kana Perps before confirming

## **Managing Positions (TP, SL & Margin)**

**Or: Staying safe after you enter your trade**

Setting TP (Take-Profit) and SL (Stop-Loss) is how you manage risk automatically.  
 Once you’re in a trade, the next job is protecting it.

Kana Perps uses **isolated margin**, meaning:

* Each position has its own risk  
* One bad trade won’t drain your whole account

You can **manually add margin** anytime from your “Positions” tab.

Stay proactive. Don't just set and forget.

## **Hedge Mode & Dual Positions**

**Or: Trading both sides at once — Kana’s unique edge**

Kana Perps supports **Hedge Mode**, which lets you hold a Long and a Short on the same asset at the same time.

Why it matters:

* Protect an open trade during volatility  
* Profit from movement in either direction  
* Keep funds on one platform — no juggling

### **Example: Dual Positioning**

Open a Long and Short on APT at the same time. If price spikes, close the profitable side and let the other ride — or hold the hedge for flexibility.

## **Module 2 Checklist**

* Understand the difference between Market and Limit orders  
* Always plan your Entry, Stop-Loss, and Take-Profit  
* Preview slippage and check liquidity before placing a trade  
* Manage margin and risk after the trade is live  
* Use Hedge Mode strategically when needed

**Next Module: Risk Management Essentials**  
 Because even the best trade idea is worthless if you blow up your account.

Let’s talk about survival.
`;

// Module 3: Risk Management Essentials
const module3Content = `
### **📘 Module 3: Risk Management Essentials**

**— Understanding Risk**

**— Stop Loss & Take Profit in Practice**

**— Margin & Liquidation: Deeper Dive**

**— Funding & Its Impact on Strategy**

# **Module 3: Risk Management Essentials**

***Or: How to not blow your account trading perps***

## **Understanding Risk**

**Or: A trade isn’t real until you know exactly how much you’re willing to lose**

Perpetual futures offer speed, leverage, and high potential returns — but without clear risk management, you’ll burn through your account in no time.

### **What Is “Risk” in Trading?**

Risk isn’t a feeling — it’s a number. It’s the **maximum amount you’re willing to lose on a trade**, and you define it *before* you enter.

### **Three Types of Risk You Must Control**

**1\. Trade-Level Risk**  
 How much are you risking on this specific trade?

**Example:**

* Entry: $10.00  
* Stop-loss: $9.80  
* Position size: 50 APT  
   → Risk \= 50 × $0.20 \= **$10**

That’s your per-trade risk.

**2\. Account-Level Risk**  
 How much of your total balance are you risking?

**Example:**

* Account: $1,000  
* Risk on trade: $100 → That’s 10% of your account (too much)

Most serious traders keep it at **1–3% per trade**, so they survive a losing streak and stay in the game.

**3\. Risk-to-Reward Ratio (R:R)**  
 Is the trade even worth taking?

**Example:**

* Risk: $50  
* Potential profit: $150 → R:R \= **1:3** (Good)  
* Risk: $50  
* Profit: $30 → R:R \= **1:0.6** (Bad)

Even a high win rate won’t help if your R:R is upside down.

### **Bottom Line**

You don’t size positions based on gut feeling. You calculate risk, define it, and stick to it. That’s trading.

## **Stop Loss & Take Profit: Your Essential Exits**

**Or: How to leave trades without second-guessing yourself**

Entries matter. But exits — planned, precise exits — are what protect and compound your capital.

### **Stop-Loss (SL): Your Defense**

A stop-loss is a price level that says: **“If it hits here, I was wrong. I’m out.”**

Why it matters:

* Caps your loss  
* Forces discipline  
* Prevents emotional exits

No SL? You’re gambling, not trading.

### **Take-Profit (TP): Your Target**

A TP is your profit exit — set in advance. It keeps you from:

* Taking profits too early  
* Holding too long and turning green trades red  
* Improvising

A good TP locks in reward with no drama.

### **Example Trade Setup**

* Entry: $10.00  
* Stop-loss: $9.85 (risk \= $0.15)  
* Take-profit: $10.40 (reward \= $0.40)  
   → Risk-to-reward ≈ **1:2.66**

Set it all **before** the trade. That’s how you remove emotion from execution.

## **Margin & Liquidation: Understanding Your Real Risk**

**Or: What actually happens when you ignore leverage math**

You’ve seen margin before. Now we look at it through a risk lens.

### **What’s Margin?**

It’s your **collateral**. The portion of your capital backing the trade.  
 At 10× leverage:

* Position size: $1,000  
* Margin: $100 (your funds)  
* Borrowed: $900

If things go wrong, you lose **your** $100 — not the borrowed amount.

### **What’s Liquidation?**

Liquidation happens when your margin gets too thin. The platform force-closes your trade to prevent further loss.

It happens when:

* Price moves hard against you  
* You don’t use a stop-loss  
* You risk too much

It’s not random. It’s math — and it’s avoidable.

### **Example: Stop-Loss vs. Liquidation**

You long APT at $10.00, 10× leverage.  
 Your margin: $100.

* Price drops to $9.00 → You’re liquidated. Loss: $100  
* Price drops to $9.85 and you had a stop-loss? → Small loss: $15. No liquidation.

That’s the difference between controlled risk and total wipeout.

## **Funding Rates: The Hidden Fee**

**Or: Why your profits shrink even when you’re right**

Funding is a recurring payment between traders to keep perp prices aligned with spot.

* If **perp \> spot** → longs pay shorts  
* If **perp \< spot** → shorts pay longs

### **Why It Matters**

Funding **eats into your PnL**, especially with leverage.

**Example:**

* You’re long APT  
* 20× leverage  
* $5,000 position  
* Funding \= 0.01% per 8 hours

→ \~$1.50 per day  
 → $10+ per week — gone

### **Always Know the Rate**

Before you hold a leveraged trade overnight, **check funding**. It could be the silent drain that kills your profit over time.

## **Module 3: Key Checklist**

* Define your **risk per trade** before you enter  
* Always use a **stop-loss** and **take-profit**  
* Know where liquidation happens — and avoid it  
* Track **funding costs** and factor them into your PnL

**Next up → Module 4: Technical Analysis Basics**  
 Because great trades aren’t guesses — they’re built on logic, structure, and levels.

Ready? Let’s chart it out.
`;

// Module 4: Technical Analysis Basics
const module4Content = `
### **📘 Module 4: Technical Analysis Basics**

**— Candlestick Charts 101**

**— Common Patterns**

**— Support & Resistance and Indicators**

**— Trading Psychology**

# **Module 4: Technical Analysis Basics**

***Or: Real tools for smarter trading — no fluff, just clarity***

**Reading Candlestick Charts**

**Or: How traders see price, momentum, and psychology in one little picture**

Charts don’t predict the future. They just tell a story — in real time, through price. In crypto, candlestick charts are the most used format. And if you can read them, you’ll start to see:

* Who’s in control — buyers or sellers  
* Whether momentum is building or fading  
* How confident, uncertain, or chaotic the market is

Each candle shows 4 prices over a set time period (1m, 1h, 1d — your choice):

* **Open** — where the price started  
* **Close** — where it ended  
* **High/Low** — the extremes in that period

The shape of the candle tells you what happened:

* Green body → buyers won  
* Red body → sellers won  
* Long wick on top → sellers pushed back  
* Long wick on bottom → buyers defended the low

But one candle alone means nothing. Context is everything.

### **Example**

BTC trades at $30,000. You see three small red candles… then a big green candle breaks higher. → Buyers just punched back. That could be a long setup.

### **Candlestick Signals Worth Knowing**

* Long upper wick → bearish pressure  
* Long lower wick → bullish defense  
* Big green body → buyers in control  
* Big red body → sellers in control

## **Candlestick & Chart Patterns**

**Or: Ignore 90% of Twitter — these patterns actually matter**

You don’t need to memorize 50 patterns. You need 5 that actually show up — and work.

### **Candlestick Patterns**

**Engulfing Pattern**

* Bullish: big green candle fully engulfs red  
* Bearish: big red candle swallows green  
   → Strong reversal signal

**Doji**

* Tiny body  
* Means indecision  
* Often appears after a trend → potential pause or reversal

### **Chart Patterns**

**Double Top / Bottom**

* Price hits the same level twice and fails  
* Double top \= bearish  
* Double bottom \= bullish

**Breakout & Retest**

* Price breaks resistance, then comes back to test it  
* If it holds → continuation  
* If it fails → fakeout

### **Pattern Trap**

New traders see patterns *everywhere*. Don’t. Structure and context matter more than imagination.

## **Reading Structure: Support, Resistance & Indicators**

**Or: Price tells the story — indicators confirm it**

### **Support & Resistance: The Backbone of Every Chart**

Support is where **buyers step in**. Resistance is where **sellers push back**.

These aren’t random lines. They’re memory zones. Markets don’t forget key levels — and neither should you.

**Support \= floor**  
 Price bounces up from this level

**Resistance \= ceiling**  
 Price gets rejected from this level

### **Key Rule: Support ↔ Resistance Flip**

* If support breaks → it becomes resistance  
* If resistance breaks → it often flips to support

**Example:**  
 APT rejects at $10 → it’s resistance.  
 Breaks above, pulls back to $10 — and holds → $10 becomes support.

Structure like this gives your trades a map. Everything else is just confirmation.

### **Indicators: Confirmation, Not Commands**

Indicators don’t predict anything. They help you **read the market's strength** — if used right.

#### **RSI (Relative Strength Index)**

* Above 70 \= overbought  
* Below 30 \= oversold  
* **Best use:** divergence  
   → Price makes new high, RSI doesn’t \= trend weakening

#### **Moving Averages (MA)**

* Show the **trend**  
* Act as **dynamic support/resistance**

→ Price above 50 or 200 MA \= trend is strong  
 → Price often bounces off MAs during healthy moves

#### **MACD**

* Measures **momentum shifts** using moving averages  
* MACD crosses above signal → bullish  
* MACD crosses below → bearish

Great for **confirmation** — not for entries alone.

### **Don’t Use Indicators Like This**

* Don’t long just because RSI says “oversold”  
* Don’t short just because MACD crosses once  
* Don’t forget the structure

Use indicators to **validate** what the chart already shows — not to replace your thinking.

**Next: Part 4 — Trading Psychology**  
 Because none of this matters if your brain bails on you mid-trade.

## **Trading Psychology**

**Or: Why you panic-close the best setups**

You can have perfect TA. It won’t matter if your emotions hijack the trade.

Here’s what usually ruins it:

* Exiting early before TP hits  
* Doubling down after a loss  
* FOMOing into random candles  
* Ignoring your stop “just this once”

### **Three Mental Rules That Save You**

1. **Discipline over Emotion**  
    Stick to your plan — especially when it’s hardest.  
2. **Accept Losses**  
    Losses don’t make you a bad trader. Breaking your plan does.  
3. **Kill the Jackpot Fantasy**  
    You’re not here for one lucky win. You’re here to last.

### **How to Build Discipline**

* Write a plan before entering  
* Take breaks — no revenge trades  
* Review both wins and mistakes  
* Track not just price — but **your mindset**

## **Final Checklist: Technical Analysis Foundation**

* Read candlestick charts in context  
* Recognize effective chart and candle patterns  
* Use support and resistance for structure  
* Apply RSI, MA, and MACD to confirm, not decide  
* Stay emotionally consistent and structured

## **End of Module 4: Technical Analysis Basics**

**Course Complete — You Made It**

That’s your full foundation. You’re not guessing anymore. You’re trading with structure, logic, and real tools.

### **What’s Next?**

→ **Practice**  
 Theory is nice. Execution is everything.  
 Go place testnet trades. Review them. Make small mistakes. Learn.

→ **Refine Your Edge**  
 Keep a journal. Study your best trades. Study your worst trades.  
 The winners usually look the same. So do the losers.

### **Final Note**

This isn’t just a tutorial. It’s a toolkit smart traders use to survive, adapt, and win — even in chaotic markets.

Whether you’re scalping, hedging, or learning to stay in the game — you now have a framework.

Let’s make sure your first real trade doesn’t feel like your first.

See you on the charts.
`;

// Export category data
export const perpsCategory: Category = {
  id: "perps",
  label: "Perpetual Futures",
  slug: "perps",
  position: 2,
  description:`
  ## **Overview**

**Perpetual Futures Essentials** is a course for anyone who’s looked at a leverage slider, hovered over “Open Long,” and thought: *“Wait… how does this actually work?”*

This course is not about predicting the market. It’s about understanding the tools — and how to not blow up your account while learning to use them.

We’ll walk through the basics of perpetual futures: what they are, how they differ from spot, and why traders use them. You’ll learn how to take long and short positions, manage leverage and margin, set stop-losses and take-profit, and understand liquidation before it happens. We’ll explain funding rates, execution quality, and what really matters when you’re placing trades — not after.

It’s all tied to real usage on **Kana Perps**, so you’re not just reading theory — you’re learning how to trade in practice, with real buttons and real decisions.

No promises. No screenshots of 400% wins. Just a clear framework to help you trade smarter, last longer, and avoid the traps that take most people out early.

## **What You Will Learn**

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

`,
  pages: [
    {
      id: "perps-essentials",
      title: "Perpetual Futures Essentials",
      slug: "/perps/essentials",
      sidebar_label: "Perps Essentials",
      sidebar_position: 1,
      content: module1Content,
    },
    {
      id: "executing-trades",
      title: "Executing Trades on Kana Perps",
      slug: "/perps/executing-trades",
      sidebar_label: "Executing Trades",
      sidebar_position: 2,
      content: module2Content,
    },
    {
      id: "risk-management",
      title: "Risk Management Essentials",
      slug: "/perps/risk-management",
      sidebar_label: "Risk Management",
      sidebar_position: 3,
      content: module3Content,
    },
    {
      id: "technical-analysis",
      title: "Technical Analysis Basics",
      slug: "/perps/technical-analysis",
      sidebar_label: "Technical Analysis",
      sidebar_position: 4,
      content: module4Content,
    },
  ],
};
