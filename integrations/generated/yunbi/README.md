# @datafire/yunbi
Professional Cloud Trading Platform for Digital Assets

## Operation: v2.addresses.address.json.get
Check Deposit Address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "address": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "address"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.crowdsales.key.json.get
Get crowdsales plan info

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "description": "Crowdsale plan key"
    }
  },
  "additionalProperties": false,
  "required": [
    "key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.deposit.json.get
Get details of specific deposit.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "txid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "txid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.deposit_address.json.get
Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "currency": {
      "type": "string",
      "description": "The account to which you want to deposit. Available values: cny, btc, eth, pls, note, bts, bitcny, bitusd, bitbtc, yun, nxt, ltc, doge, sc, dgd, dcs, dao, etc, amp, 1st, rep, ans, zec, zmc, gnt"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "currency"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.deposits.json.get
Get your deposits history.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "currency": {
      "type": "string",
      "description": "Currency value contains  cny,btc,eth,pls,note,bts,bitcny,bitusd,bitbtc,yun,nxt,ltc,doge,sc,dgd,dcs,dao,etc,amp,1st,rep,ans,zec,zmc,gnt"
    },
    "limit": {
      "type": "integer",
      "description": "Set result limit."
    },
    "state": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.depth.json.get
Get depth or specified market. Both asks and bids are sorted from highest price to lowest.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned price levels. Default to 300."
    }
  },
  "additionalProperties": false,
  "required": [
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.k.json.get
Get OHLC(k line) of specific market.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned data points, default to 30."
    },
    "period": {
      "type": "integer",
      "description": "Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080"
    },
    "timestamp": {
      "type": "integer",
      "description": "An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.k_with_pending_trades.json.get
Get K data with pending trades, which are the trades not included in K data yet, because there's delay between trade generated and processed by K data generator.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "trade_id": {
      "type": "integer",
      "description": "The trade id of the first trade you received."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned data points, default to 30."
    },
    "period": {
      "type": "integer",
      "description": "Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080"
    },
    "timestamp": {
      "type": "integer",
      "description": "An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned."
    }
  },
  "additionalProperties": false,
  "required": [
    "market",
    "trade_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.markets.json.get
Get all available markets.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: v2.members.me.json.get
Get your profile and accounts info.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.order.json.get
Get information of specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "id": {
      "type": "integer",
      "description": "Unique order id."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.order.delete.json.post
Cancel an order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "id": {
      "type": "integer",
      "description": "Unique order id."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.order_book.json.get
Get the order book of specified market.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "asks_limit": {
      "type": "integer",
      "description": "Limit the number of returned sell orders. Default to 20."
    },
    "bids_limit": {
      "type": "integer",
      "description": "Limit the number of returned buy orders. Default to 20."
    }
  },
  "additionalProperties": false,
  "required": [
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.orders.json.get
Get your orders, results is paginated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "state": {
      "type": "string",
      "description": "Filter order by state, default to 'wait' (active orders)."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned orders, default to 100."
    },
    "page": {
      "type": "integer",
      "description": "Specify the page of paginated results."
    },
    "order_by": {
      "type": "string",
      "description": "If set, returned orders will be sorted in specific order, default to 'asc'."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.orders.json.post
Create a Sell/Buy order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "side": {
      "type": "string",
      "description": "Either 'sell' or 'buy'."
    },
    "volume": {
      "type": "string",
      "description": "The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'."
    },
    "price": {
      "type": "string",
      "description": "Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 CNY, the price is '3000.0'"
    },
    "ord_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "market",
    "side",
    "volume"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.orders.clear.json.post
Cancel all my orders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "side": {
      "type": "string",
      "description": "If present, only sell orders (asks) or buy orders (bids) will be canncelled."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.orders.multi.json.post
Create multiple sell/buy orders.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "orders": {
      "type": "array"
    },
    "orders[side]": {
      "type": "string",
      "description": "Either 'sell' or 'buy'."
    },
    "orders[volume]": {
      "type": "string",
      "description": "The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'."
    },
    "orders[price]": {
      "type": "string",
      "description": "Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 CNY, the price is '3000.0'"
    },
    "orders[ord_type]": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "market",
    "orders",
    "orders[side]",
    "orders[volume]"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.tickers.json.get
Get ticker of all markets.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: v2.tickers.market.json.get
Get ticker of specific market.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    }
  },
  "additionalProperties": false,
  "required": [
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.timestamp.json.get
Get server current time, in seconds since Unix epoch.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: v2.trades.json.get
Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned trades. Default to 50."
    },
    "timestamp": {
      "type": "integer",
      "description": "An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned."
    },
    "from": {
      "type": "integer",
      "description": "Trade id. If set, only trades created after the trade will be returned."
    },
    "to": {
      "type": "integer",
      "description": "Trade id. If set, only trades created before the trade will be returned."
    },
    "order_by": {
      "type": "string",
      "description": "If set, returned trades will be sorted in specific order, default to 'desc'."
    }
  },
  "additionalProperties": false,
  "required": [
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.trades.my.json.get
Get your executed trades. Trades are sorted in reverse creation order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "market": {
      "type": "string",
      "description": "Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets."
    },
    "limit": {
      "type": "integer",
      "description": "Limit the number of returned trades. Default to 50."
    },
    "timestamp": {
      "type": "integer",
      "description": "An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned."
    },
    "from": {
      "type": "integer",
      "description": "Trade id. If set, only trades created after the trade will be returned."
    },
    "to": {
      "type": "integer",
      "description": "Trade id. If set, only trades created before the trade will be returned."
    },
    "order_by": {
      "type": "string",
      "description": "If set, returned trades will be sorted in specific order, default to 'desc'."
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "market"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.withdraw.json.post
Generate withdrawal application

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "access_key": {
      "type": "string",
      "description": "Access key."
    },
    "tonce": {
      "type": "integer",
      "description": "Tonce is an integer represents the milliseconds elapsed since Unix epoch."
    },
    "signature": {
      "type": "string",
      "description": "The signature of your request payload, generated using your secret key."
    },
    "amount": {
      "type": "string",
      "description": "Withdraw amount"
    },
    "id": {
      "type": "integer",
      "description": "Withdrawal address ID"
    },
    "memo": {
      "type": "string",
      "description": "Withdraw Memo"
    }
  },
  "additionalProperties": false,
  "required": [
    "access_key",
    "tonce",
    "signature",
    "amount",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
