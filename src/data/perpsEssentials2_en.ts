// Market vs. Limit Orders
const marketVsLimitContent = `## Market vs. Limit Orders
![Executing Perps Trades](/images/perps-essentials/executing-perps-trades-english.png)
*Or: Do you want it now — or at your price?*

Before you can manage trades properly, you need to understand the basics: market and limit orders.

### Market Orders — Speed First
A market order says: *"I want it right now — give me the best available price."*

**Use it when:**
* You're reacting to news or a breakout
* You're trading highly liquid assets (BTC, ETH)
* Speed matters more than exact pricing

**The downside:** slippage (we'll explain this just below).  
If the asset has low liquidity or you're using high leverage, your entry may be worse than expected.

Let's break it down with a simple example of market order slippage.

**Example: Market Order Slippage (APT around $10)**  
4 APT filled @ $10.01  
3 APT @ $10.03  
3 APT @ $10.05

→ **Average = $10.03 instead of $10.00**  
On 10× leverage, you're already down 3% before the trade even moves.

### Limit Orders — Control First
A limit order says: *"Only fill my order at this price or better."*

**Use it when:**
* You know your ideal entry
* You want to avoid slippage
* You're okay waiting for the market to come to you

**The downside:**  
If the price doesn't reach your limit, the trade never happens.

### Slippage — The Hidden Cost
Slippage is the difference between your expected price and the actual fill. On Kana Perps, always preview slippage before confirming your trade — especially with leverage. It matters.

![Kana Perps Slippage](/images/perps-essentials/slippage-english.png)

### Comparison: Market vs. Limit 
| Order Type | Speed | Price Control | Risk |
| ----- | ----- | ----- | ----- |
| Market | Instant | Low | Slippage |
| Limit | Delayed | High | May not fill |

**Want to see exactly how to place Market and Limit orders on Kana Perps?**  
[Step-by-Step Walkthrough: Placing Market and Limit Orders](/kanaperps/opening-trades)

### Execution Quality & Liquidity
Execution quality is the gap between your intended price and what actually gets filled.

Liquidity is how easily your order gets filled without distortion.  
Low liquidity means:
* More slippage
* Worse fills
* Unpredictable execution

**Let's walk through a real example of how leverage multiplies the impact of poor execution.**

**Example: Leverage Multiplies Impact**  
You buy at $10.00, but get filled at $10.07. 

That's 0.7% slippage. With 10× leverage, you're instantly down 7%.

### Execution Tips
* Use market orders only for liquid pairs  
* Use limit orders for volatile or low-liquidity assets  
* Always preview slippage on Kana Perps — especially when using leverage  
* Be extra careful with large order sizes — big trades move the market more than you think
`;

// Opening a Position
const openingPositionContent = `## Opening a Position

Good entries are only half the game. Let's learn how to plan smart exits too.

## Structuring Your Trades (Entries & Exits)
*Or: Trading isn't just about clicking "Buy"*

Beginners obsess over entries. Experienced traders know exits matter just as much.

### Planning Your Entry
Before you hit "Buy", define:
* Entry price — your ideal start
* Stop-loss (SL) — where your idea fails
* Take-profit (TP) — where you exit with gains
* Invalidation — when the setup no longer makes sense (for example: if key support breaks, or unexpected news changes the market context)

*"Let's see what happens"* is not a strategy. *"Entry $10.05, SL $9.85, TP $10.50"* — that's a plan.

### Planning Your Exit
You exit when:
* TP hits (target achieved)
* SL hits (risk managed)
* Setup is invalidated (news, structure)
* Trade stalls too long (time-based exit)

**Let's walk through a quick example of structured execution.**

**Example: Structured Execution**  
Entry: Limit order at $9.80  
Stop-loss: $9.60  
Take-profit: $10.40

This gives you a clean 1:3 risk/reward.  
Price dips, fills, hits TP — no improvisation required.

### The Fastest Way to Lose Money (Seriously — read this one.)
*If you only read one section in this module — make it this one.*

If the price jumps past your planned entry, don't chase. Stay disciplined, reanalyze, and wait for a new opportunity.

**Why do so many traders make this mistake?**
Because it plays on your emotions. You see a fast move → you feel like you're missing out → your brain screams: *"If I don't get in now, I'll miss the money."*

It's greed — and it's one of the most expensive emotions in trading.

Here's what actually happens when you chase:
* You enter late — after the best part of the move is gone
* The price is stretched — high risk of a pullback
* You're buying from pros who are already exiting
* Your stop is worse — you're risking more than you planned
* Your risk/reward is now broken — small potential upside, large downside

But in the moment, it doesn't feel like that. It feels like: *"I'm about to catch a huge winner."* In your head, it's already: fast cars, new gadgets, that trip you've always wanted — all flashing before your eyes.

That's the trap. And it's why so many traders blow up on moves they should've just let go.

**What smart traders know:** markets always give another opportunity. If a move is real and strong, you'll often get a clean pullback to enter. If not — chasing only leads to bad trades.

Remember: *"Missed money is better than lost money."*

Good trades are planned. If the plan is gone — so is the trade.
`;

