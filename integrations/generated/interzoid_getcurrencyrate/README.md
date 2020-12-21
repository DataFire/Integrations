# @datafire/interzoid_getcurrencyrate

Client library for Interzoid Get Currency Rate API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_getcurrencyrate
```
```js
let interzoid_getcurrencyrate = require('@datafire/interzoid_getcurrencyrate').create();

.then(data => {
  console.log(data);
});
```

## Description

This API retrieves the latest currency exchange rate, against the US Dollar, for the given three-letter international currency code. These currency rates are compiled from many global sources and are updated several times per day.

## Actions

### getcurrencyrate
Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.


```js
interzoid_getcurrencyrate.getcurrencyrate({
  "license": "",
  "symbol": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * symbol **required** `string`: Currency symbol to retrieve current rate for

#### Output
* output `object`
  * Code `string`
  * Country `string`
  * Credits `string`
  * Name `string`
  * Rate `string`
  * Symbol `string`



## Definitions

*This integration has no definitions*
