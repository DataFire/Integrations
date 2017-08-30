# @datafire/yunbi

Client library for Yunbi

## Installation and Usage
```bash
npm install --save datafire @datafire/yunbi
```

```js
let datafire = require('datafire');
let yunbi = require('@datafire/yunbi').create();

yunbi.v2.addresses.address.json.get({}).then(data => {
  console.log(data);
})
```

## Description
Professional Cloud Trading Platform for Digital Assets

## Actions
### v2.addresses.address.json.get
Check Deposit Address


```js
yunbi.v2.addresses.address.json.get({
  "address": ""
}, context)
```

#### Parameters
* address (string) **required**

### v2.crowdsales.key.json.get
Get crowdsales plan info


```js
yunbi.v2.crowdsales.key.json.get({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - Crowdsale plan key

### v2.deposit.json.get
Get details of specific deposit.


```js
yunbi.v2.deposit.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "txid": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* txid (string) **required**

### v2.deposit_address.json.get
Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.


```js
yunbi.v2.deposit_address.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "currency": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* currency (string) **required** - The account to which you want to deposit. Available values: cny, btc, eth, pls, note, bts, bitcny, bitusd, bitbtc, yun, nxt, ltc, doge, sc, dgd, dcs, dao, etc, amp, 1st, rep, ans, zec, zmc, gnt

### v2.deposits.json.get
Get your deposits history.


```js
yunbi.v2.deposits.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* currency (string) - Currency value contains  cny,btc,eth,pls,note,bts,bitcny,bitusd,bitbtc,yun,nxt,ltc,doge,sc,dgd,dcs,dao,etc,amp,1st,rep,ans,zec,zmc,gnt
* limit (integer) - Set result limit.
* state (string)

### v2.depth.json.get
Get depth or specified market. Both asks and bids are sorted from highest price to lowest.


```js
yunbi.v2.depth.json.get({
  "market": ""
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* limit (integer) - Limit the number of returned price levels. Default to 300.

### v2.k.json.get
Get OHLC(k line) of specific market.


```js
yunbi.v2.k.json.get({
  "market": ""
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* limit (integer) - Limit the number of returned data points, default to 30.
* period (integer) - Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
* timestamp (integer) - An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned.

### v2.k_with_pending_trades.json.get
Get K data with pending trades, which are the trades not included in K data yet, because there's delay between trade generated and processed by K data generator.


```js
yunbi.v2.k_with_pending_trades.json.get({
  "market": "",
  "trade_id": 0
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* trade_id (integer) **required** - The trade id of the first trade you received.
* limit (integer) - Limit the number of returned data points, default to 30.
* period (integer) - Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
* timestamp (integer) - An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned.

### v2.markets.json.get
Get all available markets.


```js
yunbi.v2.markets.json.get(null, context)
```

#### Parameters
*This action has no parameters*

### v2.members.me.json.get
Get your profile and accounts info.


```js
yunbi.v2.members.me.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.

### v2.order.json.get
Get information of specified order.


```js
yunbi.v2.order.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "id": 0
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* id (integer) **required** - Unique order id.

### v2.order.delete.json.post
Cancel an order.


```js
yunbi.v2.order.delete.json.post({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "id": 0
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* id (integer) **required** - Unique order id.

### v2.order_book.json.get
Get the order book of specified market.


```js
yunbi.v2.order_book.json.get({
  "market": ""
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* asks_limit (integer) - Limit the number of returned sell orders. Default to 20.
* bids_limit (integer) - Limit the number of returned buy orders. Default to 20.

### v2.orders.json.get
Get your orders, results is paginated.


```js
yunbi.v2.orders.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "market": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* state (string) - Filter order by state, default to 'wait' (active orders).
* limit (integer) - Limit the number of returned orders, default to 100.
* page (integer) - Specify the page of paginated results.
* order_by (string) - If set, returned orders will be sorted in specific order, default to 'asc'.

### v2.orders.json.post
Create a Sell/Buy order.


```js
yunbi.v2.orders.json.post({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "market": "",
  "side": "",
  "volume": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* side (string) **required** - Either 'sell' or 'buy'.
* volume (string) **required** - The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'.
* price (string) - Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 CNY, the price is '3000.0'
* ord_type (string)

### v2.orders.clear.json.post
Cancel all my orders.


```js
yunbi.v2.orders.clear.json.post({
  "access_key": "",
  "tonce": 0,
  "signature": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* side (string) - If present, only sell orders (asks) or buy orders (bids) will be canncelled.

### v2.orders.multi.json.post
Create multiple sell/buy orders.


```js
yunbi.v2.orders.multi.json.post({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "market": "",
  "orders": [],
  "orders[side]": "",
  "orders[volume]": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* orders (array) **required**
* orders[side] (string) **required** - Either 'sell' or 'buy'.
* orders[volume] (string) **required** - The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'.
* orders[price] (string) - Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 CNY, the price is '3000.0'
* orders[ord_type] (string)

### v2.tickers.json.get
Get ticker of all markets.


```js
yunbi.v2.tickers.json.get(null, context)
```

#### Parameters
*This action has no parameters*

### v2.tickers.market.json.get
Get ticker of specific market.


```js
yunbi.v2.tickers.market.json.get({
  "market": ""
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.

### v2.timestamp.json.get
Get server current time, in seconds since Unix epoch.


```js
yunbi.v2.timestamp.json.get(null, context)
```

#### Parameters
*This action has no parameters*

### v2.trades.json.get
Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.


```js
yunbi.v2.trades.json.get({
  "market": ""
}, context)
```

#### Parameters
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* limit (integer) - Limit the number of returned trades. Default to 50.
* timestamp (integer) - An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
* from (integer) - Trade id. If set, only trades created after the trade will be returned.
* to (integer) - Trade id. If set, only trades created before the trade will be returned.
* order_by (string) - If set, returned trades will be sorted in specific order, default to 'desc'.

### v2.trades.my.json.get
Get your executed trades. Trades are sorted in reverse creation order.


```js
yunbi.v2.trades.my.json.get({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "market": ""
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* market (string) **required** - Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
* limit (integer) - Limit the number of returned trades. Default to 50.
* timestamp (integer) - An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
* from (integer) - Trade id. If set, only trades created after the trade will be returned.
* to (integer) - Trade id. If set, only trades created before the trade will be returned.
* order_by (string) - If set, returned trades will be sorted in specific order, default to 'desc'.

### v2.withdraw.json.post
Generate withdrawal application


```js
yunbi.v2.withdraw.json.post({
  "access_key": "",
  "tonce": 0,
  "signature": "",
  "amount": "",
  "id": 0
}, context)
```

#### Parameters
* access_key (string) **required** - Access key.
* tonce (integer) **required** - Tonce is an integer represents the milliseconds elapsed since Unix epoch.
* signature (string) **required** - The signature of your request payload, generated using your secret key.
* amount (string) **required** - Withdraw amount
* id (integer) **required** - Withdrawal address ID
* memo (string) - Withdraw Memo

