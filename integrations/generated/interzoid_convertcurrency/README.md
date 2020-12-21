# @datafire/interzoid_convertcurrency

Client library for Interzoid Convert Currency Rate API

## Installation and Usage
```bash
npm install --save @datafire/interzoid_convertcurrency
```
```js
let interzoid_convertcurrency = require('@datafire/interzoid_convertcurrency').create();

.then(data => {
  console.log(data);
});
```

## Description

This API enables you to convert an amount of one currency into another currency using current foreign exchange rates.

## Actions

### convertcurrency
Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.


```js
interzoid_convertcurrency.convertcurrency({
  "license": "",
  "from": "",
  "to": "",
  "amount": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: Your Interzoid license API key. Register at www.interzoid.com/register
  * from **required** `string`: Currency symbol for the converted from amount
  * to **required** `string`: Currency symbol for the converted to amount
  * amount **required** `string`: The amount of currency to be converted

#### Output
* output `object`
  * Code `string`
  * Converted `string`
  * Credits `string`
  * Currency `string`



## Definitions

*This integration has no definitions*
