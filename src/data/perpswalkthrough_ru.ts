import { Category } from "@/types";
// Kana Perps Walkthroughs (Russian)
const connectingwallet = `# **Подключение кошелька и активация One-Click Trading**

### **Зачем включать One-Click Trading?**

Обычно в DeFi ты должен подтверждать каждую транзакцию вручную — это замедляет процесс и раздражает. Kana Perps упрощает всё: один клик — и сделка проходит без лишних подписей.

### **Пошагово:**

* Открой <a href="https://www.kana.trade/" target="_blank" rel="" className="text-primary">Kana Perps <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mb-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>  <br>

  ![Open Kana Perps](/images/perps-walkthrough/open-kana-perps-english.png) <br>

* Нажми **Connect Wallet** и выбери кошелёк (Petra или Nightly).

  ![Connect Wallet](/images/perps-walkthrough/connect-wallet-english.png)  <br>

* Нажми **Enable Trading** → **Sign Trading**.  

  ![Enable Trading](/images/perps-walkthrough/enable-trading-english.png) ![Sign Trading](/images/perps-walkthrough/sign-trading-english.png)  <br>

* **Подтверди действие в кошельке для активации One-Click Trading.**  

  ![Confirm Prompt](/images/perps-walkthrough/confirm-prompt-english.png) <br>
`;

const deposit = `# **Как пополнить или вывести USDT между кошельком и аккаунтом Kana Perps**

Чтобы начать торговать, нужно перевести USDT из кошелька в свой торговый аккаунт на Kana Perps.

>Если у тебя ещё нет USDT — зайди на <a href="https://app.kanalabs.io/swap">Kana Swap</a> и обменяй нужную сумму.

**1. Нажми "Deposit" в правом верхнем углу**
  В правом верхнем углу интерфейса ты увидишь свой адрес кошелька и зелёную кнопку Deposit. Нажми её, чтобы открыть окно перевода средств.

  ![Click Deposit](/images/perps-walkthrough/click-deposit-english.png) <br>

**2. Внеси USDT в торговый аккаунт**  
  Убедись, что направление стоит правильно: **From: Your Wallet → To: Trading Account**. Если указано наоборот — нажми значок ↕, чтобы поменять. Введи нужную сумму вручную или выбери одну из быстрых кнопок: 25%, 50%, 75%, Max. Когда всё готово — нажми зелёную кнопку Deposit, чтобы подтвердить. Средства поступят сразу.

  ![Deposit USDT](/images/perps-walkthrough/deposit-usdt-english.png) <br>

**3. Проверь баланс**  
  После пополнения баланс твоего Trading Account обновится в правом верхнем углу. Теперь можно открывать первую позицию.

  ![Confirm Balance](/images/perps-walkthrough/confirm-balance-english.png) <br>

**Для вывода средств (Trading Account → Wallet)**

1. Нажми на стрелку рядом с балансом в правом верхнем углу.  

![Click Withdraw](/images/perps-walkthrough/click-withdraw-english.png) <br>

2. В появившемся окне убедись, что направление стоит правильно: "From: Trading Account → To: Your Wallet". Если наоборот — снова нажми ↕, чтобы поменять. Введи сумму вручную или используй быстрые кнопки, затем нажми зелёную кнопку Withdraw. Средства вернутся в кошелёк мгновенно.  

![Withdraw Funds](/images/perps-walkthrough/withdraw-funds-english.png) <br>
`;

const trade = `
# **Основы торговли**

На Kana Perps ты можешь торговать с плечом — как на рост (Long), так и на падение (Short).

Можно использовать два типа ордеров:

* **Market Order** — сделка исполняется сразу по текущей цене
* **Limit Order** — сделка сработает только по выбранной тобой цене

Плечо — до **20×**. Пример:  
 **Сделка на 100 USDT с плечом 20× требует всего 5 USDT маржи.**  
 Чем выше плечо — тем меньше нужно на вход, но тем выше риск ликвидации.

Все сделки используют **Isolated Margin** — каждая позиция со своим риском. Если одну ликвидируют, другие не пострадают.

## **Быстрые переходы:**

- [Как открыть сделку по рынку](/perps/opening-trades#placing-a-market-trade-order)
- [Как поставить лимитный ордер](/perps/opening-trades#placing-a-limit-long-order)
- [Как закрыть позицию (частично или полностью)](/perps/managing-trades#closing-a-trade-partial--full)
- [Как добавить маржу](/perps/managing-trades#adding-margin-to-an-open-position)
`;

