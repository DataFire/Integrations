# @datafire/exchangerate_api

Client library for ExchangeRate-API

## Installation and Usage
```bash
npm install --save @datafire/exchangerate_api
```
```js
let exchangerate_api = require('@datafire/exchangerate_api').create();

.then(data => {
  console.log(data);
});
```

## Description

Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.

## Actions

### latest.base_currency.get
Returns latest exchange rates in parameter-supplied base currency.


```js
exchangerate_api.latest.base_currency.get({
  "base_currency": ""
}, context)
```

#### Input
* input `object`
  * base_currency **required** `string`: **Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies

#### Output
* output `object`
  * base `string`: The currency code you supplied as base in your request
  * date `string`: The date these exchange rates are for
  * rates `object`: Each supported currency code in terms of the base currency
  * time_last_updated `integer`: The epoch time this set of exchange rates was generated



## Definitions

*This integration has no definitions*
