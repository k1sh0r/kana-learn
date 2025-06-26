import { Category } from "@/types";
// Kana Perps Walkthroughs
const connectingwallet = `russian
`;

const deposit = `# **Deposit or Withdraw USDT Between Your Wallet and Trading Account**

To start trading, you need to move USDT from your wallet into your Kana Perps trading account.

>If you don't have USDT yet, you can visit <a href="https://app.kanalabs.io/swap">Kana Swap</a> and get it.

**1\. Click "Deposit" in the top right**
  In the top-right corner of the interface, you'll see your wallet address and a green Deposit button. Click it to open the fund transfer window.

  ![Click Deposit](/images/perps-walkthrough/click-deposit-english.png) <br>

**2\. Deposit USDT into Your Trading Account**  
  Make sure the direction is correct: **From: Your Wallet → To: Trading Account**. If it's reversed, click the ↕ icon to switch. Then enter the amount you want to deposit manually or use the quick buttons (25%, 50%, 75%, Max). Once everything looks good, click the green **Deposit** button to confirm. Your funds will be moved instantly.

  ![Deposit USDT](/images/perps-walkthrough/deposit-usdt-english.png) <br>

**3\. Confirm your new balance**  
  After depositing, your Trading Account balance will update in the top-right corner.  
  You're now ready to open your first position.

  ![Confirm Balance](/images/perps-walkthrough/confirm-balance-english.png) <br>

**To Withdraw Funds (Trading Account → Wallet)**

1. Click the **arrow icon** next to your trading balance at the top right.  

![Click Withdraw](/images/perps-walkthrough/click-withdraw-english.png) <br>

2. In the popup, confirm the direction is set to "From: Trading Account → To: Your Wallet." If it's reversed, click the ↕ icon to switch. Enter the amount you want to withdraw manually or use the quick buttons (25%, 50%, 75%, Max), then click the green Withdraw button. Your funds will be transferred instantly.  

![Withdraw Funds](/images/perps-walkthrough/withdraw-funds-english.png) <br>
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

![Select Asset and Trade Type](/images/perps-walkthrough/select-asset-and-trade-type-english.png) <br>

**Step 2: Enter Order Value**

Type in the amount you want to trade, either in USDT or in the asset token. As you enter the value, the platform will show your estimated liquidation price, required margin, and slippage.  

![Enter Order Value](/images/perps-walkthrough/enter-order-value-english.png) <br>

**Step 3: Place Market Order**

Click **Long** if you expect the price to rise, or **Short** if you expect it to fall. The order will execute instantly at the current market price, and your new position will appear in the **Positions** tab below.

![Place Market Order](/images/perps-walkthrough/place-market-order-english.png) <br>

## **Opening a Limit Long Order**

**Limit orders** let you open positions at a specific, pre-defined price, different from the current market.

**Step 1: Select Limit Order and Set Entry Price**  
In the Order Placement section, select **Limit**. Enter the price at which you want the order to execute — typically below the market price for Long, or above for Short.

![Select Limit Order](/images/perps-walkthrough/select-limit-order-english.png) <br>

**Step 2: Enter Order Size**  
Type in the amount you want to trade, either in USDT or in the asset token. As you enter the value, the platform will show your estimated liquidation price, required margin, and slippage.

![Enter Order Size](/images/perps-walkthrough/enter-order-size-english.png) <br>

**Step 3: Place Limit Order**  
Click **Long** or **Short** to place your order. It will appear in the **Open Orders** tab and remain there until the market reaches your target price. Once filled, it will move to the **Positions** tab.  

![Place Limit Order](/images/perps-walkthrough/place-limit-order-english.png) <br>
`;
const closetrade = `

# **Closing a Trade (Partial & Full)**

**Fully Close a Position**  
Go to the **Positions** tab and find the trade you want to close. Click **Quick Close** to close the entire position at market price.

![Close Position](/images/perps-walkthrough/close-position-english.png) <br>

**Partially Close at Market Price**  
Select the position, choose **Market**, enter the amount you want to close, and click **Confirm**. The reduced position size will update automatically.

![Partially Close Market](/images/perps-walkthrough/partially-close-market-english.png) <br>

**Partially Close at a Specific Price (Limit)**  
Select the position, switch to **Limit**, and enter your desired exit price and amount. Click **Confirm** to place the closing order. It will appear under **Open Orders** and execute when the price is reached.

![Partially Close Limit](/images/perps-walkthrough/partially-close-limit-english.png) <br>

Once closed, the trade will move to **Order History**.

![Order History](/images/perps-walkthrough/order-history-english.png) <br>
`;
const margin = `
# **Adding Margin to an Open Position**

Kana Perps uses **isolated margin**. Each trade requires fixed collateral, preventing total balance liquidation. Monitor your positions and add margin when needed.

**Step 1: Select Position**  
 Go to the **Positions** tab and click the **pencil icon** next to the trade you want to add margin to.

![Select Position](/images/perps-walkthrough/select-position-english.png) <br>

**Step 2: Enter Additional Margin**  
 Type the amount you want to add — it must be **less than your current margin**.  
 Click **Update** to confirm.  The new margin value will be reflected in your **Positions** tab immediately.  

 ![Add Margin](/images/perps-walkthrough/add-margin-english.png) <br>
`;
const tpsl = `
# **Setting TP/SL (Take Profit/Stop Loss)**

**Method 1: Set TP/SL While Opening a Trade**  
 Before placing your order, check the **TP/SL** box in the Order Placement section. Enter your desired take profit and stop loss prices. As you adjust the values, the platform will show your estimated gains and losses in real time. Once ready, place your Long or Short order as usual — your TP/SL will be set automatically.

![Set TPSL](/images/perps-walkthrough/set-tpsl-english.png) <br>

**Method 2: Add or Modify TP/SL After Opening a Trade**  
Go to the **Positions** tab and click the **edit icon** next to the TP/SL section of your open trade. Enter your target values and click **Confirm**. Your updated TP/SL will be applied immediately and shown in the same tab.

![Modify TPSL](/images/perps-walkthrough/modify-tpsl-english.png) <br>

![TPSL Confirmation](/images/perps-walkthrough/tpsl-confirmation-english.png) <br>

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

Swapping tokens is one of the most basic and essential actions in DeFi. Kana Labs makes it fast, cheap, and easy — especially on Aptos. Here's a simple walkthrough to guide you through your first swap.

**What You'll Do:**  
 You'll swap your APT tokens for USDC (a stablecoin) using Kana Labs' DEX Aggregator, which finds the best rate across multiple sources automatically.

## **Step-by-Step Walkthrough:**

**Step 1: Connect Your Wallet**  
 Open Kana Labs and click "Connect Wallet."  
 Select your preferred wallet (Petra, Nightly, etc.) and make sure you're connected to the correct network (Aptos Mainnet or Testnet).

**Step 2: Select Swap Pair**  
 In the Swap section, select **APT** as the token you're selling, and **USDC** as the token you want to receive.

**Step 3: Enter Swap Amount**  
 Type in how much APT you want to swap.  
 You'll see the estimated amount of USDC you'll get, including the live exchange rate.

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
  id: "kanaperps",
  label: "Kana Perps Walkthroughs",
  slug: "kanaperps",
  position: 2,
  cardContent: "step-by-step guides showing exactly what to click, how to trade, and how to manage positions on Kana Perps.",
  description:` Learning by doing is the fastest way to get comfortable. That's why we've prepared step-by-step walkthroughs for every major action you'll need. Whenever you're unsure, just check the guide and keep moving forward — everything's laid out clearly and simply.`,
  
  pages: [
    {
      id: "connecting-wallet",
      title: "Connecting Your Wallet",
      slug: "/kanaperps/connecting-wallet",
      sidebar_label: "Connecting Wallet",
      sidebar_position: 2,
      content: connectingwallet,
    },
    {
      id: "deposit-withdraw",
      title: "Deposit & Withdraw",
      slug: "/kanaperps/deposit-withdraw",
      sidebar_label: "Deposit & Withdraw",
      sidebar_position: 3,
      content: deposit,
    },
    {
      id: "trade-basics",
      title: "Trade Basics",
      slug: "/kanaperps/trade-basics",
      sidebar_label: "Trade Basics",
      sidebar_position: 4,
      content: trade,
    },
    {
      id: "opening-trades",
      title: "Opening Trades",
      slug: "/kanaperps/opening-trades",
      sidebar_label: "Opening Trades",
      sidebar_position: 5,
      content: opentrade,
    },
    {
      id: "closing-trades",
      title: "Closing Trades",
      slug: "/kanaperps/closing-trades",
      sidebar_label: "Closing Trades",
      sidebar_position: 6,
      content: closetrade,
    },
    {
      id: "margin",
      title: "Adding Margin",
      slug: "/kanaperps/margin",
      sidebar_label: "Adding Margin",
      sidebar_position: 7,
      content: margin,
    },
    {
      id: "tpsl",
      title: "TP/SL",
      slug: "/kanaperps/tpsl",
      sidebar_label: "TP/SL",
      sidebar_position: 8,
      content: tpsl,
    },
    {
      id: "token-swaps",
      title: "Token Swaps",
      slug: "/kanaperps/token-swaps",
      sidebar_label: "Token Swaps",
      sidebar_position: 0,
      content: swap,
    }
  ],
};