const opentrade = `
# **Открытие сделок: Market и Limit ордера**
## **Открытие рыночного ордера (Market Order)**

**Шаг 1: Выбери актив и тип сделки**

Перейди в блок Order Placement. По умолчанию выбран тип Market. Выбери нужный актив и задай желаемое плечо с помощью ползунка — от 1× до 20×.  

![Select Asset and Trade Type](/images/perps-walkthrough/select-asset-and-trade-type-english.png) <br>

**Шаг 2: Укажи сумму сделки**

Введи объём ордера — в USDT или в токене актива. Платформа автоматически покажет: предполагаемую цену ликвидации, требуемую маржу и проскальзывание.  

![Enter Order Value](/images/perps-walkthrough/enter-order-value-english.png) <br>

**Шаг 3: Подтверди сделку**

Нажми **Long**, если ожидаешь рост цены, или **Short**, если ставишь на падение. Операция исполнится мгновенно по текущей рыночной цене. Открытая позиция появится в блоке Positions ниже.

![Place Market Order](/images/perps-walkthrough/place-market-order-english.png) <br>

## **Открытие лимитного ордера (Limit Order)**

**Limit-ордер** позволяет открыть сделку по своей цене, отличной от текущей рыночной.

**Шаг 1: Выбери Limit и задай цену входа**  
В блоке Order Placement переключись на Limit. Укажи цену, по которой хочешь открыть позицию: ниже рынка для Long, выше рынка для Short.

![Select Limit Order](/images/perps-walkthrough/select-limit-order-english.png) <br>

**Шаг 2: Введи объём сделки**  
Как и в случае с Market, можно указать сумму в USDT или токене. Ты увидишь: цену ликвидации, маржу, проскальзывание.

![Enter Order Size](/images/perps-walkthrough/enter-order-size-english.png) <br>

**Шаг 3: Подтверди ордер**  
Нажми **Long** или **Short**, чтобы разместить лимитный ордер. Он появится в блоке Open Orders и будет ждать, пока цена дойдёт до указанного уровня. После исполнения позиция перейдёт в Positions.

![Place Limit Order](/images/perps-walkthrough/place-limit-order-english.png) <br>
`;

const closetrade = `
# **Как закрыть сделку (полностью или частично)**

**Полное закрытие позиции**  
Перейди во вкладку Positions и найди нужную сделку. Нажми Quick Close, чтобы закрыть всю позицию по текущей рыночной цене.

![Close Position](/images/perps-walkthrough/close-position-english.png) <br>

**Частичное закрытие по рынку (Market)**  
Выбери нужную позицию, переключись на Market, укажи объём, который хочешь закрыть, и нажми Confirm. Размер открытой позиции обновится автоматически.

![Partially Close Market](/images/perps-walkthrough/partially-close-market-english.png) <br>

**Частичное закрытие по лимитной цене (Limit)**  
Выбери позицию, переключись на Limit, задай желаемую цену выхода и объём. Нажми Confirm, чтобы разместить ордер на частичное закрытие. Он появится во вкладке Open Orders и исполнится, когда цена достигнет заданного уровня.

![Partially Close Limit](/images/perps-walkthrough/partially-close-limit-english.png) <br>

После полного или частичного закрытия сделка переместится в Order History.

![Order History](/images/perps-walkthrough/order-history-english.png) <br>
`;

const margin = `
# **Добавление маржи к открытой позиции**

Kana Perps использует изолированную маржу. Каждая сделка имеет своё собственное обеспечение — это защищает остальные позиции от ликвидации.

Следи за своими активными позициями и добавляй маржу, когда это необходимо.

**Шаг 1: Выбери позицию**  
Перейди во вкладку Positions и нажми на значок карандаша рядом с той сделкой, к которой хочешь добавить маржу.

![Select Position](/images/perps-walkthrough/select-position-english.png) <br>

**Шаг 2: Введи сумму**  
Укажи, сколько маржи хочешь добавить. Сумма должна быть меньше текущей маржи в позиции. Нажми Update, чтобы подтвердить. Новая сумма маржи сразу отобразится во вкладке Positions.

![Add Margin](/images/perps-walkthrough/add-margin-english.png) <br>
`;

const tpsl = `
# **TP/SL (тейк-профит и стоп-лосс)**

**Способ 1: Задать TP/SL при открытии сделки**  
Перед тем как разместить ордер, поставь галочку TP/SL в блоке Order Placement. Укажи желаемую цену тейк-профита и стоп-лосса. Платформа сразу покажет предполагаемую прибыль и убыток по текущей позиции. После этого размести ордер (Long или Short) — TP и SL будут применены автоматически.

![Set TPSL](/images/perps-walkthrough/set-tpsl-english.png) <br>

**Способ 2: Добавить или изменить TP/SL после открытия сделки**  
Перейди во вкладку Positions и нажми на значок редактирования рядом с TP/SL. Укажи новые значения и нажми Confirm. Обновлённые уровни сразу применятся и отобразятся в позиции.

![Modify TPSL](/images/perps-walkthrough/modify-tpsl-english.png) <br>

![TPSL Confirmation](/images/perps-walkthrough/tpsl-confirmation-english.png) <br>

## **Открытие двух позиций (Hedge Mode)**

На Kana Perps Hedge Mode включён по умолчанию — ты можешь держать одновременно Long и Short по одному и тому же активу. Это позволяет хеджировать риск, торговать в обе стороны, не закрывать старую позицию, чтобы открыть новую.

**Шаг 1: Выбери актив**  
В блоке Order Placement выбери нужный актив.

**Шаг 2: Открой Long и Short**  
Задай нужное плечо и объём. Сначала открой позицию в одну сторону (например, Long), а затем сразу — в другую (Short). Или наоборот.

**Шаг 3: Управляй позициями отдельно**  
Обе позиции появятся в списке Positions как независимые сделки. Их можно редактировать, частично закрывать или закрыть полностью — по отдельности.
`;

