import { Category } from "@/types";



const connectingwallet = `# **Connecting Your Wallet & Enabling One-Click Trading**

### **Why Enable One-Click Trading?**

Usually, DeFi requires users to manually sign each transaction, causing delays and frustration. Kana Perps simplifies this process with one-click trading across all wallets. 

### **Step-by-Step Walkthrough:**

* Open <a href="https://www.kana.trade/" target="_blank" rel="" className="text-primary">Kana Perps <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mb-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>  <br>

  <img src="/images/content/perps2.png" alt="Open Kana Perps" /> <br>

* Click on **Connect Wallet** and choose your wallet (Petra or Nightly).

  <img src="/images/content/perps3.png" alt="Connect Wallet" />  <br>

* Click **Enable Trading** → **Sign Trading**.  

  <img src="/images/content/perps4.png" alt="Enable Trading" /> <br>

  <img src="/images/content/perps5.png" alt="Sign Trading" />  <br>

* **Confirm the prompt from your wallet to activate one-click trading.**  

  <img src="/images/content/perps6.png" alt="Confirm Prompt" /> <br>
`;

const deposit = `# **Deposit or Withdraw USDT Between Your Wallet and Trading Account**

To start trading, you need to move USDT from your wallet into your Kana Perps trading account.
<br>


>If you don’t have USDT yet, you can visit <a href="https://app.kanalabs.io/swap">Kana Swap</a> and get it.

<br>


**1\. Click “Deposit” in the top right**
  In the top-right corner of the interface, you’ll see your wallet address and a green Deposit button. Click it to open the fund transfer window.

  <img src="/images/content/perps7.png" alt="Click Deposit" /> <br>

**2\. Deposit USDT into Your Trading Account**  
  Make sure the direction is correct: **From: Your Wallet → To: Trading Account**. If it’s reversed, click the ↕ icon to switch. Then enter the amount you want to deposit manually or use the quick buttons (25%, 50%, 75%, Max). Once everything looks good, click the green **Deposit** button to confirm. Your funds will be moved instantly.

  <img src="/images/content/perps8.png" alt="Deposit USDT" /> <br>

**3\. Confirm your new balance**  
  After depositing, your Trading Account balance will update in the top-right corner.  
  You’re now ready to open your first position.

  <img src="/images/content/perps9.png" alt="Confirm Balance" /> <br>

**To Withdraw Funds (Trading Account → Wallet)**

1. Click the **arrow icon** next to your trading balance at the top right.  
 
<img src="/images/content/perps10.png" alt="Click Withdraw" /> <br>

2. In the popup, confirm the direction is set to “From: Trading Account → To: Your Wallet.” If it’s reversed, click the ↕ icon to switch. Enter the amount you want to withdraw manually or use the quick buttons (25%, 50%, 75%, Max), then click the green Withdraw button. Your funds will be transferred instantly.  
 
<img src="/images/content/perps11.png" alt="Withdraw Funds" /> <br>
`;

