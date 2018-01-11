# @datafire/polygon

Client library for Polygon

## Installation and Usage
```bash
npm install --save @datafire/polygon
```
```js
let polygon = require('@datafire/polygon').create({
  apiKey: ""
});

polygon.v1.companies.get({}).then(data => {
  console.log(data);
})
```

## Description

The future of fintech.

## Actions

### v1.companies.get
Get a list of the traded companies that polygon.io streams. Company includes some details about the company which we hope to add more to soon.



```js
polygon.v1.companies.get({}, context)
```

#### Input
* input `object`
  * sort `string`: Which field to sort by. For desc place a `-` in front of the field name. eg `?sort=-marketcap`
  * perpage `number`: How many items to be on each page during pagination
  * page `number`: Which page of results to return

#### Output
* output `array`
  * items [Company](#company)

### v1.currencies.get
Get a list of the currencies that polygon.io streams.



```js
polygon.v1.currencies.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### v1.historic.agg.size.symbol.date.get
Get historic aggregations for a symbol.



```js
polygon.v1.historic.agg.size.symbol.date.get({
  "size": "",
  "symbol": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * size **required** `string` (values: second, minute): Size of the aggregation. `second` or `minute`
  * symbol **required** `string`: Symbol of the company to retrieve
  * date **required** `string`: Date/Day of the historic ticks to retreive
  * offset `integer`: Timestamp offset, used for pagination
  * limit `integer`: Limit the size of response, max: 10000

#### Output
* output `object`
  * day `string`: Date that was evaluated from the request
  * msLatency `integer`: Milliseconds of latency for the query results
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request
  * ticks `array`
    * items [Aggregate](#aggregate)

### v1.historic.forex.from.to.date.get
Get historic ticks for a currency pair. Example for **USD/JPY** the from would be **USD** and to would be **JPY**. The date formatted like **2017-6-22**



```js
polygon.v1.historic.forex.from.to.date.get({
  "from": "",
  "to": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: From Symbol of the currency pair
  * to **required** `string`: To Symbol of the currency pair
  * date **required** `string`: Date/Day of the historic ticks to retreive
  * offset `integer`: Timestamp offset, used for pagination
  * limit `integer`: Limit the size of response, max: 10000

#### Output
* output `object`
  * day `string`: Date that was evaluated from the request
  * msLatency `integer`: Milliseconds of latency for the query results
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request
  * ticks `array`
    * items [Forex](#forex)

### v1.historic.quotes.symbol.date.get
Get historic quotes for a symbol.



```js
polygon.v1.historic.quotes.symbol.date.get({
  "symbol": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * symbol **required** `string`: Symbol of the company to retrieve
  * date **required** `string`: Date/Day of the historic ticks to retreive
  * offset `integer`: Timestamp offset, used for pagination
  * limit `integer`: Limit the size of response, max: 10000

#### Output
* output `object`
  * day `string`: Date that was evaluated from the request
  * msLatency `integer`: Milliseconds of latency for the query results
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request
  * ticks `array`
    * items [Quote](#quote)

### v1.historic.trades.symbol.date.get
Get historic trades for a symbol.



```js
polygon.v1.historic.trades.symbol.date.get({
  "symbol": "",
  "date": ""
}, context)
```

#### Input
* input `object`
  * symbol **required** `string`: Symbol of the company to retrieve
  * date **required** `string`: Date/Day of the historic ticks to retreive
  * offset `integer`: Timestamp offset, used for pagination
  * limit `integer`: Limit the size of response, max: 10000

#### Output
* output `object`
  * day `string`: Date that was evaluated from the request
  * msLatency `integer`: Milliseconds of latency for the query results
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request
  * ticks `array`
    * items [Trade](#trade)

### v1.last.currencies.from.to.get
Get Last Trade Tick for a Currency Pair.



```js
polygon.v1.last.currencies.from.to.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: From Symbol of the pair
  * to **required** `string`: To Symbol of the pair

#### Output
* output `object`
  * last [LastForexTrade](#lastforextrade)
  * status `string`: Status of this requests response
  * symbol `string`: Symbol Pair that was evaluated from the request

### v1.last.stocks.symbol.get
Get the last trade for a given stock.



```js
polygon.v1.last.stocks.symbol.get({
  "symbol": ""
}, context)
```

#### Input
* input `object`
  * symbol **required** `string`: Symbol of the stock to get

#### Output
* output `object`
  * last [LastTrade](#lasttrade)
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request

### v1.last_quote.currencies.from.to.get
Get Last Quote Tick for a Currency Pair.



```js
polygon.v1.last_quote.currencies.from.to.get({
  "from": "",
  "to": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: From Symbol of the pair
  * to **required** `string`: To Symbol of the pair

#### Output
* output `object`
  * last [LastForexQuote](#lastforexquote)
  * status `string`: Status of this requests response
  * symbol `string`: Symbol Pair that was evaluated from the request

### v1.last_quote.stocks.symbol.get
Get the last quote tick for a given stock.



```js
polygon.v1.last_quote.stocks.symbol.get({
  "symbol": ""
}, context)
```

#### Input
* input `object`
  * symbol **required** `string`: Symbol of the stock to get

#### Output
* output `object`
  * last [LastQuote](#lastquote)
  * status `string`: Status of this requests response
  * symbol `string`: Symbol that was evaluated from the request



## Definitions

### Aggregate
* Aggregate `object`
  * c `integer`: Close price
  * h `integer`: High price
  * k `integer`: Transactions ( 1 transaction contains X shares exchanged )
  * l `integer`: Low price
  * o `integer`: Open price
  * t `integer`: Timestamp of this aggregation
  * v `integer`: Total Volume of all trades ( total shares exchanged )

### Company
* Company `object`
  * country `string`: Country in which this country is based.
  * exchange `string`: Exchange this company is traded on.
  * industry `string`: Industry this country operated/produces in.
  * marketcap `number`: Market cap as of the last updated timestamp.
  * name `string`: Name of the company.
  * sector `string`: Sector that this company is traded in.
  * symbol `string`: The actual exchange symbol this company is traded under.
  * updated `string`: Last time this company record was updated.

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Forex
* Forex `object`
  * a `integer`: Ask price
  * b `integer`: Bid price
  * t `integer`: Timestamp of this trade

### LastForexQuote
* LastForexQuote `object`
  * askprice `number`: Ask Price
  * bidprice `number`: Bid Price
  * timestamp `integer`: Timestamp of this trade

### LastForexTrade
* LastForexTrade `object`
  * exchange `integer`: Exchange this trade happened on
  * price `number`: Price of the trade
  * timestamp `integer`: Timestamp of this trade

### LastQuote
* LastQuote `object`
  * askexchange `integer`: Exchange the ask happened on
  * askprice `number`: Ask Price
  * asksize `integer`: Ask Size
  * bidexchange `integer`: Exchange the bid happened on
  * bidprice `number`: Bid Price
  * bidsize `integer`: Bid Size
  * cond `integer`: Condition of the quote
  * timestamp `integer`: Timestamp of this trade

### LastTrade
* LastTrade `object`
  * cond1 `integer`: Condition 1 of the trade
  * cond2 `integer`: Condition 2 of the trade
  * cond3 `integer`: Condition 3 of the trade
  * cond4 `integer`: Condition 4 of the trade
  * exchange `integer`: Exchange this trade happened on
  * price `number`: Price of the trade
  * size `integer`: Size of this trade
  * timestamp `integer`: Timestamp of this trade

### Quote
* Quote `object`
  * aE `string`: Ask Exchange
  * aP `number`: Ask Price
  * aS `integer`: Ask Size
  * bE `string`: Bid Exchange
  * bP `number`: Bid Price
  * bS `integer`: Bid Size
  * c `integer`: Condition of this quote
  * t `integer`: Timestamp of this trade

### Trade
* Trade `object`
  * c1 `integer`: Condition 1 of this trade
  * c2 `integer`: Condition 2 of this trade
  * c3 `integer`: Condition 3 of this trade
  * c4 `integer`: Condition 4 of this trade
  * e `string`: The exchange this trade happened on
  * p `number`: Price of this trade
  * s `integer`: Size of the trade
  * t `integer`: Timestamp of this trade