// Closing a Trade
const closingTradeContent = `## Closing a Trade & Managing Positions

Getting in is easy — staying safe after entry is what really matters.

## Managing Positions (TP, SL & Margin)
*Or: Staying safe after you enter your trade*

Setting TP (Take-Profit) and SL (Stop-Loss) is how you manage risk automatically. Once you're in a trade, the next job is protecting it.

**Why does this matter?**
Because most traders lose money *after* they enter a trade — not before. It's easy to feel in control when you're setting up a perfect plan on the chart. It's much harder to stay in control once real money is on the line and the market starts moving.

And that's exactly where most beginners fail:
* They move their stop-loss "just a little lower — it won't hurt"
* They add margin to a losing position, hoping it will turn around
* They refuse to close when the plan is invalidated — because "it might come back"

The result? Small mistakes compound fast — and a trade that should have been a small loss turns into a disaster.

**Managing your positions is not optional.** It's what separates serious traders from gamblers. If you treat a live trade like a lottery ticket, the market will take your money — every time.

**Your goal:** protect your capital first — and your profits second.

**That's where the right platform helps.**  
Kana Perps is designed to give you more control — and more protection — when managing your trades.

It uses isolated margin, meaning:
* Each position has its own risk  
* One bad trade won't drain your whole account

You can manually add margin anytime from your "Positions" tab. Adding margin gives your trade more breathing room — but it also increases your risk. Do it only when it fits your plan.

![Add Margin](/images/perps-essentials/add-margin-english.png)

Stay proactive. Don't just set and forget.

Let's see a quick example of managing a position properly.

**Example: Managing Margin & TP/SL**
Emma opens a 5× long on ETH at $3,000.  
She sets:
* TP at $3,200 — target for taking profit  
* SL at $2,940 — controlled risk  
* Starts with $300 margin.

Price moves against her and approaches $2,950. Instead of panicking or adding more margin blindly, she follows her plan. If SL hits — it hits. No emotional decisions.

In this case, price rebounds and moves toward TP — but Emma never changes her SL or chases margin just to "stay in the trade."

**Takeaway?** 
Good position management isn't about "saving bad trades." It's about protecting good ones — and knowing when to let go.

**Want to see how to set TP/SL and manage margin on Kana Perps?**  
[Step-by-Step Walkthrough: Setting TP/SL and Managing Margin](/kanaperps/tpsl)
`;