const swap = `
# **Обмен APT → USDC на Kana Labs**

Обмен токенов — одна из самых базовых и важных операций в DeFi. Kana Labs делает это быстро, дёшево и удобно — особенно в сети Aptos. Вот простой гайд по первому обмену.

**Что ты сделаешь:**  
 Ты обменяешь свои APT на USDC (стейблкоин) через агрегатор DEX от Kana Labs, который автоматически находит лучший курс среди разных источников.

## **Пошагово:**

**Шаг 1: Подключи кошелёк**  
 Открой Kana Labs и нажми "Connect Wallet".  
 Выбери нужный кошелёк (Petra, Nightly и др.) и убедись, что сеть выбрана правильно (Aptos Mainnet или Testnet).

**Шаг 2: Выбери пару для обмена**  
 В разделе Swap выбери **APT** как токен для продажи и **USDC** как токен для получения.

**Шаг 3: Введи сумму обмена**  
 Введи, сколько APT хочешь обменять.  
 Ты увидишь примерное количество USDC, которое получишь, включая актуальный курс.

**Шаг 4: Проверь курс и комиссию**  
 Kana автоматически подберёт лучший курс среди DEX.  
 Проверь проскальзывание, ожидаемый результат и комиссию до подтверждения.

**Шаг 5: Соверши обмен**  
 Нажми **"Swap"**, затем подтверди транзакцию в кошельке.

**Шаг 6: Готово!**  
 USDC поступят на твой кошелёк в течение нескольких секунд.  
 Баланс обновится сразу.

## **Совет:**

Хочешь обменять обратно?  
 Просто поменяй направление (USDC → APT) и повтори шаги.
`;

export const perpsCategory: Category = {
  id: "kanaperps",
  label: "Kana Perps: Пошаговые инструкции",
  slug: "kanaperps",
  position: 2,
  cardContent: "Пошаговые гайды: что нажать, как торговать и управлять позициями на Kana Perps.",
  description: `Осваивайся на практике! Мы подготовили пошаговые инструкции для каждого действия. Если не уверен — просто открой нужный раздел. Всё по делу — без лишних слов.`,
  pages: [
    {
      id: "connecting-wallet",
      title: "Подключение кошелька",
      slug: "/kanaperps-ru/connecting-wallet",
      sidebar_label: "Подключение кошелька",
      sidebar_position: 2,
      content: connectingwallet,
    },
    {
      id: "deposit-withdraw",
      title: "Пополнение и вывод средств",
      slug: "/kanaperps-ru/deposit-withdraw",
      sidebar_label: "Пополнение и вывод",
      sidebar_position: 3,
      content: deposit,
    },
    {
      id: "trade-basics",
      title: "Основы торговли",
      slug: "/kanaperps-ru/trade-basics",
      sidebar_label: "Основы торговли",
      sidebar_position: 4,
      content: trade,
    },
    {
      id: "opening-trades",
      title: "Открытие сделок",
      slug: "/kanaperps-ru/opening-trades",
      sidebar_label: "Открытие сделок",
      sidebar_position: 5,
      content: opentrade,
    },
    {
      id: "closing-trades",
      title: "Закрытие сделок",
      slug: "/kanaperps-ru/closing-trades",
      sidebar_label: "Закрытие сделок",
      sidebar_position: 6,
      content: closetrade,
    },
    {
      id: "margin",
      title: "Добавление маржи",
      slug: "/kanaperps-ru/margin",
      sidebar_label: "Добавление маржи",
      sidebar_position: 7,
      content: margin,
    },
    {
      id: "tpsl",
      title: "TP/SL",
      slug: "/kanaperps-ru/tpsl",
      sidebar_label: "TP/SL",
      sidebar_position: 8,
      content: tpsl,
    },
    {
      id: "token-swaps",
      title: "Обмен токенов",
      slug: "/kanaperps-ru/token-swaps",
      sidebar_label: "Обмен токенов",
      sidebar_position: 0,
      content: swap,
    }
  ],
};