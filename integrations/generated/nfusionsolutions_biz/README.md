# @datafire/nfusionsolutions_biz

Client library for nFusion Solutions Market Data API v1

## Installation and Usage
```bash
npm install --save @datafire/nfusionsolutions_biz
```
```js
let nfusionsolutions_biz = require('@datafire/nfusionsolutions_biz').create({
  token: ""
});

nfusionsolutions_biz.api.vversion.Currencies.bbo.get({
  "version": ""
}).then(data => {
  console.log(data);
});
```

## Description

nFusion Solutions provides REST and streaming APIs that deliver enterprise-grade financial data. Data sets include real-time and historical pricing for Spot prices of precious metals such as Gold, Silver, Platinum, and Palladium, exchange rates for major currency pairs, exchange rates for Crypto Currencies such as BTC, ETH, and LTC. All API access requires authentication. In order to be issued access credentials you must first enter into a service agreement with nFusion Solutions and acquire a commercial license. For information on how to obtain a licence contact sales@nfusionsolutions.com.

## Actions

### api.vversion.Currencies.bbo.get
Current Best Bid and Offer


```js
nfusionsolutions_biz.api.vversion.Currencies.bbo.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * pairs `string`: <b>REQUIRED</b> - comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[FullQuote]](#response[fullquote])

### api.vversion.Currencies.bbo.supported.get
Only the currency pairs in the direction noted can be used with the BBO endpoint.
For example: USD/CAD is not the same as CAD/USD


```js
nfusionsolutions_biz.api.vversion.Currencies.bbo.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Currencies.history.get
Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.


```js
nfusionsolutions_biz.api.vversion.Currencies.history.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * pairs `string`: <b>REQUIRED</b> - comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
  * interval `string`: optional - aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
  * start `string`: <b>REQUIRED</b> - start date of time period. format is <i>yyyy-mm-dd</i>
  * end `string`: optional - end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[IntervalCollection]](#response[intervalcollection])

### api.vversion.Currencies.history.supported.get
Only the currency pairs in the direction noted can be used with the history endpoint.
For example: USD/CAD is not the same as CAD/USD


```js
nfusionsolutions_biz.api.vversion.Currencies.history.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Currencies.level2.supported.get
Only the currency pairs in the direction noted can be used with the Level2 endpoint.
For example: USD/CAD is not the same as CAD/USD


```js
nfusionsolutions_biz.api.vversion.Currencies.level2.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Currencies.rate.get
Current Mid Rate


```js
nfusionsolutions_biz.api.vversion.Currencies.rate.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * pairs `string`: <b>REQUIRED</b> - comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[Rate]](#response[rate])

### api.vversion.Currencies.rate.supported.get
Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD


```js
nfusionsolutions_biz.api.vversion.Currencies.rate.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Currencies.summary.get
Current and daily summary information combined into a single quote


```js
nfusionsolutions_biz.api.vversion.Currencies.summary.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * pairs `string`: <b>REQUIRED</b> - comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[Summary]](#response[summary])

### api.vversion.Currencies.summary.supported.get
Only the currency pairs in the direction noted can be used with the Summary endpoint.
For example: USD/CAD is not the same as CAD/USD


```js
nfusionsolutions_biz.api.vversion.Currencies.summary.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Metals.spot.bbo.get
Current Spot Price Best Bid and Offer


```js
nfusionsolutions_biz.api.vversion.Metals.spot.bbo.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * metals `string`: <b>REQUIRED</b> - comma separated list of metals
  * currency `string`: optional - currency for pricing, defaults to USD
  * unitofmeasure `string`: optional - unit of meaure, defaults to troy ounces. allowed values are:
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[FullQuote]](#response[fullquote])

### api.vversion.Metals.spot.history.get
Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.


```js
nfusionsolutions_biz.api.vversion.Metals.spot.history.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * metals `string`: <b>REQUIRED</b> - comma separated list of metals
  * currency `string`: optional - currency for pricing, defaults to USD
  * unitofmeasure `string`: optional - unit of meaure, defaults to troy ounces. allowed values are:
  * interval `string`: optional - aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), 
  * start `string`: <b>REQUIRED</b> - start date of time period. format is <i>yyyy-mm-dd</i>
  * end `string`: optional - end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
  * token `string`: <b>REQUIRED</b> - auth token
  * historicalfx `boolean`: optional - if true use historical currency rates otherwise current currency rates. Defaults to false.
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[IntervalCollection]](#response[intervalcollection])

### api.vversion.Metals.spot.summary.get
Current and daily summary information combined into a single quote


```js
nfusionsolutions_biz.api.vversion.Metals.spot.summary.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * metals `string`: <b>REQUIRED</b> - comma separated list of metals
  * currency `string`: optional - currency for pricing, defaults to USD
  * unitofmeasure `string`: optional - unit of meaure, defaults to troy ounces. allowed values are:
  * token `string`: <b>REQUIRED</b> - auth token
  * adjust `boolean`: optional - apply global and per-tenant spot price adjustments. Defaults to true.
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items [Response[Summary]](#response[summary])

### api.vversion.Metals.spot.supported.get
Get list of symbols supported by the spot endpoints


```js
nfusionsolutions_biz.api.vversion.Metals.spot.supported.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`

### api.vversion.Metals.spot.supported.currency.get
Get list of currencies supported by the spot endpoints for currency conversion


```js
nfusionsolutions_biz.api.vversion.Metals.spot.supported.currency.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * token `string`: <b>REQUIRED</b> - auth token
  * format `string`: optional - to override content negotiation specify a value of json or xml
  * version **required** `string`: The requested API version

#### Output
* output `array`
  * items `string`



## Definitions

### FullQuote
* FullQuote `object`
  * ask [SingleQuote](#singlequote)
  * baseCurrency `string`
  * bid [SingleQuote](#singlequote)
  * symbol `string`

### Interval
* Interval `object`
  * end `string`
  * high `number`
  * last `number`
  * low `number`
  * open `number`
  * start `string`

### IntervalCollection
* IntervalCollection `object`
  * baseCurrency `string`
  * intervals `array`
    * items [Interval](#interval)
  * name `string`
  * symbol `string`

### Rate
* Rate `object`
  * symbol `string`
  * timestamp `string`
  * value `number`

### Response[FullQuote]
* Response[FullQuote] `object`
  * data [FullQuote](#fullquote)
  * error `string`
  * requestedCurrency `string`
  * requestedSymbol `string`
  * success `boolean`

### Response[IntervalCollection]
* Response[IntervalCollection] `object`
  * data [IntervalCollection](#intervalcollection)
  * error `string`
  * requestedCurrency `string`
  * requestedSymbol `string`
  * success `boolean`

### Response[Rate]
* Response[Rate] `object`
  * data [Rate](#rate)
  * error `string`
  * requestedCurrency `string`
  * requestedSymbol `string`
  * success `boolean`

### Response[Summary]
* Response[Summary] `object`
  * data [Summary](#summary)
  * error `string`
  * requestedCurrency `string`
  * requestedSymbol `string`
  * success `boolean`

### SingleQuote
* SingleQuote `object`
  * marketMaker `string`
  * price `number`
  * timestamp `string`

### Summary
* Summary `object`
  * ask `number`
  * baseCurrency `string`
  * bid `number`
  * high `number`
  * last `number`
  * low `number`
  * oneDayChange `number`
  * oneDayPercentChange `number`
  * oneDayValue `number`
  * symbol `string`
  * timeStamp `string`