// Hedge Mode & Dual Positions
const hedgeModeContent = `## Hedge Mode & Dual Positions

*Or: Trading both sides at once — Kana's unique edge*

**What is a hedge?**
A hedge is a temporary protection. You open a second trade — usually in the opposite direction — to protect your main position from a possible short-term move against you.

In other words: *you think your main trade is still good — but you don't want to take the full hit if the market wobbles first.*

**What is a Dual Position?**
A Dual Position is when you hold both a Long and a Short on the same asset — at the same time. That's exactly what Hedge Mode on Kana allows you to do.

In normal trading mode, opening a new trade in the opposite direction would simply close your existing position. In Hedge Mode, Dual Positions let you manage both sides of the market independently:
* One side can protect your core trade  
* The other side can give you flexibility to react to short-term price moves.

**Simple example:**  
You're Long ETH at $3,000. It's now at $3,240 — you still believe ETH will go higher.  
But big news is coming — and if the price drops first, you don't want to lose your gains.

So you open a Short as a hedge → you now have a Dual Position: one Long, one Short.

If the price dumps → the Short offsets your losses on the Long. If the price pumps → you close the Short and keep riding the Long.

That's hedging — and that's how Dual Positions give you more control.

**Hedge Mode on Kana Perps**
Normally, platforms don't let you hold a Long and a Short at the same time on one pair — they cancel each other out. Kana Perps is different. With Hedge Mode, you can open a Long and a Short independently on the same asset — and manage them separately.

**Why this matters:**
* You can protect your open trades during volatility  
* You can stay in the market while locking in profits  
* You can manage both long-term and short-term views on the same asset  
* You don't have to close your main position just because short-term risk appears  
* You avoid jumping between accounts or moving funds — everything is in one place

**When do traders use it?**
* You're in a Long — but big news is about to hit. You want to hedge short-term risk.  
* You're in a Short — but the market is oversold. You want to hedge in case of a bounce.  
* You want to hold a core position — but also trade short-term swings in the opposite direction.  
* You want to stay exposed to both directions when the market is choppy.

**One simple example**
You're Long ETH from $3,000. ETH is now at $3,240 — but CPI numbers come out tomorrow.

You don't want to close the Long — your idea is still valid. But you don't want to risk losing your gains if ETH dumps first. → You open a Short in Hedge Mode.

Now:
* If ETH dumps → your Short protects your Long.  
* If ETH pumps → you close the Short at a small loss and let the Long run.

You didn't have to close and reopen your main position. You didn't lose your good entry on the Long. You stayed protected while keeping full flexibility.

**Bottom line**
Hedging is not about making more money — it's about protecting the money you already made.

Hedge Mode on Kana Perps makes it simple: You can manage trades smarter — not just bigger.

**And don't be afraid to use it.**
Hedge Mode and Dual Positions are some of the most practical tools a trader can have. This isn't about "doubling down" — it's about giving yourself tools to manage risk better. They are not "pro-only" features — they're there to help you manage risk better, even in basic situations. The more you trade, the more you'll see: flexibility is edge — and Hedge Mode gives you that edge.

**Curious how to open a Dual Position in practice?**  
[Step-by-Step Walkthrough: Opening Dual Positions (Hedge Mode)](/perps/dual-position?_self)
`;

const dualPosition = `
## Opening a Dual Position (Hedge Mode)
![Place Orders Dual Positions](/images/perps-walkthrough/place-limit-order-english.png)
Kana Perps uses hedge mode by default, allowing you to hold both <span class="green-text">Long</span> and <span class="red-text">Short</span> positions on the same asset simultaneously. This helps manage volatility, hedge risk, or react to sudden news without closing trades or moving funds. Both trades will appear independently in the Positions tab. They can be adjusted, partially closed, or fully closed one at a time.
`;

export const perpsEssentials2Pages = [
  {
    id: "module-2", //divider
    title: "Module - 2",
    sidebar_label: "Module 2: Executing trades",
    sidebar_position: 6,
    slug:"",
    content:"",
  },
  {
    id: "market-vs-limit",
    title: "Market vs. Limit Orders",
    slug: "/perps/market-vs-limit",
    sidebar_label: "Market vs. Limit",
    sidebar_position: 7,
    content: marketVsLimitContent,
  },
  {
    id: "opening-position",
    title: "Opening a Position",
    slug: "/perps/opening-position",
    sidebar_label: "Opening a Position",
    sidebar_position: 8,
    content: openingPositionContent,
  },
  {
    id: "closing-trade",
    title: "Closing a Trade",
    slug: "/perps/closing-trade",
    sidebar_label: "Closing a Trade",
    sidebar_position: 9,
    content: closingTradeContent,
  },
  {
    id: "hedge-mode",
    title: "Hedge Mode & Dual Positions",
    slug: "/perps/hedge-mode",
    sidebar_label: "Hedge Mode & Dual Positions",
    sidebar_position: 10,
    content: hedgeModeContent,
  },
  {
    id: "dual-position",
    title: "Dual Positions",
    slug: "/perps/dual-position",
    sidebar_label: "Dual Positions in practice",
    sidebar_position: 0,
    content: dualPosition,
  },
];