const trade = `
# **Trade Basics**

Kana Perps lets you trade with leverage in both directions — **Long** (if you expect the price to rise) or **Short** (if you expect it to fall).

You can choose between **Market orders** (instant execution at current price) and **Limit orders** (execute only at your chosen price).

Leverage goes up to **20x**. For example:  
 **100 USDT trade at 20x \= 5 USDT required margin.**  
 Higher leverage lowers the upfront margin — but increases the risk of liquidation.

All positions on Kana Perps use **Isolated Margin** — meaning each trade has its own risk. If one gets liquidated, your others stay untouched.

## **Quick Links:**

- [How to Open a Market Trade](/perps/opening-trades#placing-a-market-trade-order)
- [How to Place Limit Orders](/perps/opening-trades#placing-a-limit-long-order)
- [How to Close Positions (Partial & Full)](/perps/managing-trades#closing-a-trade-partial--full)
- [Adding More Margin](/perps/managing-trades#adding-margin-to-an-open-position)
`;
const opentrade = `
# **Placing Market & Limit Order**
## **Opening a Market Trade Order**

**Step 1: Select Asset & Trade Type**

Go to the Order Placement section. By default, Market order is selected. Choose the asset you want to trade and set your preferred leverage using the slider — from 1x to 20x.  

<img src="/images/content/perps12.png" alt="Select Asset and Trade Type" /> <br>

**Step 2: Enter Order Value**

Type in the amount you want to trade, either in USDT or in the asset token. As you enter the value, the platform will show your estimated liquidation price, required margin, and slippage.  

<img src="/images/content/perps13.png" alt="Enter Order Value" /> <br>

**Step 3: Place Market Order**

Click **Long** if you expect the price to rise, or **Short** if you expect it to fall. The order will execute instantly at the current market price, and your new position will appear in the **Positions** tab below.

<img src="/images/content/perps14.png" alt="Place Market Order" /> <br>

## **Opening a Limit Long Order**

**Limit orders** let you open positions at a specific, pre-defined price, different from the current market.

**Step 1: Select Limit Order and Set Entry Price**  
In the Order Placement section, select **Limit**. Enter the price at which you want the order to execute — typically below the market price for Long, or above for Short.

<img src="/images/content/perps15.png" alt="Select Limit Order" /> <br>

**Step 2: Enter Order Size**  
Type in the amount you want to trade, either in USDT or in the asset token. As you enter the value, the platform will show your estimated liquidation price, required margin, and slippage.

<img src="/images/content/perps16.png" alt="Enter Order Size" /> <br>

**Step 3: Place Limit Order**  
Click **Long** or **Short** to place your order. It will appear in the **Open Orders** tab and remain there until the market reaches your target price. Once filled, it will move to the **Positions** tab.  

<img src="/images/content/perps17.png" alt="Place Limit Order" /> <br>
`;
const closetrade = `

# **Closing a Trade (Partial & Full)**

**Fully Close a Position**  
Go to the **Positions** tab and find the trade you want to close. Click **Quick Close** to close the entire position at market price.

<img src="/images/content/perps18.png" alt="Close Position" /><br>

**Partially Close at Market Price**  
Select the position, choose **Market**, enter the amount you want to close, and click **Confirm**. The reduced position size will update automatically.

<img src="/images/content/perps19.png" alt="Partially Close Market" /><br>

**Partially Close at a Specific Price (Limit)**  
Select the position, switch to **Limit**, and enter your desired exit price and amount. Click **Confirm** to place the closing order. It will appear under **Open Orders** and execute when the price is reached.

<img src="/images/content/perps20.png" alt="Partially Close Limit" /><br>

Once closed, the trade will move to **Order History**.

<img src="/images/content/perps21.png" alt="Order History" /><br>
`;
const margin = `
# **Adding Margin to an Open Position**

Kana Perps uses **isolated margin**. Each trade requires fixed collateral, preventing total balance liquidation. Monitor your positions and add margin when needed.

**Step 1: Select Position**  
 Go to the **Positions** tab and click the **pencil icon** next to the trade you want to add margin to.

<img src="/images/content/perps22.png" alt="Select Position" /><br>

**Step 2: Enter Additional Margin**  
 Type the amount you want to add — it must be **less than your current margin**.  
 Click **Update** to confirm.  The new margin value will be reflected in your **Positions** tab immediately.  

 <img src="/images/content/perps23.png" alt="Add Margin" /><br>
`;
const tpsl = `
# **Setting TP/SL (Take Profit/Stop Loss)**

**Method 1: Set TP/SL While Opening a Trade**  
 Before placing your order, check the **TP/SL** box in the Order Placement section. Enter your desired take profit and stop loss prices. As you adjust the values, the platform will show your estimated gains and losses in real time. Once ready, place your Long or Short order as usual — your TP/SL will be set automatically.

<img src="/images/content/perps24.png" alt="Set TPSL" /><br>

**Method 2: Add or Modify TP/SL After Opening a Trade**  
Go to the **Positions** tab and click the **edit icon** next to the TP/SL section of your open trade. Enter your target values and click **Confirm**. Your updated TP/SL will be applied immediately and shown in the same tab.

<img src="/images/content/perps25.png" alt="Modify TPSL" /><br>

<img src="/images/content/perps26.png" alt="TPSL Confirmation" /><br>

**Opening a Dual Position (Hedge Mode)**

Kana Perps uses **hedge mode by default**, allowing you to hold both Long and Short positions on the same asset simultaneously. This helps manage volatility, hedge risk, or react to sudden news without closing trades or moving funds.

**Step 1: Select Asset**  
Go to the Order Placement section and choose the asset you want to hedge.

**Step 2: Open a Long and Short Position**  
Set your desired leverage and trade amount. First, open a **Long** position — then immediately open a **Short** on the same asset (or vice versa).

**Step 3: Manage Positions Separately**  
Both trades will appear independently in the **Positions** tab. They can be adjusted, partially closed, or fully closed one at a time.

`;
const swap = `

# **Walkthrough: Swapping APT → USDC on Kana Labs**

Swapping tokens is one of the most basic and essential actions in DeFi. Kana Labs makes it fast, cheap, and easy — especially on Aptos. Here’s a simple walkthrough to guide you through your first swap.

**What You’ll Do:**  
 You’ll swap your APT tokens for USDC (a stablecoin) using Kana Labs’ DEX Aggregator, which finds the best rate across multiple sources automatically.

## **Step-by-Step Walkthrough:**

**Step 1: Connect Your Wallet**  
 Open Kana Labs and click "Connect Wallet."  
 Select your preferred wallet (Petra, Nightly, etc.) and make sure you’re connected to the correct network (Aptos Mainnet or Testnet).

**Step 2: Select Swap Pair**  
 In the Swap section, select **APT** as the token you’re selling, and **USDC** as the token you want to receive.

**Step 3: Enter Swap Amount**  
 Type in how much APT you want to swap.  
 You’ll see the estimated amount of USDC you’ll get, including the live exchange rate.

**Step 4: Review Rate and Gas Fee**  
 Kana automatically pulls the best available rate across DEXs.  
 Check the slippage, expected output, and estimated gas fee before proceeding.

**Step 5: Execute Swap**  
 Click **"Swap"**, then confirm the transaction in your wallet popup.

**Step 6: Done\!**  
 Your USDC will arrive in your wallet within seconds.  
 You can check your updated balance immediately.

## **Tip:**

Want to swap back?  
 Simply reverse the direction (USDC → APT) and follow the same steps.
`;

// Export category data
export const perpsCategory: Category = {
  id: "perps",
  label: "Kana Perps Walkthroughs",
  slug: "perps",
  position: 2,
  description:`
Learning by doing is the fastest way to get comfortable. That’s why we’ve prepared step-by-step walkthroughs for every major action you’ll need. Whenever you’re unsure, just check the guide and keep moving forward — everything’s laid out clearly and simply.
`,isNew: true,
  pages: [
    {
      id: "connecting-wallet",
      title: "Connecting Your Wallet",
      slug: "/perps/connecting-wallet",
      sidebar_label: "Connecting Wallet",
      sidebar_position: 2,
      content: connectingwallet,
    },
    {
      id: "deposit-withdraw",
      title: "Deposit & Withdraw",
      slug: "/perps/deposit-withdraw",
      sidebar_label: "Deposit & Withdraw",
      sidebar_position: 3,
      content: deposit,
    },
    {
      id: "trade-basics",
      title: "Trade Basics",
      slug: "/perps/trade-basics",
      sidebar_label: "Trade Basics",
      sidebar_position: 4,
      content: trade,
    },
    {
      id: "opening-trades",
      title: "Opening Trades",
      slug: "/perps/opening-trades",
      sidebar_label: "Opening Trades",
      sidebar_position: 5,
      content: opentrade,
    },
    {
      id: "closing-trades",
      title: "Closing Trades",
      slug: "/perps/closing-trades",
      sidebar_label: "Closing Trades",
      sidebar_position: 6,
      content: closetrade,
    },
    {
      id: "margin",
      title: "Adding Margin",
      slug: "/perps/margin",
      sidebar_label: "Adding Margin",
      sidebar_position: 7,
      content: margin,
    },
    {
      id: "tpsl",
      title: "TP/SL",
      slug: "/perps/tpsl",
      sidebar_label: "TP/SL",
      sidebar_position: 8,
      content: tpsl,
    },
    {
      id: "token-swaps",
      title: "Token Swaps",
      slug: "/perps/token-swaps",
      sidebar_label: "Token Swaps",
      sidebar_position: 0,
      content: swap,
    }
  ],
};
